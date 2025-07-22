from fastapi import APIRouter, Depends, UploadFile, File, HTTPException
from app.models.files import FileInput
# from database import files
from datetime import datetime, timezone
from app.database import get_db


router = APIRouter(prefix="/files", tags=["files"])

@router.post("/upload")
async def save_uploaded_file(
    file: FileInput,
    db=Depends(get_db)
):
    doc = {
        "file_name": file.name,
        "file_url": file.url,
        "upload_date": datetime.now(timezone.utc)
    }
    try:
        
        result = await db.files.insert_one(doc)
        
        return {
            "id": str(result.inserted_id),
            
            "message": "File uploaded successfully"
    
        }
        
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))