# IndividualProject
Personalized Learning System for Students with ADHD

This project aims to develop a personalized learning platform for students with ADHD to enhance focus, engagement, and academic performance.

## Objectives

- **Personalized Content:** Adapt learning materials based on individual ADHD profiles.  
- **Adaptive Learning Pathways:** Enhance engagement and academic performance through tailored learning journeys.  
- **Integrated Accessibility Tools:** Consolidate isolated solutions into a single platform.  
- **Continuous Support:** Adjust content delivery as students progress through educational stages.  
- **Intuitive Interface:** Ensure ease of use for students and educators.  
- **Neuro-Awareness:** Raise awareness about ADHD among students and educators.

---

## Project Structure

project-root/
│
├── backend/ # Backend application (FastAPI/Django/etc.)
│ ├── main.py # Entry point
│ ├── app/ # Application modules
│ └── requirements.txt
│
├── frontend/ # Frontend application (React/Next.js/etc.)
│ ├── src/
│ ├── public/
│ └── package.json
│
├── assets/ # Images, icons, and other static assets
├── scripts/ # Utility scripts for setup or deployment
└── README.md # Project documentation

---

## Startup Instructions

Follow these steps to set up and run the project:

### 1. Clone the repository
```bash
git clone <your-repo-url>
cd <your-repo-folder>

2. Create a virtual environment
# Windows
python -m venv venv
venv\Scripts\activate

# macOS/Linux
python3 -m venv venv
source venv/bin/activate

3. Install backend dependencies
pip install -r backend/requirements.txt

4. Set up environment variables
Create a .env file in the backend folder and configure variables such as:
DATABASE_URL=<your-database-url>
SECRET_KEY=<your-secret-key>

5. Run the backend server
# From the backend folder
uvicorn main:app --reload

6. Set up and run the frontend
cd frontend
npm install
npm start

