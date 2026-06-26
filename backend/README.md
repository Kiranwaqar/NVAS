# NVAS Backend

## Network Vulnerability Assessment System (NVAS)

NVAS is a backend system built for network asset discovery, vulnerability assessment, and reporting. It scans target networks, identifies hosts, detects open ports/services, stores asset data, and generates security reports.

This project is developed as part of the internship project.

---

## Features

### Authentication

* User registration
* User login
* JWT token-based authentication
* Protected API routes

### Network Scanning

* Scan single IPs
* Scan subnets
* Discover live hosts
* Detect open ports
* Detect running services
* OS detection
* Vendor detection

### Asset Management

* Store scanned assets
* View all assets
* View asset by ID
* Search assets
* Filter assets
* Delete assets

### Analytics

* Asset summary
* Network summary
* Scan history
* Scan status

### Reporting

* Export JSON reports
* Export CSV reports
* Export PDF reports

### Deployment

* Render cloud deployment
* Supabase PostgreSQL integration

---

## Tech Stack

* FastAPI
* SQLAlchemy
* PostgreSQL (Supabase)
* Nmap
* JWT Authentication
* Render Deployment
* ReportLab (PDF generation)
* Pandas (CSV generation)

---

## Project Structure

```text
backend/
│── app/
│   ├── main.py
│   ├── database.py
│   ├── models/
│   │   ├── user.py
│   │   ├── asset.py
│   │   ├── port.py
│   │   ├── scan_history.py
│   │
│   ├── routes/
│   │   ├── auth.py
│   │   ├── scan.py
│   │   ├── assets.py
│   │   ├── reports.py
│   │
│   ├── services/
│   │   ├── auth.py
│   │   ├── scanner.py
│   │   ├── reports.py
│   │
│   ├── schemas/
│   ├── utils/
│
│── requirements.txt
│── Dockerfile
│── build.sh
│── .env
│── README.md
```

---

## Installation

Clone repository:

```bash
git clone https://github.com/Kiranwaqar/NVAS.git
cd NVAS/backend
```

Create virtual environment:

```bash
python -m venv venv
```

Activate virtual environment:

Windows:

```bash
venv\Scripts\activate
```

Linux/macOS:

```bash
source venv/bin/activate
```

Install dependencies:

```bash
pip install -r requirements.txt
```

---

## Environment Variables

Create `.env` file:

```env
DATABASE_URL=your_database_url
SECRET_KEY=your_secret_key
ALGORITHM=HS256
ACCESS_TOKEN_EXPIRE_MINUTES=30
```

---

## Database Setup

Run database initialization:

```bash
python init_db.py
```

---

## Run Locally

Start server:

```bash
uvicorn app.main:app --reload
```

Local API:

```text
http://127.0.0.1:8000
```

Swagger Docs:

```text
http://127.0.0.1:8000/docs
```

---

## Deployment

Production URL:

```text
https://nvas-1.onrender.com
```

Production API Docs:

```text
https://nvas-1.onrender.com/docs
```

OpenAPI Schema:

```text
https://nvas-1.onrender.com/openapi.json
```

---

## Authentication Flow

### Register User

POST `/register`

Parameters:

* username
* email
* password

---

### Login User

POST `/login`

Returns:

* access_token
* token_type

Use token for protected routes.

Authorization header:

```text
Bearer <your_token>
```

---

## Main API Endpoints

### Authentication

```text
POST /register
POST /login
```

### Scanning

```text
POST /scan/{target}
GET /scan-history
GET /scan-status/{scan_id}
```

### Assets

```text
GET /assets
GET /assets/{asset_id}
DELETE /assets/{asset_id}
GET /assets/search/{keyword}
GET /assets-summary
GET /network-summary
GET /assets/{asset_id}/ports
```

### Reports

```text
GET /reports/json
GET /reports/csv
GET /reports/pdf
```

---

## Security Features

* JWT authentication
* Password hashing using bcrypt
* Protected API routes
* Restricted internal network scanning prevention
* Input validation
* Safe scan target filtering

---

## Team Roles

### Member 1 (Backend Core)

* FastAPI backend development
* Database setup
* Authentication
* Scanning engine
* Asset APIs
* Reports APIs
* Deployment

### Member 2

* Frontend development

### Member 3

* Analytics & data visualization

### Member 4

* UI integration & dashboard design

---

## Current Status

Backend core development is complete.

Completed:

* Authentication
* Scanning
* Asset management
* Reporting
* Deployment

Pending:

* Frontend integration
* Analytics dashboard
* Final testing

---

## Author

GitHub:
https://github.com/Kiranwaqar
