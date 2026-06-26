# NVAS API Documentation

Base URL:

Production:
https://nvas-1.onrender.com

Local:
http://127.0.0.1:8000

---

# Authentication Flow

Protected endpoints require JWT token.

Flow:

1. Register user
2. Login user
3. Receive access token
4. Use token in Authorization header

Header format:

Authorization: Bearer <token>

---

# 1. Register User

Endpoint:

POST /register

Description:
Create a new user account.

Parameters:

| Name     | Type   | Required |
|----------|--------|----------|
| username | string | Yes      |
| email    | string | Yes      |
| password | string | Yes      |

Example:

POST /register?username=kiran&email=test@test.com&password=1234

Response:

```json
{
  "message": "User registered successfully"
}
```

---

# 2. Login User

Endpoint:

POST /login

Description:
Authenticate user and get JWT token.

Content-Type:
application/x-www-form-urlencoded

Body:

| Name     | Type   | Required |
|----------|--------|----------|
| username | string | Yes      |
| password | string | Yes      |

Example:

username=kiran
password=1234

Response:

```json
{
  "access_token": "your_jwt_token_here",
  "token_type": "bearer"
}
```

---

# 3. Start Network Scan

Endpoint:

POST /scan/{target}

Protected:
Yes

Description:
Starts network scan for given target.

Path Parameter:

| Name   | Type   |
|--------|--------|
| target | string |

Examples:

/scan/scanme.nmap.org
/scan/192.168.1.0/24

Blocked Targets:

localhost
127.0.0.1
0.0.0.0/0
10.0.0.0/8

Response:

```json
{
  "message": "Scan started successfully",
  "scan_id": 12
}
```

Errors:

401 Unauthorized
403 Forbidden

---

# 4. Get All Assets

Endpoint:

GET /assets

Description:
Returns all scanned assets.

Filters (optional):

| Query Param | Type   |
|------------|--------|
| status     | string |
| os         | string |
| vendor     | string |
| ip         | string |

Example:

/assets?status=up

Response:

```json
[
  {
    "id": 1,
    "ip_address": "192.168.1.1",
    "hostname": "router",
    "status": "up",
    "os": "Linux"
  }
]
```

---

# 5. Search Assets

Endpoint:

GET /assets/search/{keyword}

Description:
Search assets by hostname, IP, vendor, or OS.

Path Parameter:

| Name    | Type   |
|---------|--------|
| keyword | string |

Example:

/assets/search/linux

Response:

```json
[
  {
    "id": 2,
    "hostname": "server"
  }
]
```

---

# 6. Get Single Asset

Endpoint:

GET /assets/{asset_id}

Description:
Returns details of one asset.

Example:

/assets/1

Response:

```json
{
  "id": 1,
  "ip_address": "192.168.1.10",
  "hostname": "server"
}
```

---

# 7. Delete Asset

Endpoint:

DELETE /assets/{asset_id}

Protected:
Yes

Description:
Deletes an asset.

Response:

```json
{
  "message": "Asset deleted successfully"
}
```

---

# 8. Get Asset Ports

Endpoint:

GET /assets/{asset_id}/ports

Description:
Returns open ports for asset.

Response:

```json
[
  {
    "port": 80,
    "service": "http",
    "state": "open"
  }
]
```

---

# 9. Assets Summary

Endpoint:

GET /assets-summary

Description:
Returns overall asset statistics.

Response:

```json
{
  "total_assets": 15,
  "active_assets": 12,
  "inactive_assets": 3
}
```

---

# 10. Network Summary

Endpoint:

GET /network-summary

Description:
Returns overall network insights.

Response:

```json
{
  "total_open_ports": 50,
  "top_services": ["http", "ssh", "dns"]
}
```

---

# 11. Scan History

Endpoint:

GET /scan-history

Description:
Returns previous scans.

Response:

```json
[
  {
    "scan_id": 1,
    "target": "scanme.nmap.org",
    "status": "completed"
  }
]
```

---

# 12. Scan Status

Endpoint:

GET /scan-status/{scan_id}

Description:
Get current scan progress/status.

Response:

```json
{
  "scan_id": 12,
  "status": "running"
}
```

Possible statuses:

running
completed
failed

---

# Reports

Protected:
Yes

---

# 13. Export JSON

Endpoint:

GET /reports/json

Response:
Downloads JSON report.

---

# 14. Export CSV

Endpoint:

GET /reports/csv

Response:
Downloads CSV report.

---

# 15. Export PDF

Endpoint:

GET /reports/pdf

Response:
Downloads PDF report.

---

# Root Endpoint

Endpoint:

GET /

Response:

```json
{
  "message": "NVAS API Running"
}
```

---

# Authentication Example

1. Login:

POST /login

Receive:

```json
{
  "access_token": "abc123"
}
```

2. Use in protected routes:

Authorization: Bearer abc123

---

# HTTP Status Codes

| Code | Meaning |
|------|---------|
| 200  | Success |
| 201  | Created |
| 400  | Bad Request |
| 401  | Unauthorized |
| 403  | Forbidden |
| 404  | Not Found |
| 500  | Internal Server Error |

---

# Frontend Integration Order

Recommended:

1. Register/Login
2. Store JWT
3. Fetch Assets
4. Show Dashboard
5. Trigger Scan
6. Poll Scan Status
7. Show Reports
8. Download Reports

---

# Team Member Usage

Frontend:
Use assets, summaries, history, reports.

Analytics:
Use summaries, ports, scan history.

Testing:
Test all endpoints.

Backend:
Maintain auth, scan engine, reports.
