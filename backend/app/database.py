# create a mongodb connection
from motor.motor_asyncio import AsyncIOMotorClient

MONGO_URI = "mongodb://localhost:27017"  
DB_NAME = "file_upload_db"

client = AsyncIOMotorClient(MONGO_URI)
database = client[DB_NAME]
files_collection = database["files"]
