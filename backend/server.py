from database import db, client  # loads .env first

from fastapi import FastAPI, APIRouter, Request, Depends
from starlette.middleware.cors import CORSMiddleware
import os
import logging
from pydantic import BaseModel, Field, ConfigDict
from typing import List, Optional
import uuid
from datetime import datetime, timezone

from auth import router as auth_router, get_current_user

app = FastAPI()
api_router = APIRouter(prefix="/api")


class Enquiry(BaseModel):
    model_config = ConfigDict(extra="ignore")

    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    name: str
    phone: str
    email: Optional[str] = None
    course: str
    message: Optional[str] = None
    created_at: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))


class EnquiryCreate(BaseModel):
    name: str
    phone: str
    email: Optional[str] = None
    course: str
    message: Optional[str] = None


@api_router.get("/")
async def root():
    return {"message": "Engwish Skills Academy API"}


@api_router.post("/enquiries", response_model=Enquiry)
async def create_enquiry(input: EnquiryCreate):
    enquiry = Enquiry(**input.model_dump())
    doc = enquiry.model_dump()
    doc['created_at'] = doc['created_at'].isoformat()
    await db.enquiries.insert_one(doc)
    return enquiry


@api_router.get("/enquiries", response_model=List[Enquiry])
async def get_enquiries():
    docs = await db.enquiries.find({}, {"_id": 0}).sort("created_at", -1).to_list(1000)
    for d in docs:
        if isinstance(d['created_at'], str):
            d['created_at'] = datetime.fromisoformat(d['created_at'])
    return docs


DEFAULT_STATS = {
    "today_minutes": 0,
    "total_minutes": 0,
    "fluency_score": None,
    "streak_days": 0,
    "conversations_completed": 0,
    "badges": [],
    "recent_conversations": [],
    "skill_scores": {},
    "feedback_history": [],
}


@api_router.get("/dashboard/stats")
async def dashboard_stats(user: dict = Depends(get_current_user)):
    stats = await db.practice_stats.find_one({"user_id": user["user_id"]}, {"_id": 0})
    return {"user": {"user_id": user["user_id"], "name": user.get("name", ""), "email": user["email"]},
            "stats": stats or DEFAULT_STATS}


api_router.include_router(auth_router)
app.include_router(api_router)


@app.on_event("startup")
async def create_indexes():
    await db.users.create_index("email", unique=True)
    await db.users.create_index("user_id")
    await db.user_sessions.create_index("session_token")
    await db.login_attempts.create_index("identifier")

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)

logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)


@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()
