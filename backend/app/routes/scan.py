from fastapi import APIRouter, Depends, BackgroundTasks
from sqlalchemy.orm import Session
from app.database.session import get_db
from app.models.scan_log import ScanLog
from app.services.scanner import scan_target
from app.services.auth import get_current_user
from app.models.user import User
from app.services.rate_limit import check_rate_limit
from app.services.validator import validate_target
from app.services.validator import (
    validate_target,
    validate_network_size
)

router = APIRouter()


@router.post("/scan/{target:path}")
def start_scan(
    target: str,
    background_tasks: BackgroundTasks,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user)
):
    validate_target(target)
    check_rate_limit(current_user.username)
    scan_log = ScanLog(
        target=target,
        status="pending"
    )

    db.add(scan_log)
    db.commit()
    db.refresh(scan_log)

    background_tasks.add_task(
        scan_target,
        scan_log.id,
        target,
        db
    )

    return {
        "message": "Scan started",
        "scan_id": scan_log.id,
        "target": target
    }

