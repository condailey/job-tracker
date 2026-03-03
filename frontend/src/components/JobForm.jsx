import { useState } from 'react'

function JobForm({ onAdd }) {
    const [company, setCompany] = useState('')
    const [title, setTitle] = useState('')

    function handleSubmit(e) {
        e.preventDefault()
        onAdd({ company, title, status: "Applied" })
        setCompany('')
        setTitle('')
    }

    return (
        <form onSubmit={handleSubmit} className="flex gap-3 mb-6">
            <input
                placeholder="Company"
                value={company}
                onChange={e => setCompany(e.target.value)}
                className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            />
            <input
                placeholder="Job Title"
                value={title}
                onChange={e => setTitle(e.target.value)}
                className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            />
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
                Add Job
            </button>
        </form>
    )
}

export default JobForm
