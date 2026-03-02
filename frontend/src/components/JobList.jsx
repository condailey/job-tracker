import JobCard from './JobCard'

 function JobList({ jobs, onDelete, onUpdate }) {                                                                                                      
    return (                                                                                                                        
      <div>       
        {jobs.map(job => (
          <JobCard key={job.id} job={job} onDelete={onDelete} onUpdate={onUpdate} />
        ))}
      </div>
    )
  }

  export default JobList