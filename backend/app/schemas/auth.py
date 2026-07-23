from pydantic import BaseModel, ConfigDict, Field


class RegisterRequest(BaseModel):
    """Public registration payload. Roles are never client-controlled."""

    model_config = ConfigDict(extra="forbid")

    username: str = Field(min_length=3, max_length=64, pattern=r"^[A-Za-z0-9_.-]+$")
    email: str = Field(min_length=3, max_length=254)
    password: str = Field(min_length=12, max_length=128)
    full_name: str | None = None
