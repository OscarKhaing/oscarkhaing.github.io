import './App.css'
import './styles/variables.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import PortfolioTreePage from './pages/PortfolioTreePage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<PortfolioTreePage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
