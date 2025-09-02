# services/pdf_service.py
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer
from reportlab.lib.styles import ParagraphStyle
from reportlab.lib import colors
from reportlab.lib.pagesizes import letter
from reportlab.lib.units import inch
from pdf2docx import Converter
from docx import Document
from docx.shared import Pt, RGBColor
from docx2pdf import convert as docx2pdf_convert
import os
import re

def hex_to_rgb(hex_color):
    
    hex_color = hex_color.lstrip('#')
    return tuple(int(hex_color[i:i+2], 16) for i in (0, 2, 4))

def create_styled_pdf_pdf(input_path: str, output_file="output.pdf", options=None) -> str:
    """
   
    """
    if options is None:
        options = {}
    
    try:
        # Convert PDF -> DOCX
        temp_docx = input_path.replace(".pdf", "_temp.docx")
        cv = Converter(input_path)
        cv.convert(temp_docx, start=0, end=None)
        cv.close()

        # Open DOCX and apply styling
        doc = Document(temp_docx)
        
        # Get options with defaults
        text_size = options.get('textSize', 12)
        font_name = options.get('font', 'Arial')
        text_color = options.get('themeColor', '#0000ff')
        
        # hex to RGB
        rgb_color = hex_to_rgb(text_color)
        
        for para in doc.paragraphs:
            for run in para.runs:
                run.font.name = font_name
                run.font.size = Pt(text_size)
                run.font.color.rgb = RGBColor(*rgb_color)

        # Step 3: Save styled DOCX
        styled_docx = temp_docx.replace("_temp.docx", "_styled.docx")
        doc.save(styled_docx)

        # Step 4: Convert DOCX -> PDF
        docx2pdf_convert(styled_docx, output_file)

        
        if os.path.exists(temp_docx):
            os.remove(temp_docx)
        if os.path.exists(styled_docx):
            os.remove(styled_docx)

        return output_file
    except Exception as e:
        raise Exception(f"PDF styling failed: {str(e)}")

def create_styled_pdf_text(text: str, output_file="output.pdf", options=None) -> str:
   
    if options is None:
        options = {}
    
    try:
        
        font_mapping = {
            "Arial": "Helvetica",
            "Verdana": "Helvetica", 
            "Times New Roman": "Times-Roman",
            "Courier New": "Courier"
        }
        
        doc = SimpleDocTemplate(output_file, pagesize=letter)
        
      
        text_size = options.get('textSize', 12)
        font_name = options.get('font', 'Arial')
        text_color = options.get('themeColor', '#0000ff')
        spacing = options.get('spacing', False)
        
       
        mapped_font = font_mapping.get(font_name, "Helvetica")
        
        # Convert hex to RGB for ReportLab
        rgb_color = hex_to_rgb(text_color)
        reportlab_color = colors.Color(rgb_color[0]/255, rgb_color[1]/255, rgb_color[2]/255)
        
        # Create style 
        style = ParagraphStyle(
            "Custom",
            fontName=mapped_font,
            fontSize=text_size,
            textColor=reportlab_color,
            leftIndent=20,
            leading=text_size * 1.5 if spacing else text_size * 1.2,
            spaceBefore=10 if spacing else 5,
            spaceAfter=10 if spacing else 5,
        )
        
        story = []
        
        
        cleaned_text = text.replace('<', '&lt;').replace('>', '&gt;')
        
        for line in cleaned_text.split("\n"):
            if line.strip():
                story.append(Paragraph(line, style))
                if spacing:
                    story.append(Spacer(1, 8))
        
        doc.build(story)
        return output_file
    except Exception as e:
        raise Exception(f"PDF creation from text failed: {str(e)}")