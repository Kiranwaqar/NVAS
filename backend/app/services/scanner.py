import nmap
from datetime import datetime

from app.models.asset import Asset
from app.models.port import Port
from app.models.scan_log import ScanLog
from app.models.vulnerability import Vulnerability
from app.services.vulnerability_service import fetch_vulnerabilities
from app.services.risk_service import calculate_asset_risk

scanner = nmap.PortScanner()


def get_os(scanner, host):
    try:
        if "osmatch" in scanner[host]:
            return scanner[host]["osmatch"][0]["name"]
    except:
        pass
    return "Unknown"


def get_mac(scanner, host):
    try:
        if "addresses" in scanner[host]:
            return scanner[host]["addresses"].get("mac", "Unknown")
    except:
        pass
    return "Unknown"


def get_vendor(scanner, host):
    try:
        if "vendor" in scanner[host]:
            vendors = scanner[host]["vendor"]
            if vendors:
                return list(vendors.values())[0]
    except:
        pass
    return "Unknown"


def scan_target(scan_id, target, db):
    print("========== SCAN STARTED ==========")
    print("Target:", target)

    scan_log = db.query(ScanLog).filter(
        ScanLog.id == scan_id
    ).first()

    try:
        scan_log.status = "running"
        db.commit()

        # OS detection temporarily removed
        scanner.scan(hosts=target, arguments="-sV")

        # Temporary debugging
        from pprint import pprint

        for host in scanner.all_hosts():
            for proto in scanner[host].all_protocols():
                for port in scanner[host][proto]:
                    pprint(scanner[host][proto][port])

        total_hosts = 0

        for host in scanner.all_hosts():

            total_hosts += 1

            # ----------------------------
            # Asset
            # ----------------------------

            existing_asset = db.query(Asset).filter(
                Asset.ip_address == host
            ).first()

            if existing_asset:

                existing_asset.hostname = scanner[host].hostname()
                existing_asset.os = get_os(scanner, host)
                existing_asset.host_status = scanner[host].state()
                existing_asset.mac_address = get_mac(scanner, host)
                existing_asset.vendor = get_vendor(scanner, host)
                existing_asset.scan_type = "network-range"
                existing_asset.last_seen = datetime.utcnow()

                db.commit()

                asset = existing_asset

                # ----------------------------
                # Delete old vulnerabilities
                # ----------------------------

                old_ports = db.query(Port).filter(
                    Port.asset_id == asset.id
                ).all()

                for port in old_ports:
                    db.query(Vulnerability).filter(
                        Vulnerability.port_id == port.id
                    ).delete()

                # ----------------------------
                # Delete old ports
                # ----------------------------

                db.query(Port).filter(
                    Port.asset_id == asset.id
                ).delete()

                # Commit both deletions together
                db.commit()

            else:

                asset = Asset(
                    ip_address=host,
                    hostname=scanner[host].hostname(),
                    os=get_os(scanner, host),
                    host_status=scanner[host].state(),
                    mac_address=get_mac(scanner, host),
                    vendor=get_vendor(scanner, host),
                    scan_type="network-range",
                    last_seen=datetime.utcnow()
                )

                db.add(asset)
                db.commit()
                db.refresh(asset)

            # ----------------------------
            # Ports
            # ----------------------------

            for proto in scanner[host].all_protocols():

                for port in scanner[host][proto].keys():

                    service_info = scanner[host][proto][port]

                    port_entry = Port(
                        asset_id=asset.id,
                        port_number=port,
                        service=service_info.get("name", ""),
                        state=service_info.get("state", "")
                    )

                    db.add(port_entry)

                    # Generate port ID immediately
                    db.flush()

                    cpe = service_info.get("cpe", "")
                    product = service_info.get("product", "")
                    version = service_info.get("version", "")

                    print("--------------------------------")
                    print("Port:", port)
                    print("Service:", product)
                    print("Version:", version)
                    print("CPE:", cpe)
                    print(service_info)

                    if cpe:

                        fetch_vulnerabilities(
                            db=db,
                            cpe=cpe,
                            asset_id=asset.id,
                            port_id=port_entry.id,
                            product=product,
                            version=version
                        )

            db.commit()

        calculate_asset_risk(asset.id, db)
        scan_log.status = f"completed ({total_hosts} hosts)"
        scan_log.completed_at = datetime.utcnow()
        db.commit()

    except Exception as e:

        scan_log.status = "failed"
        db.commit()

        print("========== ERROR ==========")
        print(type(e))
        print(e)
        print("===========================")