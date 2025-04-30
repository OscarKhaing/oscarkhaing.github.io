import React, { useState, useRef, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import FocusPills from './PortfolioPage/FocusPills';
import FeaturedProject from './PortfolioPage/components/FeaturedProject';
import ProjectTabs from './PortfolioPage/components/ProjectTabs';
import ProjectGrid from './PortfolioPage/components/ProjectGrid';
import Timeline from './PortfolioPage/Timeline';
import FuturePlans from './PortfolioPage/FuturePlans';
import Footer from './PortfolioPage/Footer';
import { CategoryId, Category, Technology, Project } from './PortfolioPage/types';
import './PortfolioPage.css';
import { motion } from 'framer-motion';

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
    firebase: { id: 'firebase', name: 'Firebase' },
    sqlite: { id: 'sqlite', name: 'SQLite' },
    java: { id: 'java', name: 'Java' },
    angular: { id: 'angular', name: 'Angular' },
    mysql: { id: 'mysql', name: 'MySQL' },
    django: { id: 'django', name: 'Django' },
    javascript: { id: 'javascript', name: 'JavaScript' },
    android: { id: 'android', name: 'Android' },
    express: { id: 'express', name: 'Express.js' },
    'scikit-learn': { id: 'scikit-learn', name: 'scikit-learn' },
    keras: { id: 'keras', name: 'Keras' },
    'gnu-make': { id: 'gnu-make', name: 'GNU Make' }
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
      title: 'HKN Portal Website',
      description: 'Full-stack web app for HKN UCSD with event planning, resource access, and dynamic content',
      imageUrl: 'https://placehold.co/600x400/204080/FFCC00',
      category: 'software',
      featured: false,
      technologies: [techList.react, techList.django, techList.javascript],
      projectUrl: '/projects/hkn-portal',
    },
    {
      id: 3,
      title: 'LingoLab Hackathon App',
      description: 'LLM-based PDF reader that scans research papers for hard vocabulary',
      imageUrl: 'https://placehold.co/600x400/406060/FFD700',
      category: 'machine-learning',
      featured: false,
      technologies: [techList.react, techList.python, techList.firebase, techList.typescript, techList.nodejs, techList.express],
      projectUrl: '/projects/lingolab',
    },
    {
      id: 4,
      title: 'Successorator App',
      description: 'To-do list Android app with CI/CD and robust data handling using SQLite',
      imageUrl: 'https://placehold.co/600x400/304050/00FF00',
      category: 'software',
      featured: false,
      technologies: [techList.android, techList.sqlite, techList.java],
      projectUrl: '/projects/successorator',
    },
    {
      id: 5,
      title: 'Bean Classification Model',
      description: 'Neural network for classifying beans with preprocessing, evaluation, and hyperparameter tuning',
      imageUrl: 'https://placehold.co/600x400/703070/FF00FF',
      category: 'machine-learning',
      featured: false,
      technologies: [techList.tensorflow, techList['scikit-learn'], techList.keras],
      projectUrl: '/projects/bean-classification',
    },
    {
      id: 6,
      title: 'Graph Data Structure',
      description: "C++ implementation of BFS and Dijkstra's algorithm for CSV-based graphs",
      imageUrl: 'https://placehold.co/600x400/101010/CCCCCC',
      category: 'systems',
      featured: false,
      technologies: [techList.cpp, techList['gnu-make']],
      projectUrl: '/projects/graph-data',
    },
    {
      id: 7,
      title: 'C++ File Compressor',
      description: 'Huffman encoding-based compressor optimized for performance and memory efficiency',
      imageUrl: 'https://placehold.co/600x400/444444/AAAAAA',
      category: 'systems',
      featured: false,
      technologies: [techList.cpp, techList['gnu-make']],
      projectUrl: '/projects/file-compressor',
    },
    {
      id: 8,
      title: 'Web-QA Chat Chrome Extension',
      description: 'Chrome extension that answers questions based on web content using LlamaIndex backend',
      imageUrl: 'https://placehold.co/600x400/403030/FFF000',
      category: 'machine-learning',
      featured: false,
      technologies: [techList.python, techList.nodejs, techList.express, techList.angular, techList.typescript],
      projectUrl: '/projects/web-qa-chat',
    },
    {
      id: 9,
      title: 'SDHacks Website',
      description: 'Hackathon management site with authentication, CRUD, and scalable backend',
      imageUrl: 'https://placehold.co/600x400/000088/00FFFF',
      category: 'software',
      featured: false,
      technologies: [techList.mysql, techList.nodejs, techList.express, techList.react],
      projectUrl: '/projects/sdhacks-site',
    },
  


    
    // {
    //   id: 1,
    //   title: 'Text-to-SQL Generator',
    //   description: 'LLM-powered system that converts natural language to SQL queries for financial databases',
    //   imageUrl: 'https://placehold.co/600x400/202060/60FFFF',
    //   category: 'machine-learning',
    //   featured: true,
    //   technologies: [techList.python, techList.llm, techList.sql, techList.fastapi],
    //   projectUrl: '/projects/text-to-sql',
    // },
    // {
    //   id: 2,
    //   title: 'Neural Networks Lab',
    //   description: 'Deep learning research and implementation for vision tasks',
    //   imageUrl: 'https://placehold.co/600x400/252525/FFF000',
    //   category: 'machine-learning',
    //   technologies: [techList.python, techList.tensorflow, techList.pytorch],
    //   projectUrl: '/projects/neural-networks',
    // },
    // {
    //   id: 3,
    //   title: 'Computer Vision Pipeline',
    //   description: 'Object detection and recognition systems with real-time processing',
    //   imageUrl: 'https://placehold.co/600x400/252525/60FFFF',
    //   category: 'machine-learning',
    //   technologies: [techList.python, techList.pytorch, techList.openai],
    //   projectUrl: '/projects/computer-vision',
    // },
    // {
    //   id: 4,
    //   title: 'AWS Infrastructure',
    //   description: 'Scalable cloud architecture design for high-availability systems',
    //   imageUrl: 'https://placehold.co/600x400/252525/FFF000',
    //   category: 'cloud-computing',
    //   technologies: [techList.aws, techList.terraform, techList.docker],
    //   projectUrl: '/projects/aws-infrastructure',
    // },
    // {
    //   id: 5,
    //   title: 'Kubernetes Deployment',
    //   description: 'Container orchestration and management for microservices',
    //   imageUrl: 'https://placehold.co/600x400/252525/60FFFF',
    //   category: 'cloud-computing',
    //   technologies: [techList.kubernetes, techList.docker, techList.golang],
    //   projectUrl: '/projects/kubernetes',
    // },
    // {
    //   id: 6,
    //   title: 'Distributed Systems',
    //   description: 'Fault-tolerant system design with asynchronous messaging',
    //   imageUrl: 'https://placehold.co/600x400/252525/FFF000',
    //   category: 'systems',
    //   technologies: [techList.golang, techList.cpp, techList.kafka],
    //   projectUrl: '/projects/distributed-systems',
    // },
    // {
    //   id: 7,
    //   title: 'Portfolio Website',
    //   description: 'Modern, interactive personal showcase with React and animations',
    //   imageUrl: 'https://placehold.co/600x400/252525/60FFFF',
    //   category: 'software',
    //   technologies: [techList.react, techList.typescript, techList.nodejs],
    //   projectUrl: '/projects/portfolio',
    // },
    // {
    //   id: 8,
    //   title: 'Algorithmic Trading',
    //   description: 'High-frequency trading systems and quant strategies',
    //   imageUrl: 'https://placehold.co/600x400/252525/FFF000',
    //   category: 'quant',
    //   technologies: [techList.python, techList.cpp, techList.pandas],
    //   projectUrl: '/projects/algo-trading',
    // },
  ];

  const filteredProjects = activeCategory === 'all' 
    ? projects.filter(project => !project.featured) 
    : projects.filter(project => project.category === activeCategory && !project.featured);
  
  const featuredProject = projects.find(project => project.featured);

  return (
    <section id="portfolio">
    <div className="cyberpunk-portfolio">
      <Helmet>
        <title>Technical Portfolio | Oscar Khaing</title>
        <meta name="description" content="Explore my technical projects across machine learning, cloud computing, systems engineering, and more." />
      </Helmet>
      <motion.h1 
            className="cp-main-title"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            TECHNICAL PORTFOLIO
      </motion.h1>
      
      <FocusPills />
      
      {featuredProject && <FeaturedProject project={featuredProject} />}
      
      <div className="cp-tabs-container" ref={navRef}>
        <ProjectTabs 
          categories={categories}
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
          isSticky={isSticky}
        />
      </div>
      
      <ProjectGrid projects={filteredProjects} />
      
      <Timeline />
      <FuturePlans />
      <Footer />
    </div>
    </section>
  );
};

export default PortfolioPage; 