import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import HeaderPage from './pages/HeaderPage'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/header-:id" element={<HeaderPage />} />
    </Routes>
  )
}

export default App
