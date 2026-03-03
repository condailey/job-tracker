function JobCard({ job, onDelete, onUpdate }) {
    const statuses = ["Applied", "Phone Screen", "Interview", "Offer", "Rejected"]

    return (
        <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 flex items-center justify-between">
            <div>
                <h3 className="font-semibold text-gray-800">{job.title}</h3>
                <p className="text-gray-500 text-sm">{job.company}</p>
            </div>
            <div className="flex items-center gap-3">
                <select
                    value={job.status}
                    onChange={e => onUpdate(job.id, { ...job, status: e.target.value })}
                    className="px-2 py-1 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-blue-500"
                >
                    {statuses.map(s => (
                        <option key={s} value={s}>{s}</option>
                    ))}
                </select>
                <button
                    onClick={() => onDelete(job.id)}
                    className="text-red-500 hover:text-red-700 text-sm"
                >
                    Delete
                </button>
            </div>
        </div>
    )
}

export default JobCard
