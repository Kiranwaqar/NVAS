from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.database.session import get_db
from app.models.vulnerability import Vulnerability

router = APIRouter(
    prefix="/vulnerabilities",
    tags=["Vulnerabilities"]
)


@router.get("/")
def get_all_vulnerabilities(
    db: Session = Depends(get_db)
):

    vulnerabilities = db.query(Vulnerability).all()

    return vulnerabilities