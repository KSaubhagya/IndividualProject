FROM python:3.13.2-alpine

WORKDIR /app

# Install security updates
RUN apk update && apk upgrade

# Copy requirements and install dependencies
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Copy application code
COPY . .

# Create and use a user with ID in Choreo's required range
RUN adduser -D -u 10014 myuser
USER 10014

# Expose port
EXPOSE 8080

# Start the application
CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8080"]