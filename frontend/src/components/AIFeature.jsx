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
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <h2 className="text-xl font-bold text-gray-800 mb-4">Resume Match</h2>
            <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                <textarea
                    placeholder="Paste job description here"
                    value={jobDescription}
                    onChange={e => setJobDescription(e.target.value)}
                    rows={5}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 resize-y"
                />
                <textarea
                    placeholder="Paste your resume here"
                    value={resume}
                    onChange={e => setResume(e.target.value)}
                    rows={5}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 resize-y"
                />
                <button
                    type="submit"
                    disabled={loading}
                    className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 cursor-pointer disabled:bg-gray-400 disabled:cursor-not-allowed"
                >
                    {loading ? "Analyzing..." : "Check Match"}
                </button>
            </form>
            {result && (
                <pre className="mt-4 p-4 bg-gray-50 rounded-lg text-sm text-gray-700 whitespace-pre-wrap">
                    {result}
                </pre>
            )}
        </div>
    )
}

export default AIFeature
