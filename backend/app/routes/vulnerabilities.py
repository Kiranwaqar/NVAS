from fastapi import APIRouter, Depends, Query, HTTPException
from sqlalchemy.orm import Session

from app.database.session import get_db
from app.models.vulnerability import Vulnerability

from app.services.vulnerability_details_service import (
    get_vulnerability_details
)

router = APIRouter(
    prefix="/vulnerabilities",
    tags=["Vulnerabilities"]
)


@router.get("/")
def get_all_vulnerabilities(
    severity: str = Query(None),
    asset_id: int | None = Query(None),
    cve: str | None = Query(None),
    product: str | None = Query(None),
    version: str | None = Query(None),
    min_cvss: float = Query(None),
    max_cvss: float = Query(None),
    sort: str = Query(None),
    page: int = Query(1, ge=1),
    limit: int = Query(10, ge=1, le=100),

    db: Session = Depends(get_db)
):

    query = db.query(Vulnerability)

    # -------------------------
    # Severity
    # -------------------------

    if severity:
        query = query.filter(
            Vulnerability.severity == severity.upper()
        )
        
    # -------------------------
    # asset filter
    # -------------------------
    
    if asset_id:
     query = query.filter(
        Vulnerability.asset_id == asset_id
    )
    
    # -------------------------
    # asset filter
    # -------------------------
    
    if cve:
     query = query.filter(
        Vulnerability.cve_id.ilike(f"%{cve}%")
    )

    # -------------------------
    # Product Filter
    # -------------------------

    if product:
        query = query.filter(
            Vulnerability.product.ilike(f"%{product}%")
        )

    # -------------------------
    # Version Filter
    # -------------------------

    if version:
        query = query.filter(
            Vulnerability.version.ilike(f"%{version}%")
        )

    # -------------------------
    # CVSS
    # -------------------------

    if min_cvss is not None:
        query = query.filter(
            Vulnerability.cvss_score >= min_cvss
        )

    if max_cvss is not None:
        query = query.filter(
            Vulnerability.cvss_score <= max_cvss
        )

    # -------------------------
    # Sorting
    # -------------------------

    if sort == "cvss":
        query = query.order_by(
            Vulnerability.cvss_score.desc()
        )

    elif sort == "epss":
        query = query.order_by(
            Vulnerability.epss_score.desc()
        )

    elif sort == "date":
        query = query.order_by(
            Vulnerability.published_date.desc()
        )

    # -------------------------
    # Total count
    # -------------------------

    total = query.count()

    # -------------------------
    # Pagination
    # -------------------------

    offset = (page - 1) * limit

    vulnerabilities = (
        query
        .offset(offset)
        .limit(limit)
        .all()
    )

    return {

        "page": page,

        "limit": limit,

        "total": total,

        "returned": len(vulnerabilities),

        "data": vulnerabilities

    }
    
    
@router.get(
    "/{vulnerability_id}",
    summary="Get Vulnerability Details",
    description="Returns complete information about a specific vulnerability."
)
def vulnerability_details(
    vulnerability_id: int,
    db: Session = Depends(get_db)
):

    vulnerability = get_vulnerability_details(
        db,
        vulnerability_id
    )

    if not vulnerability:
        raise HTTPException(
            status_code=404,
            detail="Vulnerability not found."
        )

    return vulnerability