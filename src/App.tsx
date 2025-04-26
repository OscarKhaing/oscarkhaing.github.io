import './App.css'
import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import Portfolio from './sections/Portfolio'

function App() {
  return (
    <div className="min-h-screen bg-background text-text-primary">
      <Navbar />
      <Hero />
      <Portfolio />
    </div>
  )
}

export default App
