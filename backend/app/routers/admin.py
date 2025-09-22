from fastapi import APIRouter, Depends, HTTPException
from typing import Dict, Any, List
from app.database import get_db, MongoDB

router = APIRouter(prefix="/api/admin", tags=["admin"])

async def verify_admin_access():
   pass

@router.get("/stats", response_model=Dict[str, Any])  
async def get_dashboard_stats(
    db: MongoDB = Depends(get_db),
    _: None = Depends(verify_admin_access)
):
    """
    Retrieve admin dashboard statistics.

    - **totalUsers**: total number of registered users  
    - **totalFiles**: total number of uploaded files  
    """
    try:
        total_users = await db.users.count_documents({})
        total_files = await db.files.count_documents({})
       
        
        return {
            "totalUsers": total_users,
            "totalFiles": total_files,
           
        }
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Error fetching stats: {str(e)}")

@router.get("/user-list", response_model=List[Dict[str, Any]])  
async def get_admin_user_list(
    db: MongoDB = Depends(get_db),
    _: None = Depends(verify_admin_access)
):
    """
    Retrieve a list of users for admin.

    - **id**: unique user identifier  
    - **username**: username of the user  
    - **email**: email address of the user  
    - **status**: account status (active/inactive)  
    - **last_modified**: last updated date and time  
    """
    try:
        # Fetch users 
        users_cursor = db.users.find({}, {
            "username": 1,
            "email": 1,
            "last_modified": 1,
            "status":1,
        }).sort("last_modified", -1)
        
        users = await users_cursor.to_list(length=100)
        
        formatted_users = []
        for user in users:
            formatted_user = {
                "id": str(user["_id"]),
                "username": user.get("username", ""),
                "email": user.get("email", ""),
                "status": user.get("status", ""),
                "last_modified": user.get("last_modified",""),
                
            }
            formatted_users.append(formatted_user)
            
        return formatted_users
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Error fetching users: {str(e)}")