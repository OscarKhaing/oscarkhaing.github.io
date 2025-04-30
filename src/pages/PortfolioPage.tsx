import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import { Helmet } from 'react-helmet-async';
import FocusPills from './PortfolioPage/FocusPills';
import Footer from './PortfolioPage/Footer';
import Timeline from './PortfolioPage/Timeline';
import FuturePlans from './PortfolioPage/FuturePlans';
import './PortfolioPage.css';

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



const PortfolioPage: React.FC = () => {
  // State
  const [activeCategory, setActiveCategory] = useState<CategoryId>('all');
  const navRef = useRef<HTMLDivElement>(null);
  const [isSticky, setIsSticky] = useState(false);
  
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

  

  

  const filteredProjects = activeCategory === 'all' 
    ? projects.filter(project => !project.featured) 
    : projects.filter(project => project.category === activeCategory && !project.featured);
  
  const featuredProject = projects.find(project => project.featured);

  

  return (
    <div className="cyberpunk-portfolio">
      <Helmet>
        <title>Technical Portfolio | Oscar Khaing</title>
        <meta name="description" content="Explore my technical projects across machine learning, cloud computing, systems engineering, and more." />
      </Helmet>
      
      <Navbar />
      
      <FocusPills />
      
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
      
      <Timeline />
      
      <FuturePlans />
      
      <Footer />
    </div>
  );
};

export default PortfolioPage; 