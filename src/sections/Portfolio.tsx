import { useState } from 'react';
import '../styles/Portfolio.css';
import '../styles/animations.css';

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState('machine-learning');

  const categories = [
    { id: 'machine-learning', name: 'Machine Learning' },
    { id: 'cloud-computing', name: 'Cloud Computing' },
    { id: 'systems', name: 'Systems' },
    { id: 'software', name: 'Software' },
  ];

  const projects = [
    {
      id: 1,
      title: 'Neural Networks',
      description: 'Deep learning research and implementation',
      imageUrl: 'https://placehold.co/600x400',
      category: 'machine-learning',
    },
    {
      id: 2,
      title: 'Computer Vision',
      description: 'Object detection and recognition systems',
      imageUrl: 'https://placehold.co/600x400',
      category: 'machine-learning',
    },
    {
      id: 3,
      title: 'AWS Infrastructure',
      description: 'Scalable cloud architecture design',
      imageUrl: 'https://placehold.co/600x400',
      category: 'cloud-computing',
    },
    {
      id: 4,
      title: 'Kubernetes Deployment',
      description: 'Container orchestration and management',
      imageUrl: 'https://placehold.co/600x400',
      category: 'cloud-computing',
    },
    {
      id: 5,
      title: 'Distributed Systems',
      description: 'Fault-tolerant system design',
      imageUrl: 'https://placehold.co/600x400',
      category: 'systems',
    },
    {
      id: 6,
      title: 'Web Applications',
      description: 'Full-stack development with modern frameworks',
      imageUrl: 'https://placehold.co/600x400',
      category: 'software',
    },
  ];

  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="portfolio">
      <div className="portfolio-content-wrapper fade-in delay-0">
        <h1 className="portfolio-title">Technical Portfolio</h1>
        <p className="portfolio-description">
          Exploring the intersections of machine learning, cloud computing, 
          systems engineering, and software development.
        </p>

        <div className="portfolio-categories">
          {categories.map(category => (
            <button 
              key={category.id}
              className={`category-tab ${activeCategory === category.id ? 'active' : ''}`}
              onClick={() => setActiveCategory(category.id)}
            >
              {category.name}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {filteredProjects.map(project => (
            <div key={project.id} className="project-card fade-in">
              <img 
                src={project.imageUrl} 
                alt={project.title} 
                className="project-image"
              />
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio; 