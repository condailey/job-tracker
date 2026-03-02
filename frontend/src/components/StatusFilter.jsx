function StatusFilter({ current, onFilter }) {
    const statuses = ["All", "Applied", "Phone Screen", "Interview", "Offer", "Rejected"]

    return (
        <div>
            {statuses.map(status => (
                <button
                    key={status}
                    onClick={() => onFilter(status)}
                    style={{ fontWeight: current === status ? "bold" : "normal" }}
                >
                {status}
                </button>
         ))}
        </div>
    )
}

export default StatusFilter