import { useState } from 'react'
import JobList from './components/JobList'
import JobForm from './components/JobForm'

const fakeJobs = [
  { id: 1, company: "Google", title: "Data Engineer", status: "Applied"},
  { id: 2, company: "Apple", title: "Senior Data Engineer", status: "Interview"},
  { id: 3, company: "Meta", title: "Analytics Engineer", status: "Rejected"},
]

function App() {
  const [jobs, setJobs] = useState(fakeJobs)

  function addJob(newJob) {
    setJobs([...jobs, { ...newJob, id: jobs.length + 1}])
  }
  return (
    <div>
      <h1>Job Application Tracker</h1>
      <JobForm onAdd={addJob} />
      <JobList jobs={jobs} />
    </div>
  )
}

export default App