from sqlalchemy.orm import Session
from sqlalchemy import func

from app.models.asset import Asset
from app.models.port import Port
from app.models.vulnerability import Vulnerability


def get_dashboard_summary(db: Session):
    """
    Returns high-level dashboard statistics.
    """

    total_assets = db.query(Asset).count()

    active_assets = (
        db.query(Asset)
        .filter(Asset.host_status == "up")
        .count()
    )

    total_ports = db.query(Port).count()

    total_vulnerabilities = db.query(Vulnerability).count()

    critical = (
        db.query(Vulnerability)
        .filter(Vulnerability.severity == "CRITICAL")
        .count()
    )

    high = (
        db.query(Vulnerability)
        .filter(Vulnerability.severity == "HIGH")
        .count()
    )

    medium = (
        db.query(Vulnerability)
        .filter(Vulnerability.severity == "MEDIUM")
        .count()
    )

    low = (
        db.query(Vulnerability)
        .filter(Vulnerability.severity == "LOW")
        .count()
    )

    return {
        "total_assets": total_assets,
        "active_assets": active_assets,
        "total_ports": total_ports,
        "total_vulnerabilities": total_vulnerabilities,
        "severity": {
            "critical": critical,
            "high": high,
            "medium": medium,
            "low": low
        }
    }


def get_top_vulnerabilities(db: Session, limit: int = 10):
    """
    Returns highest risk vulnerabilities
    in a frontend-friendly format.
    """

    vulnerabilities = (
        db.query(Vulnerability)
        .order_by(Vulnerability.cvss_score.desc())
        .limit(limit)
        .all()
    )

    return [
        {
            "cve": vuln.cve_id,
            "severity": vuln.severity,
            "cvss": vuln.cvss_score,
            "epss": vuln.epss_score,
            "epss_percentile": vuln.epss_percentile,
            "product": vuln.product,
            "version": vuln.version,
            "published": vuln.published_date
        }
        for vuln in vulnerabilities
    ]


def get_top_vendors(db: Session):
    """
    Most common vendors.
    """

    vendors = (
        db.query(
            Asset.vendor,
            func.count(Asset.id).label("count")
        )
        .group_by(Asset.vendor)
        .order_by(func.count(Asset.id).desc())
        .all()
    )

    return [
        {
            "vendor": vendor if vendor else "Unknown",
            "count": count
        }
        for vendor, count in vendors
    ]


def get_top_operating_systems(db: Session):
    """
    Most common operating systems.
    """

    operating_systems = (
        db.query(
            Asset.os,
            func.count(Asset.id).label("count")
        )
        .group_by(Asset.os)
        .order_by(func.count(Asset.id).desc())
        .all()
    )

    return [
        {
            "os": os_name if os_name else "Unknown",
            "count": count
        }
        for os_name, count in operating_systems
    ]


def get_asset_risk_distribution(db: Session):
    """
    Number of assets in each risk level.
    """

    low = (
        db.query(Asset)
        .filter(Asset.risk_level == "LOW")
        .count()
    )

    medium = (
        db.query(Asset)
        .filter(Asset.risk_level == "MEDIUM")
        .count()
    )

    high = (
        db.query(Asset)
        .filter(Asset.risk_level == "HIGH")
        .count()
    )

    critical = (
        db.query(Asset)
        .filter(Asset.risk_level == "CRITICAL")
        .count()
    )

    return {
        "LOW": low,
        "MEDIUM": medium,
        "HIGH": high,
        "CRITICAL": critical
    }


def get_top_risky_assets(db: Session, limit: int = 10):
    """
    Assets ordered by highest calculated risk score.
    """

    assets = (
         db.query(Asset)
         .filter(Asset.risk_score.isnot(None))
         .order_by(Asset.risk_score.desc())
         .limit(limit)
         .all()
        )

    return [
        {
            "id": asset.id,
            "hostname": asset.hostname,
            "ip_address": asset.ip_address,
            "risk_score": asset.risk_score,
            "risk_level": asset.risk_level
        }
        for asset in assets
    ]
    
 #stats   
def get_vulnerability_statistics(db: Session):
    """
    Returns overall vulnerability statistics.
    """

    total = db.query(Vulnerability).count()

    critical = (
        db.query(Vulnerability)
        .filter(Vulnerability.severity == "CRITICAL")
        .count()
    )

    high = (
        db.query(Vulnerability)
        .filter(Vulnerability.severity == "HIGH")
        .count()
    )

    medium = (
        db.query(Vulnerability)
        .filter(Vulnerability.severity == "MEDIUM")
        .count()
    )

    low = (
        db.query(Vulnerability)
        .filter(Vulnerability.severity == "LOW")
        .count()
    )

    average_cvss = (
        db.query(func.avg(Vulnerability.cvss_score))
        .scalar()
        or 0
    )

    average_epss = (
        db.query(func.avg(Vulnerability.epss_score))
        .scalar()
        or 0
    )

    return {
        "total": total,
        "critical": critical,
        "high": high,
        "medium": medium,
        "low": low,
        "average_cvss": round(average_cvss, 2),
        "average_epss": round(average_epss, 4)
    }
    
    
#trends  
def get_vulnerability_trends(db: Session):
    """
    Returns the number of vulnerabilities discovered each month.
    """

    trends = (
        db.query(
            func.date_trunc("month", Vulnerability.created_at).label("month"),
            func.count(Vulnerability.id).label("count")
        )
        .group_by(
            func.date_trunc("month", Vulnerability.created_at)
        )
        .order_by(
            func.date_trunc("month", Vulnerability.created_at)
        )
        .all()
    )

    return [
        {
            "month": month.strftime("%Y-%m"),
            "count": count
        }
        for month, count in trends
    ]