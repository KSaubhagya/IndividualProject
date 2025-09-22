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
    """
    Retrieve all available blogs.

    - **id**: unique identifier of the blog
    - **title**: title of the blog
    - **content**: content  of the blog
    - **image_path**: image path of the blog
    - **date**: posted date  of the blog
    - **returns**: list of blog objects, 404 error
    """
    blogs = load_blogs()
    return blogs

@router.get("/{blog_id}", response_model=dict)
async def get_blog(blog_id: int):
    """
    Retrieve a single blog by its ID.

    - **id**: unique identifier of the blog  
    - **returns**: blog object if found, 404 error
    """
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
    """
    Create a new blog entry.

    - **title**: title of the blog
    - **author**: name of the blog author 
    - **content**: content  of the blog
    - **image_path**: image path of the blog
    - **date**: posted date  of the blog
    - **returns**: the newly created blog object
    """
    try:
        image_filename = None
        if image and image.filename:
            # Generate unique filename
            file_extension = os.path.splitext(image.filename)[1]
            image_filename = f"{datetime.now().strftime('%Y%m%d_%H%M%S')}{file_extension}"
            image_path = os.path.join(UPLOAD_DIR, image_filename)
            
            # Save the file
            with open(image_path, "wb") as buffer:
                shutil.copyfileobj(image.file, buffer)
        
       
        blogs = load_blogs()
        
        # Create new blog 
        new_blog = {
            "id": max([blog["id"] for blog in blogs], default=0) + 1,
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
    """
    Delete a blog by its ID.

    - **id**: unique identifier of the blog  
    - **returns**: success message if deletion is successful
    """
    try:
        blogs = load_blogs()
        
        
        blog_to_delete = None
        for blog in blogs:
            if blog["id"] == blog_id:
                blog_to_delete = blog
                break
        
        if not blog_to_delete:
            raise HTTPException(status_code=404, detail="Blog not found")
        
        
        if blog_to_delete.get("image"):
            image_filename = blog_to_delete["image"].split("/")[-1]
            image_path = os.path.join(UPLOAD_DIR, image_filename)
            if os.path.exists(image_path):
                os.remove(image_path)
        
        
        blogs = [blog for blog in blogs if blog["id"] != blog_id]
        save_blogs(blogs)
        
        return {"message": "Blog deleted successfully"}
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Error deleting blog: {str(e)}")