from pydantic import BaseModel
from typing import List

class QuizSubmission(BaseModel):
    answers: List[str]
