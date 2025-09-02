from fastapi import APIRouter, Depends, Form, UploadFile, File, HTTPException
from datetime import datetime, timezone
from app.database import get_db
from fastapi.responses import FileResponse
import os
import fitz  # PyMuPDF
import pytesseract
from PIL import Image
import docx2txt
from tempfile import NamedTemporaryFile
import uuid

from app.utils.create_style import create_styled_pdf_pdf, create_styled_pdf_text

router = APIRouter(prefix="/files", tags=["files"])

PROCESSED_DIR = "processed_files"
os.makedirs(PROCESSED_DIR, exist_ok=True)

# text extraction 
def extract_pdf_text(path: str) -> str:
    try:
        doc = fitz.open(path)
        lines = []  # collect text pieces in a list
        for page in doc:
            page_dict = page.get_text("dict")
            for block in page_dict.get("blocks", []):
                if "lines" in block:
                    for line in block["lines"]:
                        line_text = " ".join([span["text"] for span in line["spans"]])
                        lines.append(line_text)
        return "\n".join(lines)  # join once at the end
    except Exception as e:
        raise Exception(f"PDF extraction failed: {str(e)}")

def extract_image_text(path: str) -> str:
    try:
        img = Image.open(path)
        return pytesseract.image_to_string(img)
    except Exception as e:
        raise Exception(f"Image OCR failed: {str(e)}")

def extract_docx_text(path: str) -> str:
    try:
        return docx2txt.process(path)
    except Exception as e:
        raise Exception(f"DOCX extraction failed: {str(e)}")

@router.post("/process")
async def process_file(
    file: UploadFile = File(...),
    text_size: int = Form(16),
    font: str = Form("Arial"),
    theme_color: str = Form("#0000ff"),
    spacing: bool = Form(False),
    db=Depends(get_db)
):
    try:
        # Generate a unique filename
        file_id = str(uuid.uuid4())
        original_filename = file.filename
        file_extension = os.path.splitext(original_filename)[1].lower()
        
        # Save uploaded file temporarily
        with NamedTemporaryFile(delete=False, suffix=file_extension) as tmp:
            content = await file.read()
            tmp.write(content)
            tmp_path = tmp.name


        try:
            if file_extension == ".pdf":
                text = extract_pdf_text(tmp_path)
                if not text.strip():  # fallback OCR
                    print("PDF text extraction returned empty, trying OCR...")
                    text = extract_image_text(tmp_path)
            elif file_extension in [".png", ".jpg", ".jpeg", ".bmp", ".tiff"]:
                text = extract_image_text(tmp_path)
            elif file_extension in [".docx", ".doc"]:
                text = extract_docx_text(tmp_path)
            else:
                raise HTTPException(status_code=400, detail=f"Unsupported file type: {file_extension}")
        except Exception as extraction_error:
            # Clean up temp file
            os.unlink(tmp_path)
            raise HTTPException(status_code=400, detail=f"Text extraction failed: {str(extraction_error)}")
        
        # Generate styled PDF 
        output_pdf_name = f"{file_id}_processed.pdf"
        output_pdf_path = os.path.join(PROCESSED_DIR, output_pdf_name)

        # Create options dict
        styling_options = {
            'textSize': text_size,
            'font': font,
            'themeColor': theme_color,
            'spacing': spacing
        }

        if file_extension == ".pdf":
            create_styled_pdf_pdf(tmp_path, output_file=output_pdf_path, options=styling_options)
        else:
            create_styled_pdf_text(text, output_file=output_pdf_path, options=styling_options)

        
        os.unlink(tmp_path)
        
        # Store metadata 
        doc = {
            "file_id": file_id,
            "file_name": original_filename,
            "upload_date": datetime.now(timezone.utc),
            "file_extension": file_extension,
            "processed_file_path": output_pdf_path,
            "styling_options": styling_options,  # Store 
            "status": "processed"
        }
        result = await db.files.insert_one(doc)
        
        return {
            "success": True,
            "message": "File processed successfully",
            "file_id": file_id,
            "original_filename": original_filename,
            "processed_filename": output_pdf_name,
            "db_id": str(result.inserted_id)
        }

    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@router.post("/save-cloudinary-urls")
async def save_cloudinary_urls(
    file_data: dict,
    db=Depends(get_db)
):
    """Store Cloudinary URLs after frontend uploads"""
    try:
        # Update with Cloudinary URLs
        await db.files.update_one(
            {"file_id": file_data.get("file_id")},
            {"$set": {
                "original_file_url": file_data.get("original_url"),
                "processed_file_url": file_data.get("processed_url"),
                "cloudinary_upload_date": datetime.now(timezone.utc),
                "status": "uploaded"
            }}
        )

        return {
            "success": True,
            "message": "Cloudinary URLs stored successfully"
        }

    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@router.get("/download/{file_id}")
async def download_file(file_id: str, db=Depends(get_db)):
    """Download processed file from backend (not Cloudinary)"""
    try:
        # Find file metadata
        file_doc = await db.files.find_one({"file_id": file_id})
        if not file_doc:
            raise HTTPException(status_code=404, detail="File not found")
        
        file_path = file_doc.get("processed_file_path")
        if not file_path or not os.path.exists(file_path):
            raise HTTPException(status_code=404, detail="Processed file not found")
        
        # Return for download
        return FileResponse(
            file_path,
            filename=os.path.basename(file_path),
            media_type="application/pdf"
        )
        
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))