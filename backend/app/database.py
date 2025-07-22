from motor.motor_asyncio import AsyncIOMotorClient
from pymongo.errors import ConnectionFailure
import os
from dotenv import load_dotenv
from functools import lru_cache

load_dotenv()

class MongoDB:
    #Initializes client and db as None
    def __init__(self):
        self.client = None
        self.db = None
        self.files = None
        self.users = None
        self.quiz = None

    async def connect(self):
        try:
            ## 1. Initialize MongoDB client using URI from .env
            self.client = AsyncIOMotorClient(os.getenv("MONGO_URI"))
            self.db = self.client[os.getenv("MONGO_DB_NAME")]
            self.files = self.db["files"]
            self.users = self.db["users"] 
            self.quiz = self.db["quiz"] 
            ## 3. Ping the server to test connection
            await self.client.admin.command("ping")
            print(" MongoDB connection successful")
            return True
        except ConnectionFailure as e:
            print("MongoDB connection failed: {e}")
            return False

    async def close(self):
        if self.client:
            self.client.close()
            ## Properly close the connection

@lru_cache # Caches the instance to avoid reconnecting (ensure one connection-singleton)
def get_mongodb():
    return MongoDB()   # Returns a new MongoDB instance (cached after first call)

#Dependency for route injection
async def get_db():  # Gets the cached MongoDB instance
    db = get_mongodb() 
    if not db.client:  # If not connected yet
        await db.connect() # Establish connection and return
    return db