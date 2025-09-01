from pydantic_settings import BaseSettings
from pydantic import Field

class Settings(BaseSettings):
    mongo_uri: str = Field(alias="MONGO_URI")
    mongo_db_name: str = Field(alias="MONGO_DB_NAME")
   
    class Config:
        env_file = ".env"
        extra = "allow"
settings = Settings()
