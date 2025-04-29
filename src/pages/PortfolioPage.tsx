import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import { Helmet } from 'react-helmet-async';
import '../styles/PortfolioPage.css';

// Types
type CategoryId = 'machine-learning' | 'cloud-computing' | 'systems' | 'software' | 'quant' | 'all';

interface Category {
  id: CategoryId;
  name: string;
}

interface Technology {
  id: string;
  name: string;
}

interface Project {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  category: CategoryId;
  featured?: boolean;
  technologies: Technology[];
  projectUrl: string;
}

interface TimelineItem {
  year: string;
  title: string;
  description: string;
}

const PortfolioPage: React.FC = () => {
  // State
  const [activeCategory, setActiveCategory] = useState<CategoryId>('all');
  const [showFuturePlans, setShowFuturePlans] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);
  const [isSticky, setIsSticky] = useState(false);
  const [clickedLink, setClickedLink] = useState<string | null>(null);
  
  // Handle sticky navigation
  useEffect(() => {
    const handleScroll = () => {
      if (navRef.current) {
        const navPosition = navRef.current.getBoundingClientRect().top;
        setIsSticky(navPosition <= 0);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Technical focus areas
  const techFocusAreas = [
    'Machine Learning',
    'Cloud Infrastructure',
    'Systems Engineering',
    'Quantitative Research',
    'DevOps Tooling',
    'LLM Applications'
  ];

  // Categories
  const categories: Category[] = [
    { id: 'all', name: 'All Projects' },
    { id: 'machine-learning', name: 'Machine Learning' },
    { id: 'cloud-computing', name: 'Cloud Computing' },
    { id: 'systems', name: 'Systems' },
    { id: 'software', name: 'Software' },
    { id: 'quant', name: 'Quant' },
  ];

  // Common technologies
  const techList: Record<string, Technology> = {
    python: { id: 'python', name: 'Python' },
    tensorflow: { id: 'tensorflow', name: 'TensorFlow' },
    pytorch: { id: 'pytorch', name: 'PyTorch' },
    react: { id: 'react', name: 'React' },
    aws: { id: 'aws', name: 'AWS' },
    kubernetes: { id: 'kubernetes', name: 'Kubernetes' },
    typescript: { id: 'typescript', name: 'TypeScript' },
    docker: { id: 'docker', name: 'Docker' },
    nodejs: { id: 'nodejs', name: 'Node.js' },
    cpp: { id: 'cpp', name: 'C++' },
    golang: { id: 'golang', name: 'Go' },
    openai: { id: 'openai', name: 'OpenAI API' },
    terraform: { id: 'terraform', name: 'Terraform' },
    kafka: { id: 'kafka', name: 'Kafka' },
    pandas: { id: 'pandas', name: 'Pandas' },
    fastapi: { id: 'fastapi', name: 'FastAPI' },
    sql: { id: 'sql', name: 'SQL' },
    llm: { id: 'llm', name: 'LLMs' },
  };

  // Projects
  const projects: Project[] = [
    {
      id: 1,
      title: 'Text-to-SQL Generator',
      description: 'LLM-powered system that converts natural language to SQL queries for financial databases',
      imageUrl: 'https://placehold.co/600x400/202060/60FFFF',
      category: 'machine-learning',
      featured: true,
      technologies: [techList.python, techList.llm, techList.sql, techList.fastapi],
      projectUrl: '/projects/text-to-sql',
    },
    {
      id: 2,
      title: 'Neural Networks Lab',
      description: 'Deep learning research and implementation for vision tasks',
      imageUrl: 'https://placehold.co/600x400/252525/FFF000',
      category: 'machine-learning',
      technologies: [techList.python, techList.tensorflow, techList.pytorch],
      projectUrl: '/projects/neural-networks',
    },
    {
      id: 3,
      title: 'Computer Vision Pipeline',
      description: 'Object detection and recognition systems with real-time processing',
      imageUrl: 'https://placehold.co/600x400/252525/60FFFF',
      category: 'machine-learning',
      technologies: [techList.python, techList.pytorch, techList.openai],
      projectUrl: '/projects/computer-vision',
    },
    {
      id: 4,
      title: 'AWS Infrastructure',
      description: 'Scalable cloud architecture design for high-availability systems',
      imageUrl: 'https://placehold.co/600x400/252525/FFF000',
      category: 'cloud-computing',
      technologies: [techList.aws, techList.terraform, techList.docker],
      projectUrl: '/projects/aws-infrastructure',
    },
    {
      id: 5,
      title: 'Kubernetes Deployment',
      description: 'Container orchestration and management for microservices',
      imageUrl: 'https://placehold.co/600x400/252525/60FFFF',
      category: 'cloud-computing',
      technologies: [techList.kubernetes, techList.docker, techList.golang],
      projectUrl: '/projects/kubernetes',
    },
    {
      id: 6,
      title: 'Distributed Systems',
      description: 'Fault-tolerant system design with asynchronous messaging',
      imageUrl: 'https://placehold.co/600x400/252525/FFF000',
      category: 'systems',
      technologies: [techList.golang, techList.cpp, techList.kafka],
      projectUrl: '/projects/distributed-systems',
    },
    {
      id: 7,
      title: 'Portfolio Website',
      description: 'Modern, interactive personal showcase with React and animations',
      imageUrl: 'https://placehold.co/600x400/252525/60FFFF',
      category: 'software',
      technologies: [techList.react, techList.typescript, techList.nodejs],
      projectUrl: '/projects/portfolio',
    },
    {
      id: 8,
      title: 'Algorithmic Trading',
      description: 'High-frequency trading systems and quant strategies',
      imageUrl: 'https://placehold.co/600x400/252525/FFF000',
      category: 'quant',
      technologies: [techList.python, techList.cpp, techList.pandas],
      projectUrl: '/projects/algo-trading',
    },
  ];

  // Timeline data
  const timelineData: TimelineItem[] = [
    {
      year: '2021',
      title: 'First ML Projects',
      description: 'Began exploring machine learning with PyTorch and TensorFlow'
    },
    {
      year: '2022',
      title: 'Backend & API',
      description: 'Built robust API infrastructure with FastAPI and deployed to cloud'
    },
    {
      year: '2023',
      title: 'Full-Stack & LLMs',
      description: 'Integrated frontend and backend systems, explored LLM applications'
    },
    {
      year: '2024',
      title: 'Cloud & Quant',
      description: 'Focused on cloud infrastructure and quantitative trading systems'
    },
    {
      year: '2025',
      title: 'DevOps & Optimization',
      description: 'Planning: advanced DevOps pipelines and system optimization'
    },
  ];

  // Future plans data
  const futurePlans = [
    {
      title: 'DevOps Automation',
      description: 'Building comprehensive CI/CD pipelines and infrastructure as code'
    },
    {
      title: 'GPU Cluster Optimization',
      description: 'Optimizing distributed training for ML models across GPU clusters'
    },
    {
      title: 'Systems & Observability',
      description: 'Creating advanced monitoring and observability tools for complex systems'
    },
    {
      title: 'Team Scaling',
      description: 'Leading engineering teams and mentoring junior developers'
    },
  ];

  const filteredProjects = activeCategory === 'all' 
    ? projects.filter(project => !project.featured) 
    : projects.filter(project => project.category === activeCategory && !project.featured);
  
  const featuredProject = projects.find(project => project.featured);

  // Handle footer link click with red flash effect
  const handleLinkClick = (linkId: string, href: string) => {
    setClickedLink(linkId);
    setTimeout(() => setClickedLink(null), 300);
    
    // If it's not an anchor link, let the default behavior happen
    if (!href.startsWith('#')) return;
    
    // Otherwise handle anchor links manually
    const element = document.getElementById(href.substring(1));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="cyberpunk-portfolio">
      <Helmet>
        <title>Technical Portfolio | Oscar Khaing</title>
        <meta name="description" content="Explore my technical projects across machine learning, cloud computing, systems engineering, and more." />
      </Helmet>
      
      <Navbar />
      
      {/* Hero Header Section */}
      <section className="cp-hero-header">
        <div className="cp-hero-content">
          <motion.h1 
            className="cp-main-title"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            TECHNICAL PORTFOLIO
          </motion.h1>
          
          <motion.p 
            className="cp-subtitle"
            initial={{ opacity:
0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Where ML meets Infrastructure, Cloud meets Control.
          </motion.p>
        </div>
        <div className="cp-grain-overlay"></div>
      </section>
      
      {/* Technical Focus Pills */}
      <section className="cp-focus-pills">
        <div className="cp-focus-pills-container">
          {techFocusAreas.map((focus, index) => (
            <motion.div 
              key={index} 
              className="cp-focus-pill"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.1 * index }}
              whileHover={{ 
                scale: 1.05, 
                boxShadow: '0 0 15px rgba(255, 240, 0, 0.7)' 
              }}
            >
              {focus}
            </motion.div>
          ))}
        </div>
      </section>
      
      {/* Featured Project */}
      {featuredProject && (
        <section className="cp-featured-project">
          <div className="cp-featured-project-container">
            <div className="cp-featured-image-container">
              <img 
                src={featuredProject.imageUrl} 
                alt={featuredProject.title} 
                className="cp-featured-image"
              />
              <div className="cp-image-glitch-overlay"></div>
            </div>
            
            <div className="cp-featured-content">
              <h2 className="cp-featured-title">
                🚀 Signature Project: {featuredProject.title}
              </h2>
              
              <h3 className="cp-featured-subtitle">
                Deploying LLMs on finance-grade infra
              </h3>
              
              <p className="cp-featured-description">
                {featuredProject.description}
              </p>
              
              <div className="cp-featured-tech">
                {featuredProject.technologies.map(tech => (
                  <span key={tech.id} className="cp-tech-tag">
                    {tech.name}
                  </span>
                ))}
              </div>
              
              <motion.a 
                href={featuredProject.projectUrl}
                className="cp-featured-button"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: '0 0 20px rgba(255, 240, 0, 0.8)'
                }}
                whileTap={{ scale: 0.95 }}
              >
                View Case Study
              </motion.a>
            </div>
          </div>
        </section>
      )}
      
      {/* Project Category Tabs */}
      <div className="cp-tabs-container" ref={navRef}>
        <div className={`cp-project-tabs ${isSticky ? 'sticky' : ''}`}>
          {categories.map(category => (
            <button 
              key={category.id}
              className={`cp-tab ${activeCategory === category.id ? 'active' : ''}`}
              onClick={() => setActiveCategory(category.id)}
            >
              {category.name}
              <div className="cp-tab-underline"></div>
            </button>
          ))}
        </div>
      </div>
      
      {/* Project Grid */}
      <section className="cp-project-grid">
        <div className="cp-grid-container">
          {filteredProjects.map(project => (
            <motion.div 
              key={project.id}
              className="cp-project-card"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4 }}
              whileHover={{ y: -10 }}
            >
              <div className="cp-card-image-container">
                <img 
                  src={project.imageUrl} 
                  alt={project.title} 
                  className="cp-card-image"
                />
                <div className="cp-card-overlay"></div>
              </div>
              
              <div className="cp-card-content">
                <h3 className="cp-card-title">{project.title}</h3>
                <p className="cp-card-description">{project.description}</p>
                
                <div className="cp-card-technologies">
                  {project.technologies.map(tech => (
                    <span key={tech.id} className="cp-card-tech">
                      {tech.name}
                    </span>
                  ))}
                </div>
                
                <motion.a 
                  href={project.projectUrl}
                  className="cp-card-button"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View Project
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
      
      {/* Timeline Section */}
      <section className="cp-timeline">
        <h2 className="cp-section-title">Development Journey</h2>
        
        <div className="cp-timeline-container">
          {timelineData.map((item, index) => (
            <div key={index} className="cp-timeline-item">
              <div className="cp-timeline-dot"></div>
              <div className="cp-timeline-content">
                <div className="cp-timeline-year">{item.year}</div>
                <h3 className="cp-timeline-title">{item.title}</h3>
                <p className="cp-timeline-description">{item.description}</p>
              </div>
            </div>
          ))}
          <div className="cp-timeline-line"></div>
        </div>
      </section>
      
      {/* Future Plans */}
      <section className="cp-future-plans">
        <div className="cp-future-header" onClick={() => setShowFuturePlans(!showFuturePlans)}>
          <h2 className="cp-section-title">What's Next?</h2>
          <div className={`cp-expand-icon ${showFuturePlans ? 'expanded' : ''}`}>+</div>
        </div>
        
        {showFuturePlans && (
          <motion.div 
            className="cp-future-content"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            transition={{ duration: 0.4 }}
          >
            <div className="cp-future-grid">
              {futurePlans.map((plan, index) => (
                <div key={index} className="cp-future-card">
                  <h3 className="cp-future-title">{plan.title}</h3>
                  <p className="cp-future-description">{plan.description}</p>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </section>
      
      {/* Footer */}
      <footer className="cp-footer">
        <div className="cp-footer-content">
          <div className="cp-footer-links">
            <a 
              href="https://github.com" 
              className={`cp-footer-link ${clickedLink === 'github' ? 'clicked' : ''}`}
              onClick={() => handleLinkClick('github', 'https://github.com')}
            >
              Github
            </a>
            <a 
              href="#" 
              className={`cp-footer-link ${clickedLink === 'resume' ? 'clicked' : ''}`}
              onClick={() => handleLinkClick('resume', '#')}
            >
              Resume
            </a>
            <a 
              href="mailto:example@email.com" 
              className={`cp-footer-link ${clickedLink === 'email' ? 'clicked' : ''}`}
              onClick={() => handleLinkClick('email', 'mailto:example@email.com')}
            >
              Email
            </a>
            <a 
              href="/" 
              className={`cp-footer-link ${clickedLink === 'home' ? 'clicked' : ''}`}
              onClick={() => handleLinkClick('home', '/')}
            >
              Back to Home
            </a>
          </div>
          
          <div className="cp-footer-glyphs">
            <div className="cp-glyph"></div>
            <div className="cp-glyph"></div>
            <div className="cp-glyph"></div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PortfolioPage; 