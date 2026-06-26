from app.database.db import engine
from app.database.base import Base

from app.models.asset import Asset
from app.models.port import Port
from app.models.scan_log import ScanLog
from app.models.user import User

Base.metadata.create_all(bind=engine)

print("Tables created successfully")