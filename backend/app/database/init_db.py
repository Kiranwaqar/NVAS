from sqlalchemy import text

from app.database.db import engine
from app.database.base import Base

from app.models.asset import Asset
from app.models.port import Port
from app.models.scan_log import ScanLog
from app.models.user import User
from app.models.vulnerability import Vulnerability

Base.metadata.create_all(bind=engine)

with engine.begin() as conn:
    conn.execute(
        text("ALTER TABLE users ADD COLUMN IF NOT EXISTS full_name VARCHAR")
    )

print("Tables created successfully")