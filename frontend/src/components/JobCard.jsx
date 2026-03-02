function JobCard({ job, onDelete, onUpdate }) {
    const statuses = ["Applied", "Phone Screen", "Interview", "Offer", "Rejected"]

    return (
        <div>
        <h3>{job.title}</h3>
        <p>{job.company}</p>
        <select
            value={job.status}
            onChange={e => onUpdate(job.id, { ...job, status: e.target.value })}
        >
            {statuses.map(s => (
                <option key={s} value={s}>{s}</option>
            ))}
        </select>
        <button onClick={() => onDelete(job.id)}>Delete</button>
        </div>
    )
}

export default JobCard
