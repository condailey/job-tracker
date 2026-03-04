import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import AIFeature from '../components/AIFeature'
import { getJob } from '../api'

function JobDetailPage() {
    const { id } = useParams()
    const navigate = useNavigate()
    const [job, setJob] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        getJob(id).then(data => {
            setJob(data)
            setLoading(false)
        })
    }, [id])

    if (loading) {
        return (
            <div className="max-w-2xl mx-auto p-6 min-h-screen bg-gray-50">
                <p className="text-gray-500">Loading...</p>
            </div>
        )
    }

    return (
        <div className="max-w-2xl mx-auto p-6 min-h-screen bg-gray-50">
            <button
                onClick={() => navigate('/jobs')}
                className="text-blue-500 hover:text-blue-700 mb-6 inline-block cursor-pointer"
            >
                &larr; Back to jobs
            </button>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 mb-6">
                <h1 className="text-2xl font-bold text-gray-800">{job.title}</h1>
                <p className="text-gray-500 text-lg">{job.company}</p>
                <span className="inline-block mt-2 px-3 py-1 rounded-full text-sm bg-blue-100 text-blue-800">
                    {job.status}
                </span>
            </div>
            <AIFeature />
        </div>
    )
}

export default JobDetailPage
