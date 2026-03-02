function JobCard({ job, onDelete }) {
    return (
        <div>
        <h3>{job.title}</h3>
        <p>{job.company}</p>
        <p>Status: {job.status}</p>
        <button onClick={() =>  onDelete(job.id)}>Delete</button>
        </div>
    )
}

export default JobCard
