import JobCard from './JobCard'

function JobList({ jobs, onDelete, onUpdate }) {
    return (
        <div className="flex flex-col gap-3 mb-8">
            {jobs.map(job => (
                <JobCard key={job.id} job={job} onDelete={onDelete} onUpdate={onUpdate} />
            ))}
        </div>
    )
}

export default JobList
