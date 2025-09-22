import os
from fastapi import Depends, FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.database import get_db
from fastapi.staticfiles import StaticFiles
from contextlib import asynccontextmanager
from app.routers import files, user, blog, admin, feedback

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(files.router)
app.include_router(user.router)
app.include_router(blog.router)
app.include_router(admin.router)
app.include_router(feedback.router)

os.makedirs("static/images", exist_ok=True)
app.mount("/static", StaticFiles(directory="static"), name="static")

@app.get("/")
async def root(db = Depends(get_db)):
    """
    Root endpoint to confirm the API is running.

    - **returns**: a welcome message
    """
    return {"message": "Hello, App has started!"}

@app.get("/health")
async def health_check(db = Depends(get_db)):
    """
    Health check endpoint to verify database connectivity.

    - **status**: `"healthy"` if the database is reachable  
    - **status**: `"unhealthy"` if the database connection fails (503)
    """
    try:
        await db.client.admin.command("ping")
        return {"status": "healthy"}
    except Exception:
        return {"status": "unhealthy"}, 503