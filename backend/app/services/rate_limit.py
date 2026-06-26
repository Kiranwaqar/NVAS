from fastapi import HTTPException
from datetime import datetime, timedelta

user_requests = {}


def check_rate_limit(username):
    now = datetime.utcnow()

    if username not in user_requests:
        user_requests[username] = []

    user_requests[username] = [
        t for t in user_requests[username]
        if now - t < timedelta(minutes=1)
    ]

    if len(user_requests[username]) >= 5:
        raise HTTPException(
            status_code=429,
            detail="Rate limit exceeded (5 scans/min)"
        )

    user_requests[username].append(now)