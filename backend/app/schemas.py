from pydantic import BaseModel
from typing import Optional

class JobCreate(BaseModel):
    company: str
    title: str
    status: Optional[str] = "Applied"

class JobResponse(BaseModel):
    id: int
    company: str
    title: str
    status: str

    class Config:
        from_attributes = True