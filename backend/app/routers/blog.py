from fastapi import APIRouter, HTTPException, UploadFile, File, Form
from typing import List
import os
import json
import shutil
from datetime import datetime

router = APIRouter(prefix="/api/blogs", tags=["blogs"])

# File paths
BLOGS_FILE = "blogs.json"
UPLOAD_DIR = "static/images"
os.makedirs(UPLOAD_DIR, exist_ok=True)

def load_blogs():
    """Load blogs from JSON file"""
    if not os.path.exists(BLOGS_FILE):
        return []
    
    try:
        with open(BLOGS_FILE, 'r') as f:
            return json.load(f)
    except:
        return []

def save_blogs(blogs):
    """Save blogs to JSON file"""
    with open(BLOGS_FILE, 'w') as f:
        json.dump(blogs, f, indent=2)

@router.get("/", response_model=List[dict])
async def get_blogs():
    blogs = load_blogs()
    return blogs

@router.get("/{blog_id}", response_model=dict)
async def get_blog(blog_id: int):
    blogs = load_blogs()
    for blog in blogs:
        if blog["id"] == blog_id:
            return blog
    raise HTTPException(status_code=404, detail="Blog not found")


@router.post("/", response_model=dict)
async def create_blog(
    title: str = Form(...),
    author: str = Form(...),
    content: str = Form(...),
    image: UploadFile = File(None)
):
    try:
        # Handle image upload
        image_filename = None
        if image and image.filename:
            # Generate unique filename
            file_extension = os.path.splitext(image.filename)[1]
            image_filename = f"{datetime.now().strftime('%Y%m%d_%H%M%S')}{file_extension}"
            image_path = os.path.join(UPLOAD_DIR, image_filename)
            
            # Save the file
            with open(image_path, "wb") as buffer:
                shutil.copyfileobj(image.file, buffer)
        
        # Load existing blogs
        blogs = load_blogs()
        
        # Create new blog entry
        new_blog = {
            "id": len(blogs) + 1,
            "title": title,
            "author": author,
            "content": content,
            "image": f"/static/images/{image_filename}" if image_filename else None,
            "date": datetime.now().strftime("%Y-%m-%d")
        }
        
        # Add to list and save
        blogs.append(new_blog)
        save_blogs(blogs)
        
        return new_blog
        
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Error creating blog: {str(e)}")

@router.delete("/{blog_id}")
async def delete_blog(blog_id: int):
    try:
        blogs = load_blogs()
        
        # Find the blog to delete
        blog_to_delete = None
        for blog in blogs:
            if blog["id"] == blog_id:
                blog_to_delete = blog
                break
        
        if not blog_to_delete:
            raise HTTPException(status_code=404, detail="Blog not found")
        
        # Delete associated image file if exists
        if blog_to_delete.get("image"):
            image_filename = blog_to_delete["image"].split("/")[-1]
            image_path = os.path.join(UPLOAD_DIR, image_filename)
            if os.path.exists(image_path):
                os.remove(image_path)
        
        # Remove blog from list and save
        blogs = [blog for blog in blogs if blog["id"] != blog_id]
        save_blogs(blogs)
        
        return {"message": "Blog deleted successfully"}
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Error deleting blog: {str(e)}")