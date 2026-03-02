import { useState } from 'react'
import JobList from './components/JobList'
import JobForm from './components/JobForm'
import StatusFilter from './components/StatusFilter'

const fakeJobs = [
  { id: 1, company: "Google", title: "Data Engineer", status: "Applied"},
  { id: 2, company: "Apple", title: "Senior Data Engineer", status: "Interview"},
  { id: 3, company: "Meta", title: "Analytics Engineer", status: "Rejected"},
]

function App() {
  const [jobs, setJobs] = useState(fakeJobs)
  const [filter, setFilter] = useState("All")

  function addJob(newJob) {
    setJobs([...jobs, { ...newJob, id: jobs.length + 1}])
  }

  const filteredJobs = filter === "All"
    ? jobs
    : jobs.filter(job => job.status === filter)

  return (
    <div>
      <h1>Job Application Tracker</h1>
      <JobForm onAdd={addJob} />
      <StatusFilter current ={filter} onFilter={setFilter} />
      <JobList jobs={filteredJobs} />
    </div>
  )
}

export default App