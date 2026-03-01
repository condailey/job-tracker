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
        <form onSubmit={handleSubmit}>
            <input
                placeholder="Company"
                value={company}
                onChange={e => setCompany(e.target.value)}
            />
            <input 
                placeholder="Job Title"
                value={title}
                onChange={e => setTitle(e.target.value)}
            />
            <button type="submit">Add Job</button>
        </form>
    )
}

export default JobForm