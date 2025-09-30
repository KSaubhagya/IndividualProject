from pydantic import BaseModel
from typing import List, Optional
from datetime import datetime

class User(BaseModel):
    username: str
    email: str
    role: str   
    last_modified: Optional[datetime]  
    status: str