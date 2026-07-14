from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.database.session import get_db
from app.services.dashboard_service import (
    get_dashboard_summary,
    get_top_vulnerabilities,
    get_top_vendors,
    get_top_operating_systems,
    get_asset_risk_distribution,
    get_top_risky_assets,
    get_vulnerability_statistics,
    get_vulnerability_trends
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