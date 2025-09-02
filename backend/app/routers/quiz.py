from fastapi import APIRouter, HTTPException, Depends
from app.models.quiz import QuizSubmission
from app.database import get_db
from app.database import MongoDB 

router = APIRouter(prefix="/quiz", tags=["quiz"])

@router.post("/")
async def save_quiz(submission: QuizSubmission, db: MongoDB = Depends(get_db)):
    try:
        await db.quiz.insert_one({"answers": submission.answers})
        return {"message": "Quiz answers saved successfully"}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
