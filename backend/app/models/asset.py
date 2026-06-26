from sqlalchemy import Column, Integer, String, DateTime
from datetime import datetime
from app.database.base import Base


class Asset(Base):
    __tablename__ = "assets"

    id = Column(Integer, primary_key=True, index=True)
    ip_address = Column(String, nullable=False)
    hostname = Column(String)
    os = Column(String)

    host_status = Column(String)
    mac_address = Column(String)
    vendor = Column(String)
    scan_type = Column(String)

    last_seen = Column(DateTime, default=datetime.utcnow)