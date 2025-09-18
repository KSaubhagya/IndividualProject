from pydantic import BaseModel, Field
from typing import Literal

class Feedback(BaseModel):
    isUseful: Literal["yes", "no"]
    experience: Literal["good", "neutral", "bad"]
    feedback: str = Field(..., min_length=3, max_length=1000)
    rating: int = Field(..., ge=1, le=5)
