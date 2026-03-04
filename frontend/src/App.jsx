import { Routes, Route } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import JobsPage from './pages/JobsPage'
import JobDetailPage from './pages/JobDetailPage'

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/jobs" element={<JobsPage />} />
      <Route path="/jobs/:id" element={<JobDetailPage />} />
    </Routes>
  )
}

export default App
