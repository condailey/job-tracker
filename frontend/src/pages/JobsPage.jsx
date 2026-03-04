import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import JobList from '../components/JobList'
import JobForm from '../components/JobForm'
import StatusFilter from '../components/StatusFilter'
import { getJobs, createJob, deleteJob, updateJob } from '../api'

function JobsPage() {
    const [jobs, setJobs] = useState([])
    const [filter, setFilter] = useState("All")
    const navigate = useNavigate()

    useEffect(() => {
        getJobs().then(data => setJobs(data))
    }, [])

    async function addJob(newJob) {
        const saved = await createJob(newJob)
        setJobs([...jobs, saved])
        navigate(`/jobs/${saved.id}`)
    }

    async function removeJob(id) {
        await deleteJob(id)
        setJobs(jobs.filter(job => job.id !== id))
    }

    async function editJob(id, updatedJob) {
        const saved = await updateJob(id, updatedJob)
        setJobs(jobs.map(job => job.id === id ? saved : job))
    }

    const filteredJobs = filter === "All"
        ? jobs
        : jobs.filter(job => job.status === filter)

    return (
        <div className="max-w-2xl mx-auto p-6 min-h-screen bg-gray-50">
            <h1 className="text-3xl font-bold text-gray-800 mb-6">Job Application Tracker</h1>
            <JobForm onAdd={addJob} />
            <StatusFilter current={filter} onFilter={setFilter} />
            <JobList jobs={filteredJobs} onDelete={removeJob} onUpdate={editJob} />
        </div>
    )
}

export default JobsPage
