from fastapi import APIRouter, Depends, HTTPException
from app.database import get_db, MongoDB
from app.models.feedback import Feedback

router = APIRouter(
    prefix="/feedback",
    tags=["feedback"]
)

@router.post("/", response_model=dict)
async def submit_feedback(feedback: Feedback, db: MongoDB = Depends(get_db)):
    """
    Submit the feedback to the backend.

    - **isUseful**: user evaluvation on usefulness
    - **experience**: evaluvation of user experience
    - **feedback**: suggestions by the user
    - **rating**: rating by the user
    """
    try:
        result = await db.feedback.insert_one(feedback.model_dump())
        return {"message": "Feedback submitted successfully", "id": str(result.inserted_id)}
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Failed to save feedback: {str(e)}")
