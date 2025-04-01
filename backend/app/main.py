from fastapi import FastAPI, File, UploadFile, HTTPException, Request, Depends
from fastapi.middleware.cors import CORSMiddleware
from fastapi.security import OAuth2AuthorizationCodeBearer
from jose import jwt
from motor.motor_asyncio import AsyncIOMotorClient
import httpx
import shutil
import os
from datetime import datetime
from typing import Optional
from pydantic import BaseModel

# Initialize FastAPI
app = FastAPI()

# MongoDB Configuration
MONGO_URI = "mongodb://localhost:27017"
DB_NAME = "file_upload_db"
client = AsyncIOMotorClient(MONGO_URI)
database = client[DB_NAME]
files_collection = database["files"]
users_collection = database["users"]

# Asgardeo Configuration
ASGARDEO_CONFIG = {
    "client_id": "YOUR_CLIENT_ID",
    "client_secret": "YOUR_CLIENT_SECRET",
    "authorization_url": "https://api.asgardeo.io/t/YOUR_ORG/oauth2/authorize",
    "token_url": "https://api.asgardeo.io/t/YOUR_ORG/oauth2/token",
    "userinfo_url": "https://api.asgardeo.io/t/YOUR_ORG/oauth2/userinfo",
    "redirect_uri": "http://localhost:8000/auth/callback",
    "scope": "openid profile email"
}

# OAuth2 Scheme
oauth2_scheme = OAuth2AuthorizationCodeBearer(
    authorizationUrl=ASGARDEO_CONFIG["authorization_url"],
    tokenUrl=ASGARDEO_CONFIG["token_url"],
    scopes={"openid": "OpenID scope", "profile": "Profile scope", "email": "Email scope"}
)

# CORS Configuration (Keep your existing settings)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# File Upload Configuration (Keep your existing settings)
UPLOAD_DIR = "uploads"
os.makedirs(UPLOAD_DIR, exist_ok=True)

# Models
class FileMetadata(BaseModel):
    filename: str
    uploader_id: str
    upload_date: datetime
    size: int
    content_type: str

# Auth Endpoints
@app.get("/login")
async def login():
    """Redirect to Asgardeo login page"""
    auth_url = (
        f"{ASGARDEO_CONFIG['authorization_url']}"
        f"?response_type=code"
        f"&client_id={ASGARDEO_CONFIG['client_id']}"
        f"&redirect_uri={ASGARDEO_CONFIG['redirect_uri']}"
        f"&scope={ASGARDEO_CONFIG['scope']}"
    )
    return {"redirect_url": auth_url}

@app.get("/auth/callback")
async def callback(code: str):
    """Handle callback from Asgardeo"""
    async with httpx.AsyncClient() as client:
        token_response = await client.post(
            ASGARDEO_CONFIG["token_url"],
            data={
                "grant_type": "authorization_code",
                "code": code,
                "redirect_uri": ASGARDEO_CONFIG["redirect_uri"],
                "client_id": ASGARDEO_CONFIG["client_id"],
                "client_secret": ASGARDEO_CONFIG["client_secret"]
            }
        )
        tokens = token_response.json()
        
        user_response = await client.get(
            ASGARDEO_CONFIG["userinfo_url"],
            headers={"Authorization": f"Bearer {tokens['access_token']}"}
        )
        user_info = user_response.json()

    # Store/update user in MongoDB
    await users_collection.update_one(
        {"sub": user_info["sub"]},
        {"$set": {
            "email": user_info["email"],
            "name": user_info.get("name"),
            "given_name": user_info.get("given_name"),
            "family_name": user_info.get("family_name"),
            "last_login": datetime.now()
        }},
        upsert=True
    )

    return {"user": user_info, "access_token": tokens["access_token"]}

# Protected File Upload Endpoint (Modified to include user info)
@app.post("/upload")
async def upload_file(
    file: UploadFile = File(...),
    token: str = Depends(oauth2_scheme)
):
    try:
        # Verify token and get user info
        payload = jwt.decode(token, ASGARDEO_CONFIG["client_secret"], algorithms=["HS256"])
        user_id = payload["sub"]

        # Save file locally (your existing code)
        file_location = os.path.join(UPLOAD_DIR, file.filename)
        with open(file_location, "wb") as buffer:
            shutil.copyfileobj(file.file, buffer)

        # Store metadata in MongoDB
        file_metadata = {
            "filename": file.filename,
            "uploader_id": user_id,
            "upload_date": datetime.now(),
            "size": os.path.getsize(file_location),
            "content_type": file.content_type,
            "file_path": file_location
        }
        await files_collection.insert_one(file_metadata)

        return {
            "message": "File uploaded successfully",
            "filename": file.filename,
            "user_id": user_id
        }
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

# Existing unprotected endpoints can remain as-is
@app.get("/files")
async def list_files():
    files = await files_collection.find().to_list(100)
    return {"files": files}