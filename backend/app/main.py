from fastapi import Depends, FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.database import get_db
from contextlib import asynccontextmanager
from app.routers import files, user, quiz

app = FastAPI()

# CORS Configuration
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(files.router)
app.include_router(user.router)
app.include_router(quiz.router)

@app.get("/")
async def root(db = Depends(get_db)):
    return {"message": "Hello, App has started!"}

@app.get("/health")
async def health_check(db = Depends(get_db)):
    try:
        await db.client.admin.command("ping")
        return {"status": "healthy"}
    except Exception:
        return {"status": "unhealthy"}, 503