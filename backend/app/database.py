from motor.motor_asyncio import AsyncIOMotorClient
from pymongo.errors import ConnectionFailure
import os
from dotenv import load_dotenv
from functools import lru_cache

load_dotenv()

class MongoDB:
    
    def __init__(self):
        self.client = None
        self.db = None
        self.files = None
        self.users = None
        self.feedback = None

    async def connect(self):
        try:
           
            self.client = AsyncIOMotorClient(os.getenv("MONGO_URI"))
            self.db = self.client[os.getenv("MONGO_DB_NAME")]
            self.files = self.db["files"]
            self.users = self.db["users"] 
            self.feedback = self.db["feedback"] 
           
            await self.client.admin.command("ping")
            print(" MongoDB connection successful")
            return True
        except ConnectionFailure as e:
            print("MongoDB connection failed: {e}")
            return False

    async def close(self):
        if self.client:
            self.client.close()
          

@lru_cache # Caches the instance 
def get_mongodb():
    return MongoDB()   # Returns new instance 

async def get_db():  
    db = get_mongodb() 
    if not db.client: 
        await db.connect() 
    return db