from pydantic import BaseModel

class FileInput(BaseModel):
    url: str
    name: str

