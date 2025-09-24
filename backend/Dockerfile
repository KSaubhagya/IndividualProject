FROM python:3.13.2-slim

WORKDIR /app

# Create a non-root user (fixes the security warning)
RUN adduser --disabled-password --gecos '' myuser

# Copy requirements and install dependencies
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Copy application code
COPY . .

# Change ownership to the non-root user
RUN chown -R myuser:myuser /app

# Switch to non-root user
USER myuser

# Expose port
EXPOSE 8080

# Start the application
CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8080"]