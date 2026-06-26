from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from app.database.session import get_db
from app.models.scan_log import ScanLog

router = APIRouter()

@router.get("/scan-history")
def get_scan_history(db: Session = Depends(get_db)):
    scans = db.query(ScanLog).all()
    return scans


@router.get("/scan-status/{scan_id}")
def get_scan_status(scan_id: int, db: Session = Depends(get_db)):
    scan = db.query(ScanLog).filter(ScanLog.id == scan_id).first()

    if not scan:
        return {"message": "Scan not found"}

    return scan