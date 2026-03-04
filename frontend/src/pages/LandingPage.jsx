import { useNavigate } from 'react-router-dom'

function LandingPage() {
    const navigate = useNavigate()

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
            <h1 className="text-6xl font-bold text-gray-800 mb-8 animate-fade-in-up">
                Job Tracker
            </h1>
            <button
                onClick={() => navigate('/jobs')}
                className="bg-blue-500 text-white px-8 py-3 rounded-lg text-lg hover:bg-blue-600 animate-fade-in-up cursor-pointer"
                style={{ animationDelay: '0.3s' }}
            >
                See my jobs
            </button>
        </div>
    )
}

export default LandingPage
