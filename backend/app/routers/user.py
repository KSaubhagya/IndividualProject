from fastapi import APIRouter, Depends, HTTPException
from app.models.user import User 
from app.database import get_db, MongoDB

router = APIRouter()

@router.post("/users")
async def create_user(user: User, mongo: MongoDB = Depends(get_db)):
    """
    Create a new user in the database.

    - **email**: user email
    - **name**: full name of the user  
    - **role**: user roles
    - **last_modified**: last modified time and date
    - **status**: whether user is active
    """
    existing_user = await mongo.users.find_one({"email": user.email})
    if existing_user:
        raise HTTPException(status_code=400, detail="User already exists")

    result = await mongo.users.insert_one(user.model_dump())
    return {
        "id": str(result.inserted_id),
        "message": "User saved successfully"
    }
