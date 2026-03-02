import { useState, useEffect } from 'react'
import JobList from './components/JobList'
import JobForm from './components/JobForm'
import StatusFilter from './components/StatusFilter'
import { getJobs, createJob, deleteJob, updateJob } from './api'

function App() {
  const [jobs, setJobs] = useState([])
  const [filter, setFilter] = useState("All")

  useEffect(() => {
    getJobs().then(data => setJobs(data))
  }, [])

  async function addJob(newJob) {
    const saved = await createJob(newJob)
    setJobs([...jobs, saved])
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
    <div>
      <h1>Job Application Tracker</h1>
      <JobForm onAdd={addJob} />
      <StatusFilter current={filter} onFilter={setFilter} />
      <JobList jobs={filteredJobs} onDelete={removeJob} onUpdate={editJob} />
    </div>
  )
}

export default App
