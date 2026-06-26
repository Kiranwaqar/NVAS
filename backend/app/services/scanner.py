import nmap
from datetime import datetime
from app.models.asset import Asset
from app.models.port import Port
from app.models.scan_log import ScanLog

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
    scan_log = db.query(ScanLog).filter(
        ScanLog.id == scan_id
    ).first()

    try:
        scan_log.status = "running"
        db.commit()

        scanner.scan(hosts=target, arguments="-sV -O")

        total_hosts = 0

        for host in scanner.all_hosts():
            total_hosts += 1

            # Check if asset already exists
            existing_asset = db.query(Asset).filter(
                Asset.ip_address == host
            ).first()

            if existing_asset:
                # Update existing asset
                existing_asset.hostname = scanner[host].hostname()
                existing_asset.os = get_os(scanner, host)
                existing_asset.host_status = scanner[host].state()
                existing_asset.mac_address = get_mac(scanner, host)
                existing_asset.vendor = get_vendor(scanner, host)
                existing_asset.scan_type = "network-range"
                existing_asset.last_seen = datetime.utcnow()

                db.commit()

                asset = existing_asset

                # Remove old ports before adding new ones
                db.query(Port).filter(
                    Port.asset_id == asset.id
                ).delete()

                db.commit()

            else:
                # Create new asset
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

            # Insert fresh ports
            for proto in scanner[host].all_protocols():
                for port in scanner[host][proto].keys():
                    port_entry = Port(
                        asset_id=asset.id,
                        port_number=port,
                        service=scanner[host][proto][port]["name"],
                        state=scanner[host][proto][port]["state"]
                    )

                    db.add(port_entry)

            db.commit()

        scan_log.status = f"completed ({total_hosts} hosts)"
        scan_log.completed_at = datetime.utcnow()
        db.commit()

    except Exception as e:
        scan_log.status = "failed"
        db.commit()
        print("Scan failed")