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
      <pre><code>cd frontend
      npm install
      npm start</code></pre>
    </li></ol>

