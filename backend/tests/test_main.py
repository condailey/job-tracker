from fastapi.testclient import TestClient
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from app.database import Base
from app.main import app, get_db

engine = create_engine("sqlite:///./test.db")
TestSessionLocal = sessionmaker(bind=engine)

Base.metadata.create_all(bind=engine)

def override_get_db():
    db = TestSessionLocal()
    try: 
        yield db
    finally:
        db.close()

app.dependency_overrides[get_db] = override_get_db
client = TestClient(app)

def test_hello():
    response = client.get("/")
    assert response.status_code == 200
    assert response.json() == {"message": "Hello, World!"}

def test_create_job():
    response = client.post("/jobs", json={
        "company": "Test Corp",
        "title": "Data Engineer",
        "status": "Applied"
    })
    assert response.status_code == 200
    data = response.json()
    assert data["company"] == "Test Corp"
    assert data["title"] == "Data Engineer"
    assert data["status"] == "Applied"
    assert "id" in data

def test_get_jobs():
    response = client.get("/jobs")
    assert response.status_code == 200
    data = response.json()
    assert len(data) > 0

def test_delete_job():
    create = client.post("/jobs", json={
        "company": "Delete Me", 
        "title": "Temp Job",
        "status": "Applied"
    })
    job_id = create.json()["id"]
    response = client.delete(f"/jobs/{job_id}")
    assert response.status_code == 200

def test_get_job_not_found():
    response = client.get("/jobs/9999")
    assert response.status_code == 404