import './App.css'
import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import Portfolio from './sections/Portfolio'
import { Helmet } from 'react-helmet-async'

function App() {
  return (
    <div className="min-h-screen bg-background text-text-primary">
      <Helmet>
        <title>My Awesome Portfolio</title>
        <meta name="description" content="A showcase of my projects and skills." />
        <meta property="og:title" content="My Awesome Portfolio" />
        <meta property="og:description" content="Come check out my work!" />
        <meta property="og:image" content="/path-to-preview-image.png" />
        <meta property="og:url" content="https://oscarkhaing.github.io/" />
      </Helmet>
      <Navbar />
      <Hero />
      <Portfolio />
    </div>
  )
}

export default App
