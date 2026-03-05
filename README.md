# Job Application Tracker

## Overview

A full-stack job application tracker with AI-powered resume matching. Built with a React frontend hosted on Vercel and a FastAPI backend running serverlessly on AWS Lambda with a PostgreSQL database on RDS. Includes a Claude API integration that analyzes how well your resume matches a job description and provides actionable feedback. Automated testing runs on every push via GitHub Actions.

## Architecture

- React frontend served by Vercel, communicates with the backend via REST API
- FastAPI backend deployed on AWS Lambda using Mangum as the ASGI adapter
- PostgreSQL database hosted on AWS RDS (us-east-2) stores all job application data
- Claude API analyzes resume-to-job-description fit and returns a match score with suggestions
- GitHub Actions runs pytest on every push to main using a SQLite test database

## Tech Stack

- Python 3.9
- FastAPI
- PostgreSQL (AWS RDS)
- SQLAlchemy
- React + Vite
- Tailwind CSS
- Claude API (Anthropic)
- AWS (Lambda, RDS, API Gateway)
- Vercel
- GitHub Actions
- pytest

## Features

- Add, edit, and delete job applications
- Track application status (Applied, Phone Screen, Interview, Offer, Rejected)
- Filter jobs by status
- AI resume match: paste a job description and your resume to get a fit score and improvement suggestions
- Automated test suite with CI/CD pipeline

## Project Structure

```
job-tracker/
├── backend/
│   ├── app/
│   │   ├── main.py          — FastAPI app, routes, and CORS config
│   │   ├── models.py        — SQLAlchemy database models
│   │   ├── schemas.py       — Pydantic request/response schemas
│   │   ├── database.py      — Database connection and session management
│   │   └── llm.py           — Claude API integration for resume matching
│   ├── tests/
│   │   └── test_main.py     — pytest tests for API endpoints
│   └── requirements.txt
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── JobCard.jsx   — Displays a single job application
│   │   │   ├── JobForm.jsx   — Form to add/edit a job
│   │   │   ├── JobList.jsx   — Renders the list of all jobs
│   │   │   ├── StatusFilter.jsx — Filter jobs by status
│   │   │   └── AIFeature.jsx — Resume match UI
│   │   ├── api.js            — API call functions (fetch wrapper)
│   │   └── App.jsx
│   └── package.json
├── .github/
│   └── workflows/
│       └── ci.yml            — GitHub Actions CI workflow
└── CLAUDE.md
```

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/` | Health check |
| POST | `/jobs` | Create a job application |
| GET | `/jobs` | List all job applications |
| GET | `/jobs/{id}` | Get a single job application |
| PUT | `/jobs/{id}` | Update a job application |
| DELETE | `/jobs/{id}` | Delete a job application |
| POST | `/match` | Analyze resume match against a job description |

## Setup

### Backend

1. Clone the repository
2. Create a virtual environment and install dependencies:
   ```
   cd backend
   python -m venv venv
   source venv/bin/activate
   pip install -r requirements.txt
   ```
3. Create a `.env` file in the backend directory with your database and API credentials:
   ```
   DATABASE_URL=postgresql://user:password@host:5432/job_tracker
   ANTHROPIC_API_KEY=your-api-key
   ```
4. Run the server:
   ```
   uvicorn app.main:app --reload
   ```

### Frontend

1. Install dependencies:
   ```
   cd frontend
   npm install
   ```
2. Start the dev server:
   ```
   npm run dev
   ```
3. The frontend runs at `http://localhost:5173` and calls the backend at `http://localhost:8000` by default. Set `VITE_API_URL` to point to a different backend.

### Running Tests

```
cd backend
python -m pytest tests/test_main.py -v
```
