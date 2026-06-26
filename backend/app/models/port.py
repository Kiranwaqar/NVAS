from sqlalchemy import Column, Integer, String, ForeignKey
from app.database.base import Base

class Port(Base):
    __tablename__ = "ports"

    id = Column(Integer, primary_key=True, index=True)
    asset_id = Column(Integer, ForeignKey("assets.id"))
    port_number = Column(Integer)
    service = Column(String)
    state = Column(String)