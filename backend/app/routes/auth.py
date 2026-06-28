from fastapi import APIRouter, Depends, HTTPException, status
from fastapi.security import OAuth2PasswordRequestForm
from pydantic import BaseModel
from sqlalchemy.orm import Session
from app.database.session import get_db
from app.models.user import User
from app.services.auth import (
    hash_password,
    verify_password,
    create_access_token,
    get_current_user,
)

router = APIRouter()

class RegisterRequest(BaseModel):
    username: str
    email: str
    password: str
    full_name: str | None = None
    role: str = "user"

@router.post("/register")
def register(request: RegisterRequest, db: Session = Depends(get_db)):
    existing_user = db.query(User).filter(
        (User.username == request.username) | (User.email == request.email)
    ).first()
    if existing_user:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Username or email already in use"
        )

    user = User(
        username=request.username,
        email=request.email,
        full_name=request.full_name,
        hashed_password=hash_password(request.password),
        role=request.role
    )

    db.add(user)
    db.commit()
    db.refresh(user)

    return {"message": "User created"}

@router.post("/login")
def login(
    form_data: OAuth2PasswordRequestForm = Depends(),
    db: Session = Depends(get_db)
):
    user = db.query(User).filter(
        User.username == form_data.username
    ).first()

    if not user:
        return {"message": "Invalid username"}

    if not verify_password(
        form_data.password,
        user.hashed_password
    ):
        return {"message": "Invalid password"}

    token = create_access_token(
        {"sub": user.username}
    )

    return {
        "access_token": token,
        "token_type": "bearer"
    }

@router.get("/me")
def me(current_user: User = Depends(get_current_user)):
    return {
        "username": current_user.username,
        "email": current_user.email,
        "full_name": current_user.full_name,
        "role": current_user.role,
    }