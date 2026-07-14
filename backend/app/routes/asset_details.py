from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from app.database.session import get_db
from app.services.asset_details_service import get_asset_details

router = APIRouter(
    prefix="/assets",
    tags=["Asset Details"]
)


@router.get(
    "/{asset_id}/details",
    summary="Asset Details",
    description="Returns complete information about a single asset including ports, vulnerabilities and risk summary."
)
def asset_details(
    asset_id: int,
    db: Session = Depends(get_db)
):
    asset = get_asset_details(db, asset_id)

    if not asset:
        raise HTTPException(
            status_code=404,
            detail="Asset not found"
        )

    return asset