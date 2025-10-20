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

## Key Functionalities:

- Secure authentication flows, including traditional login and social login for streamlined user onboarding.
- Processed notes feature to provide structured, distraction-free learning content tailored for ADHD learners.
- Blog modules to enhance neuro-awareness for educators and students to access resources on ADHD-related learning strategies.
- Integrated role-based access control (RBAC) to define permissions for students, educators, and administrators.
- Developed a consultant service module to enable personalized academic and behavioral guidance for students.
- Created an admin panel with analytics, offering insights into student engagement, content usage, and system performance.
- Enabled blog viewing and publishing workflows, supporting content creation and knowledge sharing.
- Incorporated animations and interactive UI elements to increase user engagement and improve focus for ADHD students.

---

## 📂 Project Structure

```plaintext
project-root/
│
├── backend/ # Backend application (API, authentication, database handling)
│ ├── app/
│ │ ├── init.py
│ │ ├── main.py # Entry point for the backend server (FastAPI/Django)
│ │ ├── models/ # Database models (User, StudentProfile, LearningContent, etc.)
│ │ ├── routes/ # API route handlers (auth, content, analytics)
│ │ ├── services/ # Business logic (recommendation engine, adaptive learning)
│ │ ├── schemas/ # Pydantic models for data validation and serialization
│ │ ├── core/ # Core utilities (config, dependencies, constants)
│ │ └── utils/ # Helper functions (token generation, data processing)
│ │
│ ├── tests/ # Unit and integration tests for backend
│ ├── requirements.txt # Python dependencies
│ └── .env.example # Example environment variables for backend setup
│
├── frontend/ # Frontend web application (React/Next.js)
│ ├── src/
│ │ ├── components/ # Reusable UI components (buttons, inputs, modals)
│ │ ├── pages/ # Page-level views (Dashboard, Profile, Learning Modules)
│ │ ├── hooks/ # Custom React hooks for state and logic handling
│ │ ├── context/ # Global context providers (auth, theme, user preferences)
│ │ ├── services/ # API calls to backend (axios or fetch implementations)
│ │ ├── styles/ # Global and modular CSS or Tailwind configurations
│ │ └── utils/ # Frontend helper functions and constants
│ │
│ ├── public/ # Static assets served directly (favicon, manifest, icons)
│ ├── package.json # Node.js dependencies and scripts
│ ├── .env.example # Example environment variables for frontend
│ └── vite.config.js / next.config.js# Frontend configuration file
│
├── assets/ # Shared assets (logos, illustrations, accessibility icons)
│ ├── images/
│ ├── icons/
│ └── fonts/
│
├── scripts/ # Utility or deployment scripts
│ ├── setup_db.py # Script to initialize or seed the database
│ ├── build_frontend.sh # Shell script to build frontend for deployment
│ └── deploy.sh # Deployment automation script
│
├── docs/ # Documentation and references
│ ├── architecture.md # System architecture and data flow explanation
│ ├── api_reference.md # API endpoint documentation
│ └── design_guidelines.md # UI/UX guidelines and accessibility notes
│
├── tests/ # End-to-end testing or combined testing utilities
│
├── .gitignore # Ignored files and folders for Git
├── LICENSE # Project license file
├── README.md # Project documentation
└── requirements.txt / package.json # High-level dependency management files
```
---

<h2>📋 Startup Instructions</h2>
  <ol>
    <li><strong>1.Clone the Repository</strong>
      <pre><code>git clone <repository-url></code></pre>
      <pre><code>cd <repository-directory></code></pre>
    </li>
    <li><strong>2. Create a virtual environment</strong>
      <pre><code># Windows
        python -m venv venv
        venv\Scripts\activate
      </code></pre>
       <pre><code># macOS/Linux
       python3 -m venv venv
       source venv/bin/activate</code></pre>
    </li>
     <li><strong>3. Install backend dependencies</strong>
      <pre><code>pip install -r backend/requirements.txt</code></pre>
    </li>
    <li><strong>4. Set up environment variables</strong>
      <pre><code>Create a .env file in the backend folder and configure variables such as:
      DATABASE_URL=<your-database-url>
      SECRET_KEY=<your-secret-key></code></pre>
    </li>
      <li><strong>5. Run the backend server</strong>
      <pre><code># From the backend folder
       uvicorn main:app --reload</code></pre>
    </li>
    </li>
      <li><strong>6. Set up and run the frontend</strong>
      <pre><code>cd frontend</code></pre>
      <pre><code>npm install</code></pre>
      <pre><code>npm start</code></pre>
    </li></ol>

