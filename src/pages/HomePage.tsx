import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import About from '../components/About'
import Portfolio from '../components/Portfolio'
import Footer from '../components/Footer'
import { Helmet } from 'react-helmet-async'
import '../styles/Pages.css'

const HomePage: React.FC = () => {
  return (
    <div className="page-container">
      <Helmet>
        <title>My Awesome Portfolio</title>
        <meta name="description" content="A showcase of my projects and skills." />
        <meta property="og:title" content="My Awesome Portfolio" />
        <meta property="og:description" content="Come check out my work!" />
        <meta property="og:image" content="/path-to-preview-image.png" />
        <meta property="og:url" content="https://oscarkhaing.github.io/" />
      </Helmet>
      <Navbar />
      <div className="page-content">
        <Hero />
        <About />
        <Portfolio />
        <Footer />
      </div>
    </div>
  )
}

export default HomePage 