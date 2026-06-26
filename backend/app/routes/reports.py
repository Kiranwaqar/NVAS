from fastapi import APIRouter, Depends
from fastapi.responses import FileResponse
from sqlalchemy.orm import Session
from app.database.session import get_db
from app.models.asset import Asset
from app.models.port import Port
import json
import csv
from reportlab.platypus import SimpleDocTemplate, Paragraph
from reportlab.lib.styles import getSampleStyleSheet
from app.services.auth import get_current_user, admin_required
from app.models.user import User

router = APIRouter()

@router.get("/reports/json")
def export_json(
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user)
):
    admin_required(current_user)
    assets = db.query(Asset).all()

    data = []

    for asset in assets:
        ports = db.query(Port).filter(
            Port.asset_id == asset.id
        ).all()

        data.append({
            "id": asset.id,
            "ip_address": asset.ip_address,
            "hostname": asset.hostname,
            "os": asset.os,
            "status": asset.host_status,
            "ports": [
                {
                    "port": p.port_number,
                    "service": p.service,
                    "state": p.state
                } for p in ports
            ]
        })

    file_path = "reports/assets_report.json"

    with open(file_path, "w") as f:
        json.dump(data, f, indent=4)

    return FileResponse(
        file_path,
        media_type="application/json",
        filename="assets_report.json"
    )

@router.get("/reports/csv")
def export_csv(db: Session = Depends(get_db), current_user: User = Depends(get_current_user)):
    admin_required(current_user)
    assets = db.query(Asset).all()

    file_path = "reports/assets_report.csv"

    with open(file_path, mode="w", newline="") as file:
        writer = csv.writer(file)

        writer.writerow([
            "Asset ID",
            "IP",
            "Hostname",
            "OS",
            "Status"
        ])

        for asset in assets:
            writer.writerow([
                asset.id,
                asset.ip_address,
                asset.hostname,
                asset.os,
                asset.host_status
            ])

    return FileResponse(
        file_path,
        media_type="text/csv",
        filename="assets_report.csv"
    )

@router.get("/reports/pdf")
def export_pdf(
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user)
):
    admin_required(current_user)
    assets = db.query(Asset).all()

    file_path = "reports/assets_report.pdf"

    doc = SimpleDocTemplate(file_path)
    styles = getSampleStyleSheet()

    content = []

    content.append(
        Paragraph("NVAS Asset Report", styles["Title"])
    )

    for asset in assets:
        text = f"""
        Asset ID: {asset.id}<br/>
        IP: {asset.ip_address}<br/>
        Hostname: {asset.hostname}<br/>
        OS: {asset.os}<br/>
        Status: {asset.host_status}<br/><br/>
        """

        content.append(
            Paragraph(text, styles["BodyText"])
        )

    doc.build(content)

    return FileResponse(
        file_path,
        media_type="application/pdf",
        filename="assets_report.pdf"
    )


