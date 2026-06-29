from sqlalchemy.orm import Session

from app.models.asset import Asset
from app.models.port import Port
from app.models.vulnerability import Vulnerability


def get_asset_details(db: Session, asset_id: int):
    """
    Returns complete information about an asset,
    including ports, vulnerabilities, and risk summary.
    """

    asset = (
        db.query(Asset)
        .filter(Asset.id == asset_id)
        .first()
    )

    if not asset:
        return None

    ports = (
        db.query(Port)
        .filter(Port.asset_id == asset.id)
        .all()
    )

    vulnerabilities = (
        db.query(Vulnerability)
        .filter(Vulnerability.asset_id == asset.id)
        .order_by(Vulnerability.cvss_score.desc())
        .all()
    )


    # Vulnerability severity summary
    critical = 0
    high = 0
    medium = 0
    low = 0

    for vuln in vulnerabilities:

        if vuln.severity == "CRITICAL":
            critical += 1

        elif vuln.severity == "HIGH":
            high += 1

        elif vuln.severity == "MEDIUM":
            medium += 1

        elif vuln.severity == "LOW":
            low += 1


    return {
        "id": asset.id,
        "ip_address": asset.ip_address,
        "hostname": asset.hostname,
        "os": asset.os,
        "host_status": asset.host_status,
        "mac_address": asset.mac_address,
        "vendor": asset.vendor,
        "scan_type": asset.scan_type,
        "last_seen": asset.last_seen,

        "risk_score": asset.risk_score,
        "risk_level": asset.risk_level,


        "summary": {
            "open_ports": len(ports),
            "vulnerabilities": len(vulnerabilities),
            "critical": critical,
            "high": high,
            "medium": medium,
            "low": low
        },


        "ports": [
            {
                "id": port.id,
                "port": port.port_number,
                "service": port.service,
                "state": port.state
            }
            for port in ports
        ],


        "vulnerabilities": [
            {
                "id": vuln.id,
                "cve": vuln.cve_id,
                "product": vuln.product,
                "version": vuln.version,
                "severity": vuln.severity,
                "cvss": vuln.cvss_score,
                "epss": vuln.epss_score,
                "epss_percentile": vuln.epps_percentile if hasattr(vuln, "epps_percentile") else vuln.epss_percentile,
                "description": vuln.description,
                "published": vuln.published_date,
                "port_id": vuln.port_id
            }
            for vuln in vulnerabilities
        ]
    }