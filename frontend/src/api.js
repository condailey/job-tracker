const API_URL = "http://localhost:8000"

export async function getJobs () {
    const response = await fetch(`${API_URL}/jobs`)
    return response.json()
}

export async function createJob(job) {
    const response = await fetch(`${API_URL}/jobs`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(job),
    })
    return response.json()
}

export async function deleteJob(id) {
    await fetch(`${API_URL}/jobs/${id}`, {
        method: "DELETE",
    })
}

export async function updateJob(id, job) {
    const response = await fetch(`${API_URL}/jobs/${id}`, {
        method: "PUT",
        headers: {"Content-Type": "application/json" },
        body: JSON.stringify(job),
    })
    return response.json()
}

export async function matchResume(jobDescription, resume) {
    const response = await fetch(`${API_URL}/match`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ job_description: jobDescription, resume: resume }),
    })
    return response.json()
}