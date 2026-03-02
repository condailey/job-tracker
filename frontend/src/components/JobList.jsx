import JobCard from './JobCard'

 function JobList({ jobs, onDelete }) {                                                                                                      
    return (                                                                                                                        
      <div>       
        {jobs.map(job => (
          <JobCard key={job.id} job={job} onDelete={onDelete} />
        ))}
      </div>
    )
  }

  export default JobList