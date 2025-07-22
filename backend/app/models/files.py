from pydantic import BaseModel

class FileInput(BaseModel):
    url: str
    name: str

# from pydantic import BaseModel
# from datetime import datetime

# class FileInDB(BaseModel):
#     id: str
#     filename: str
#     content_type: str
#     size: int
#     upload_date: datetime
#     binary_data: bytes  
#     class Config:
#         json_encoders = {
#             datetime: lambda v: v.isoformat()
#         }