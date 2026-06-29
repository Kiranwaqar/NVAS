from sqlalchemy.orm import Session
from sqlalchemy import func

from app.models.asset import Asset
from app.models.vulnerability import Vulnerability


def determine_risk_level(score: float):

    if score >= 70:
        return "CRITICAL"

    elif score >= 40:
        return "HIGH"

    elif score >= 20:
        return "MEDIUM"

    return "LOW"


def calculate_asset_risk(asset_id: int, db: Session):
    """
    Calculates the overall risk score for an asset
    using CVSS, EPSS and vulnerability counts.
    """

    asset = (
        db.query(Asset)
        .filter(Asset.id == asset_id)
        .first()
    )

    if not asset:
        return

    vulnerabilities = (
        db.query(Vulnerability)
        .filter(Vulnerability.asset_id == asset_id)
        .all()
    )

    if len(vulnerabilities) == 0:

        asset.risk_score = 0
        asset.risk_level = "LOW"

        db.commit()
        return

    # -----------------------------
    # Highest CVSS
    # -----------------------------

    highest_cvss = max(
        v.cvss_score or 0
        for v in vulnerabilities
    )

    # -----------------------------
    # Severity Counts
    # -----------------------------

    critical = 0
    high = 0
    medium = 0
    low = 0

    epss_total = 0

    for v in vulnerabilities:

        severity = (v.severity or "").upper()

        if severity == "CRITICAL":
            critical += 1

        elif severity == "HIGH":
            high += 1

        elif severity == "MEDIUM":
            medium += 1

        else:
            low += 1

        epss_total += (v.epss_score or 0)

    average_epss = epss_total / len(vulnerabilities)

    # -----------------------------
    # Risk Formula
    # -----------------------------

    risk_score = (
        highest_cvss
        + (critical * 15)
        + (high * 8)
        + (medium * 4)
        + (low * 1)
        + (average_epss * 20)
    )

    asset.risk_score = round(risk_score, 2)
    asset.risk_level = determine_risk_level(risk_score)

    db.commit()

    print("----------------------------------")
    print("Risk Updated")
    print("Asset:", asset.hostname)
    print("Score:", asset.risk_score)
    print("Level:", asset.risk_level)
    print("----------------------------------")