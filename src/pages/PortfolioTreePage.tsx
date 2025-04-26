import React from 'react'
import Navbar from '../components/Navbar'
import { Helmet } from 'react-helmet-async'
import ProjectTimelineTree from '../components/PortfolioTree/ProjectTimelineTree'
import '../styles/Pages.css'

const PortfolioTreePage: React.FC = () => {
  return (
    <div className="page-container">
      <Helmet>
        <title>Project Timeline Tree | Oscar Khaing</title>
        <meta name="description" content="Interactive visualization of my project timeline." />
      </Helmet>
      <Navbar />
      <div className="page-content">
        <ProjectTimelineTree />
      </div>
    </div>
  )
}

export default PortfolioTreePage 