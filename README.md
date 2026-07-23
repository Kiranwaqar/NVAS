# Network Vulnerability Assessment System (NVAS)

NVAS is a full-stack application for discovering authorized network assets, identifying exposed services, enriching them with vulnerability intelligence, prioritizing risk, and exporting assessment reports.

> NVAS must only be used against systems and networks that you own or are explicitly authorized to assess. Scanning is disabled by default until authorized network ranges are configured.

## What it does

- Authenticates users with JWT access tokens and bcrypt password hashing.
- Scans approved hosts and CIDR ranges with Nmap.
- Stores discovered assets, ports, services, operating-system hints, vendor information, and scan history.
- Looks up vulnerabilities using CPE information, NVD CVEs, CVSS, and EPSS data.
- Calculates asset risk and provides dashboard analytics.
- Supports asset and vulnerability filtering, search, sorting, pagination, and detail views.
- Exports asset and vulnerability reports as JSON, CSV, and PDF.
- Provides a React/TanStack frontend for login, assets, scans, dashboards, reports, and vulnerability views.

## Architecture

```text
React + TanStack Start frontend
            |
            | HTTPS / JWT
            v
FastAPI API
  |- Authentication and role checks
  |- Scan authorization and rate limiting
  |- Nmap scanner background task
  |- Vulnerability and risk services
  |- Dashboard and report services
            |
            v
PostgreSQL (production) or SQLite (local development)
```

## Repository layout

```text
NVAS/
|- backend/                 FastAPI service, database models, scanner, reports, tests
|  |- app/routes/           HTTP API endpoints
|  |- app/services/         Scanning, authentication, risk, and intelligence logic
|  |- app/models/           SQLAlchemy database models
|  |- app/schemas/          Pydantic request/response contracts
|  `- tests/                Focused backend tests
|- frontend/                React/TanStack Start application
|  `- src/routes/           Application pages
|- API_documentation.md     Endpoint reference
`- README.md                This guide
```

## Prerequisites

- Python 3.12 or newer
- Node.js 20 or newer
- Nmap installed and available on `PATH`
- PostgreSQL for production (SQLite works for a local proof of concept)

## Configuration

Copy the environment template before starting the backend:

```powershell
Copy-Item backend/.env.example backend/.env
```

Configure the following values in `backend/.env`:

| Variable | Required | Purpose |
|---|---:|---|
| `DATABASE_URL` | Yes | PostgreSQL connection URL in production; SQLite URL for local development. |
| `SECRET_KEY` | Yes | Long random secret used to sign JWTs. Never commit it. |
| `CORS_ORIGINS` | Yes | Comma-separated frontend origins allowed to call the API. |
| `ALLOWED_SCAN_NETWORKS` | Yes for scanning | Comma-separated CIDR ranges that your organization owns or is authorized to assess. |
| `MAX_SCAN_HOSTS` | No | Maximum addresses allowed in a single CIDR scan. Defaults to `256`. |

Example local configuration:

```env
DATABASE_URL=sqlite:///./test.db
SECRET_KEY=generate-a-long-random-value-here
CORS_ORIGINS=http://localhost:5173
ALLOWED_SCAN_NETWORKS=192.168.1.0/24
MAX_SCAN_HOSTS=256
```

Do not use a public deployment to scan arbitrary Internet targets. The API accepts only IPs, CIDRs, and hostnames that resolve wholly inside `ALLOWED_SCAN_NETWORKS`.

## Run locally

### Backend

```powershell
cd backend
python -m venv .venv
.\.venv\Scripts\Activate.ps1
pip install -r requirements.txt
uvicorn app.main:app --reload --port 8000
```

Open the interactive API documentation at `http://127.0.0.1:8000/docs`.

### Frontend

In another terminal:

```powershell
cd frontend
npm ci
$env:VITE_API_URL = "http://127.0.0.1:8000"
npm run dev
```

Open the URL printed by Vite, normally `http://localhost:5173`.

## Roles and access

Public registration always creates the unprivileged `user` role. A user cannot choose their own role through the registration API.

- `user`: can view authenticated application data.
- `admin`: can start authorized scans, delete assets, and export reports.

Create or promote the initial administrator through the controlled database/deployment process. Do not expose an unauthenticated role-management endpoint.

## Main API areas

| Area | Examples |
|---|---|
| Authentication | `POST /register`, `POST /login`, `GET /me` |
| Scanning | `POST /scan/{target}`, `GET /scan-history`, `GET /scan-status/{scan_id}` |
| Assets | `GET /assets`, `GET /assets/{asset_id}`, `GET /assets/{asset_id}/ports` |
| Vulnerabilities | `GET /vulnerabilities/`, `GET /vulnerabilities/{vulnerability_id}` |
| Dashboard | `GET /dashboard/summary`, risk, vendor, trend, and activity endpoints |
| Reports | `GET /reports/json`, `/reports/csv`, `/reports/pdf` and vulnerability equivalents |

See [API_documentation.md](API_documentation.md) and the FastAPI `/docs` page for the endpoint contract.

## Security controls

- JWT authentication for protected endpoints.
- Bcrypt password hashing.
- Role checks for scan, deletion, and report operations.
- Configured CORS allowlist; wildcard origins are not used.
- Explicit scan-network allowlist and CIDR-size limit.
- Hostname resolution checks to prevent targets from escaping the allowlist.
- Per-user scan rate limiting.
- Dedicated database session for each background scan task.

## Testing

Backend security and validation tests are under `backend/tests`.

```powershell
cd backend
python -m pytest tests -q
```

The current suite covers public-registration policy, administrator authorization, authorized scan ranges, CIDR limits, and hostname resolution safeguards.

## Deployment notes

- Set all production environment variables in the hosting platform, never in Git.
- Install Nmap in the backend container; the included Dockerfile does this.
- Use PostgreSQL and managed backups in production.
- Run schema migrations as part of deployment once migration tooling is introduced.
- Restrict `CORS_ORIGINS` to the deployed frontend URL.
- Configure `ALLOWED_SCAN_NETWORKS` to only the organization-approved ranges.
- Use a real task queue/worker for long-running production scans rather than relying on a single web-process worker.

## Current project status

### Completed

- Set up the FastAPI backend, SQLAlchemy models, PostgreSQL/SQLite configuration, and Docker-based Nmap environment.
- Implemented JWT login, bcrypt password hashing, user registration, and role-based access checks.
- Implemented network asset discovery, port/service collection, scan history, duplicate-asset handling, and background scan execution.
- Added vulnerability intelligence using CPE data, NVD CVEs, CVSS, EPSS, vulnerability storage, and per-asset risk calculation.
- Built asset, vulnerability, dashboard, analytics, and report APIs, including filtering, search, pagination, risk summaries, and JSON/CSV/PDF exports.
- Built the frontend foundation: authentication screens, application shell, dashboard, asset views, scan page, reports, and vulnerability views.
- Added initial security hardening: administrator-only scans and asset deletion, authenticated data access, CORS configuration, scan-network allowlisting, scan-size limits, and focused security tests.
- Removed generated build output and previously generated report files from source control.

### Still to do before final submission

1. Replace remaining frontend mock data with live dashboard, risk, remediation, notification, and threat-intelligence API data.
2. Add Pydantic response models consistently across all endpoints and bring `API_documentation.md` in line with the actual API.
3. Add structured application logging, improve API error messages, and remove remaining debug-style code.
4. Add database migrations (for example, Alembic), seed/admin setup instructions, and production database backup guidance.
5. Expand automated tests to cover authentication, API authorization, scanner failure handling, report generation, risk calculations, and frontend build/lint checks.
6. Add CI to run backend tests and frontend lint/build checks on every push.
7. Improve the PDF report layout with scan metadata, summary statistics, severity charts/tables, and generation timestamps.
8. Perform end-to-end testing with an authorized test network, then fix integration and usability issues.
9. Prepare final submission material: architecture diagram, ERD, screenshots, test evidence, deployment guide, presentation slides, and a short demo script.

### Recommended next step

Connect the dashboard and vulnerability-related frontend pages to the live backend APIs, then run an end-to-end scan of an authorized test network. This will expose the highest-value integration issues before final documentation and presentation work begins.

## License

No license has been selected yet. Add an explicit license before distributing the project.
