from sqlalchemy.orm import Session

from app.models.scan_log import ScanLog
from app.models.asset import Asset
from app.models.vulnerability import Vulnerability


def get_recent_activity(db: Session):

    activities = []

    # -------------------------
    # Recent scans
    # -------------------------

    scans = (
        db.query(ScanLog)
        .order_by(ScanLog.started_at.desc())
        .limit(5)
        .all()
    )

    for scan in scans:

        activities.append({

            "type": "Scan",

            "time": scan.started_at,

            "target": scan.target,

            "status": scan.status

        })

    # -------------------------
    # Recent assets
    # -------------------------

    assets = (
        db.query(Asset)
        .order_by(Asset.last_seen.desc())
        .limit(5)
        .all()
    )

    for asset in assets:

        activities.append({

            "type": "Asset",

            "time": asset.last_seen,

            "asset_id": asset.id,

            "ip_address": asset.ip_address,

            "hostname": asset.hostname,

            "risk_level": asset.risk_level

        })

    # -------------------------
    # Recent vulnerabilities
    # -------------------------

    vulns = (
        db.query(Vulnerability)
        .order_by(Vulnerability.created_at.desc())
        .limit(5)
        .all()
    )

    for vuln in vulns:

        activities.append({

            "type": "Vulnerability",

            "time": vuln.created_at,

            "cve": vuln.cve_id,

            "severity": vuln.severity,

            "asset_id": vuln.asset_id

        })

    # -------------------------
    # Sort everything together
    # -------------------------

    activities.sort(
        key=lambda x: x["time"],
        reverse=True
    )

    return activities[:10]