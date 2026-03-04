function StatusFilter({ current, onFilter }) {
    const statuses = ["All", "Applied", "Phone Screen", "Interview", "Offer", "Rejected"]

    return (
        <div className="flex gap-2 mb-6 flex-wrap">
            {statuses.map(status => (
                <button
                    key={status}
                    onClick={() => onFilter(status)}
                    className={`px-3 py-1 rounded-full text-sm cursor-pointer ${
                        current === status
                            ? "bg-blue-500 text-white"
                            : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                    }`}
                >
                    {status}
                </button>
            ))}
        </div>
    )
}

export default StatusFilter
