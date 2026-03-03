import { useState } from 'react'
import { matchResume } from '../api'

function AIFeature() {
    const [jobDescription, setJobDescription] = useState('')
    const [resume, setResume] = useState('')
    const [result, setResult] = useState('')
    const [loading, setLoading] = useState(false)

    async function handleSubmit(e) {
        e.preventDefault()
        setLoading(true)
        const data = await matchResume(jobDescription, resume)
        setResult(data.result)
        setLoading(false)
    }

    return (
        <div>
            <h2> Resume Match</h2>
            <form onSubmit={handleSubmit}>
                <textarea
                    placeholder="Paste job description here"
                    value={jobDescription}
                    onChange={e => setJobDescription(e.target.value)}
                    rows={5}
                />
                <textarea
                    placeholder="Paste your resume here"
                    value={resume}
                    onChange={e => setResume(e.target.value)}
                    rows={5}
                />
                <button type="submit" disabled={loading}>
                    {loading ? "Analyzing..." : "Check Match"}
                </button>
            </form>
            {result && <pre>{result}</pre>}
        </div>
    )
}

export default AIFeature