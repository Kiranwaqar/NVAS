from fastapi import APIRouter, Depends
from fastapi.responses import FileResponse
from sqlalchemy.orm import Session
from app.database.session import get_db
from app.models.asset import Asset
from app.models.port import Port
from pathlib import Path
import json
import csv
from reportlab.platypus import SimpleDocTemplate, Paragraph
from reportlab.lib.styles import getSampleStyleSheet
from app.services.auth import get_current_user, admin_required
from app.models.user import User
from app.models.vulnerability import Vulnerability

BASE_DIR = Path(__file__).resolve().parent.parent
REPORTS_DIR = BASE_DIR / "reports"
REPORTS_DIR.mkdir(parents=True, exist_ok=True)

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

    file_path = REPORTS_DIR / "assets_report.json"

    with open(file_path, "w") as f:
        json.dump(data, f, indent=4)

    return FileResponse(
        str(file_path),
        media_type="application/json",
        filename="assets_report.json"
    )

@router.get("/reports/csv")
def export_csv(db: Session = Depends(get_db), current_user: User = Depends(get_current_user)):
    admin_required(current_user)
    assets = db.query(Asset).all()

    file_path = REPORTS_DIR / "assets_report.csv"

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
        str(file_path),
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

    file_path = REPORTS_DIR / "assets_report.pdf"

    doc = SimpleDocTemplate(str(file_path))
    styles = getSampleStyleSheet()

    content = []

    content.append(
        Paragraph("Scanvas Asset Report", styles["Title"])
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


@router.get("/reports/vulnerabilities/json")
def export_vulnerabilities_json(
    db: Session =Depends(get_db),
    current_user: User = Depends(get_current_user)
):
    admin_required(current_user)

    vulnerabilities = db.query(Vulnerability).all()

    data = []

    for vuln in vulnerabilities:

        asset = db.query(Asset).filter(
            Asset.id == vuln.asset_id
        ).first()

        port = db.query(Port).filter(
            Port.id == vuln.port_id
        ).first()

        data.append({

            "id": vuln.id,

            "cve": vuln.cve_id,

            "severity": vuln.severity,

            "cvss": vuln.cvss_score,

            "epss": vuln.epss_score,

            "epss_percentile": vuln.epss_percentile,

            "product": vuln.product,

            "version": vuln.version,

            "published": vuln.published_date,

            "asset": {
                "id": asset.id if asset else None,
                "ip": asset.ip_address if asset else None,
                "hostname": asset.hostname if asset else None
            },

            "port": {
                "id": port.id if port else None,
                "port": port.port_number if port else None,
                "service": port.service if port else None
            }

        })

    file_path = REPORTS_DIR / "vulnerabilities_report.json"

    with open(file_path, "w") as f:
        json.dump(data, f, indent=4)

    return FileResponse(
        str(file_path),
        media_type="application/json",
        filename="vulnerabilities_report.json"
    )


@router.get("/reports/vulnerabilities/csv")
def export_vulnerabilities_csv(
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user)
):
    admin_required(current_user)

    vulnerabilities = db.query(Vulnerability).all()

    file_path = REPORTS_DIR / "vulnerabilities_report.csv"

    with open(file_path, mode="w", newline="") as file:

        writer = csv.writer(file)

        writer.writerow([
            "ID",
            "CVE",
            "Severity",
            "CVSS",
            "EPSS",
            "EPSS Percentile",
            "Product",
            "Version",
            "Published",
            "Asset IP",
            "Hostname",
            "Port",
            "Service"
        ])

        for vuln in vulnerabilities:

            asset = db.query(Asset).filter(
                Asset.id == vuln.asset_id
            ).first()

            port = db.query(Port).filter(
                Port.id == vuln.port_id
            ).first()

            writer.writerow([
                vuln.id,
                vuln.cve_id,
                vuln.severity,
                vuln.cvss_score,
                vuln.epss_score,
                vuln.epss_percentile,
                vuln.product,
                vuln.version,
                vuln.published_date,
                asset.ip_address if asset else "",
                asset.hostname if asset else "",
                port.port_number if port else "",
                port.service if port else ""
            ])

    return FileResponse(
        str(file_path),
        media_type="text/csv",
        filename="vulnerabilities_report.csv"
    )


@router.get("/reports/vulnerabilities/pdf")
def export_vulnerabilities_pdf(
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user)
):
    admin_required(current_user)

    vulnerabilities = db.query(Vulnerability).all()

    file_path = REPORTS_DIR / "vulnerabilities_report.pdf"

    doc = SimpleDocTemplate(str(file_path))
    styles = getSampleStyleSheet()

    content = []

    content.append(
        Paragraph("NVAS Vulnerability Report", styles["Title"])
    )

    content.append(
        Paragraph("<br/>", styles["BodyText"])
    )

    for vuln in vulnerabilities:

        asset = db.query(Asset).filter(
            Asset.id == vuln.asset_id
        ).first()

        port = db.query(Port).filter(
            Port.id == vuln.port_id
        ).first()

        text = f"""
        <b>CVE:</b> {vuln.cve_id}<br/>
        <b>Severity:</b> {vuln.severity}<br/>
        <b>CVSS:</b> {vuln.cvss_score}<br/>
        <b>EPSS:</b> {vuln.epss_score}<br/>
        <b>EPSS Percentile:</b> {vuln.epss_percentile}<br/>
        <b>Product:</b> {vuln.product}<br/>
        <b>Version:</b> {vuln.version}<br/>
        <b>Published:</b> {vuln.published_date}<br/>
        <b>Asset:</b> {asset.hostname if asset else 'N/A'} ({asset.ip_address if asset else 'N/A'})<br/>
        <b>Port:</b> {port.port_number if port else 'N/A'} ({port.service if port else 'N/A'})<br/>
        <b>Description:</b> {vuln.description}<br/><br/>
        <hr/>
        """

        content.append(
            Paragraph(text, styles["BodyText"])
        )

    doc.build(content)

    return FileResponse(
        str(file_path),
        media_type="application/pdf",
        filename="vulnerabilities_report.pdf"
    )