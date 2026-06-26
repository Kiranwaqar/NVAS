from fastapi import FastAPI
from app.routes.scan import router as scan_router
from app.routes.assets import router as asset_router
from app.routes.scan import router as scan_router
from app.routes.assets import router as asset_router
from app.routes.scan_logs import router as scan_logs_router
from app.routes.reports import router as reports_router
from app.routes.auth import router as auth_router
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],   # later restrict frontend domain
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(scan_router)
app.include_router(asset_router)
app.include_router(scan_router)
app.include_router(asset_router)
app.include_router(scan_logs_router)
app.include_router(reports_router)
app.include_router(auth_router)

@app.get("/")
def root():
    return {"message": "NVAS Running"}