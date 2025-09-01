from sqlalchemy import Column, Integer, String, Text, DateTime
from sqlalchemy.ext.declarative import declarative_base
from datetime import datetime
import os

Base = declarative_base()

class Blog(Base):
    __tablename__ = "blogs"
    
    id = Column(Integer, primary_key=True, index=True)
    title = Column(String(255), nullable=False)
    content = Column(Text, nullable=False)
    image_path = Column(String(500), nullable=True)
    date = Column(DateTime, default=datetime.utcnow)
    
    @property
    def image_url(self):
        if self.image_path:
            return f"/static/images/{os.path.basename(self.image_path)}"
        return None