from fastapi import FastAPI, Depends, HTTPException
from sqlalchemy.orm import Session
from app.database import engine, Base, SessionLocal
from app import models
from app.schemas import JobCreate, JobResponse, MatchRequest
from app.llm import analyze_match

Base.metadata.create_all(bind=engine)

app = FastAPI()

from fastapi.middleware.cors import CORSMiddleware

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_methods=["*"],
    allow_headers=["*"],
)

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@app.get("/")
def hello():
    return {"message": "Hello, World!"}

@app.post("/jobs", response_model=JobResponse)
def create_job(job: JobCreate, db: Session = Depends(get_db)):
    new_job = models.Job(company=job.company, title=job.title, status=job.status)
    db.add(new_job)
    db.commit()
    db.refresh(new_job)
    return new_job

@app.get("/jobs", response_model=list[JobResponse])
def get_jobs(db: Session = Depends(get_db)):
    jobs = db.query(models.Job).all()
    return jobs

@app.get("/jobs/{job_id}", response_model=JobResponse)
def get_job(job_id: int, db: Session = Depends(get_db)):
    job = db.query(models.Job).filter(models.Job.id == job_id).first()
    if not job:
        raise HTTPException(status_code=404, detail="Job not found")
    return job

@app.put("/jobs/{job_id}", response_model=JobResponse)
def update_job(job_id: int, job: JobCreate, db: Session = Depends(get_db)):
    existing_job = db.query(models.Job).filter(models.Job.id == job_id).first()
    if not existing_job:
        raise HTTPException(status_code=404, detail="Job not found")
    existing_job.company = job.company
    existing_job.title = job.title
    existing_job.status = job.status
    db.commit()
    db.refresh(existing_job)
    return existing_job

@app.delete("/jobs/{job_id}")
def delete_job(job_id: int, db: Session = Depends(get_db)):
    job = db.query(models.Job).filter(models.Job.id == job_id).first()
    if not job: 
        raise HTTPException(status_code=404, detail="Job not found")
    db.delete(job)
    db.commit()
    return {"detail": "Job deleted"}

@app.post("/match")
def match_resume(request: MatchRequest):
    result = analyze_match(request.job_description, request.resume)
    return {"result": result}