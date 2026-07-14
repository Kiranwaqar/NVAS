from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from app.services.recent_activity_service import get_recent_activity
from app.database.session import get_db
from app.services.dashboard_service import (
    get_dashboard_summary,
    get_top_vulnerabilities,
    get_top_vendors,
    get_top_operating_systems,
    get_asset_risk_distribution,
    get_top_risky_assets,
    get_vulnerability_statistics,
    get_vulnerability_trends,
    get_top_exploitable_vulnerabilities,
    get_vendor_risk_analytics,
    get_most_vulnerable_assets
)

router = APIRouter(
    prefix="/dashboard",
    tags=["Dashboard"]
)


@router.get(
    "/summary",
    summary="Dashboard Summary",
    description="Returns overall dashboard statistics including assets, ports, vulnerabilities, and severity counts."
)
def dashboard_summary(
    db: Session = Depends(get_db)
):
    return get_dashboard_summary(db)


@router.get(
    "/top-vulnerabilities",
    summary="Top Vulnerabilities",
    description="Returns vulnerabilities ordered by highest CVSS score."
)
def top_vulnerabilities(
    db: Session = Depends(get_db)
):
    return get_top_vulnerabilities(db)


@router.get(
    "/vendors",
    summary="Vendor Distribution",
    description="Returns discovered hardware vendors and the number of assets for each."
)
def vendors(
    db: Session = Depends(get_db)
):
    return get_top_vendors(db)


@router.get(
    "/operating-systems",
    summary="Operating System Distribution",
    description="Returns detected operating systems across all scanned assets."
)
def operating_systems(
    db: Session = Depends(get_db)
):
    return get_top_operating_systems(db)


@router.get(
    "/risk-distribution",
    summary="Asset Risk Distribution",
    description="Returns the number of assets grouped by calculated risk level."
)
def risk_distribution(
    db: Session = Depends(get_db)
):
    return get_asset_risk_distribution(db)


@router.get(
    "/top-risky-assets",
    summary="Top Risky Assets",
    description="Returns the assets with the highest calculated risk scores."
)
def top_risky_assets(
    db: Session = Depends(get_db)
):
    return get_top_risky_assets(db)


@router.get(
    "/vulnerability-statistics",
    summary="Vulnerability Statistics",
    description="Returns vulnerability counts and average CVSS/EPSS values."
)
def vulnerability_statistics(
    db: Session = Depends(get_db)
):
    return get_vulnerability_statistics(db)


@router.get(
    "/vulnerability-trends",
    summary="Vulnerability Trends",
    description="Returns vulnerability discovery counts grouped by month."
)
def vulnerability_trends(
    db: Session = Depends(get_db)
):
    return get_vulnerability_trends(db)


@router.get(
    "/recent-activity",
    summary="Recent Dashboard Activity",
    description="Returns the latest scans, asset updates, and discovered vulnerabilities."
)
def recent_activity(
    db: Session = Depends(get_db)
):
    return get_recent_activity(db)


@router.get("/top-exploitable-vulnerabilities")
def top_exploitable_vulnerabilities(
    limit: int = 10,
    db: Session = Depends(get_db)
):

    return get_top_exploitable_vulnerabilities(
        db,
        limit
    )
    
    
@router.get("/vendor-risk-analytics")
def vendor_risk_analytics(
    db: Session = Depends(get_db)
):
    return get_vendor_risk_analytics(db)


@router.get("/most-vulnerable-assets")
def most_vulnerable_assets(
    limit: int = 10,
    db: Session = Depends(get_db)
):
    return get_most_vulnerable_assets(
        db,
        limit
    )