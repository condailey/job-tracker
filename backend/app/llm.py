import anthropic
import os
from pathlib import Path
from dotenv import load_dotenv

load_dotenv(Path(__file__).resolve().parent.parent / ".env")

client = anthropic.Anthropic(api_key=os.getenv("ANTHROPIC_API_KEY"))

def analyze_match(job_description: str, resume: str) -> str:
    message = client.messages.create(
        model="claude-sonnet-4-20250514",
        max_tokens=1024,
        system="You are a job application analyst. Given a job description and a resume, provide: 1) A match score from 0-100, 2) Key matching skills, 3) Gaps to address. Be concise and actionable.",
        messages=[
            {
                "role": "user",
                "content": f"Job Description:\n{job_description}\n\nResume:\n{resume}"
            }
        ]
    )
    return message.content[0].text
