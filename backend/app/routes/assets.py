from fastapi import APIRouter, Depends, Query
from sqlalchemy.orm import Session
from app.database.session import get_db
from app.models.asset import Asset
from app.models.port import Port
from app.services.auth import admin_required, get_current_user
from app.services.asset_details_service import get_asset_details
from app.models.user import User


router = APIRouter(dependencies=[Depends(get_current_user)])


# Get all assets + filtering
@router.get("/assets")
def get_assets(
    status: str = Query(None),
    os: str = Query(None),
    vendor: str = Query(None),
    ip: str = Query(None),
    db: Session = Depends(get_db)
):
    query = db.query(Asset)

    if status:
        query = query.filter(Asset.host_status.ilike(f"%{status}%"))

    if os:
        query = query.filter(Asset.os.ilike(f"%{os}%"))

    if vendor:
        query = query.filter(Asset.vendor.ilike(f"%{vendor}%"))

    if ip:
        query = query.filter(Asset.ip_address.ilike(f"%{ip}%"))

    assets = query.all()

    return assets


# Search by keyword (IP, hostname, vendor)
@router.get("/assets/search/{keyword}")
def search_assets(
    keyword: str,
    db: Session = Depends(get_db)
):
    assets = db.query(Asset).filter(
        (Asset.ip_address.ilike(f"%{keyword}%")) |
        (Asset.hostname.ilike(f"%{keyword}%")) |
        (Asset.vendor.ilike(f"%{keyword}%"))
    ).all()

    return assets


# Get complete asset details
@router.get("/assets/{asset_id}")
def get_asset(
    asset_id: int,
    db: Session = Depends(get_db)
):

    asset_details = get_asset_details(
        db,
        asset_id
    )

    if not asset_details:
        return {
            "message": "Asset not found"
        }

    return asset_details


# Get ports of asset
@router.get("/assets/{asset_id}/ports")
def get_asset_ports(asset_id: int, db: Session = Depends(get_db)):
    ports = db.query(Port).filter(
        Port.asset_id == asset_id
    ).all()

    return ports


# Delete asset
@router.delete("/assets/{asset_id}")
def delete_asset(
    asset_id: int,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user)
):
    admin_required(current_user)
    asset = db.query(Asset).filter(
        Asset.id == asset_id
    ).first()

    if not asset:
        return {"message": "Asset not found"}

    db.query(Port).filter(
        Port.asset_id == asset.id
    ).delete()

    db.delete(asset)
    db.commit()

    return {"message": "Asset deleted"}


# Assets summary
@router.get("/assets-summary")
def assets_summary(db: Session = Depends(get_db)):
    total_assets = db.query(Asset).count()

    active_assets = db.query(Asset).filter(
        Asset.host_status == "up"
    ).count()

    return {
        "total_assets": total_assets,
        "active_assets": active_assets
    }


# Full network summary
@router.get("/network-summary")
def network_summary(db: Session = Depends(get_db)):
    assets = db.query(Asset).all()

    total_assets = len(assets)

    total_ports = 0
    active_hosts = 0

    for asset in assets:
        if asset.host_status == "up":
            active_hosts += 1

        total_ports += len(
            db.query(Port).filter(
                Port.asset_id == asset.id
            ).all()
        )

    return {
        "total_assets": total_assets,
        "active_hosts": active_hosts,
        "total_ports": total_ports
    }
