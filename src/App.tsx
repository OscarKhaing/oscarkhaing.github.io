import './App.css'
import './styles/variables.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import PortfolioPage from './pages/PortfolioPage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
