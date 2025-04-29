import { useState } from 'react';
import '../../styles/Portfolio.css';
import '../../styles/animations.css';

// Type definitions for better type safety and easier extensions
type CategoryId = 'machine-learning' | 'cloud-computing' | 'systems' | 'software' | 'quant' | string;

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
  subcategory?: string;
  technologies: Technology[];
  projectUrl: string;
}

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState<CategoryId>('machine-learning');

  // Categories are easy to extend - just add new ones here
  const categories: Category[] = [
    { id: 'machine-learning', name: 'Machine Learning' },
    { id: 'cloud-computing', name: 'Cloud Computing' },
    { id: 'systems', name: 'Systems' },
    { id: 'software', name: 'Software' },
    // Easy to add new fields like Quant
    { id: 'quant', name: 'Quant' },
  ];

  // Common technologies for reuse
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
    opencv: { id: 'opencv', name: 'OpenCV' },
    terraform: { id: 'terraform', name: 'Terraform' },
    kafka: { id: 'kafka', name: 'Kafka' },
    pandas: { id: 'pandas', name: 'Pandas' },
  };

  // Projects organized by subcategory within main categories
  const projects: Project[] = [
    {
      id: 1,
      title: 'Neural Networks',
      description: 'Deep learning research and implementation',
      imageUrl: 'https://placehold.co/600x400',
      category: 'machine-learning',
      subcategory: 'neural-networks',
      technologies: [techList.python, techList.tensorflow, techList.pytorch],
      projectUrl: '/projects/neural-networks',
    },
    {
      id: 2,
      title: 'Computer Vision',
      description: 'Object detection and recognition systems',
      imageUrl: 'https://placehold.co/600x400',
      category: 'machine-learning',
      subcategory: 'computer-vision',
      technologies: [techList.python, techList.pytorch, techList.opencv],
      projectUrl: '/projects/computer-vision',
    },
    {
      id: 3,
      title: 'AWS Infrastructure',
      description: 'Scalable cloud architecture design',
      imageUrl: 'https://placehold.co/600x400',
      category: 'cloud-computing',
      technologies: [techList.aws, techList.terraform, techList.docker],
      projectUrl: '/projects/aws-infrastructure',
    },
    {
      id: 4,
      title: 'Kubernetes Deployment',
      description: 'Container orchestration and management',
      imageUrl: 'https://placehold.co/600x400',
      category: 'cloud-computing',
      technologies: [techList.kubernetes, techList.docker, techList.golang],
      projectUrl: '/projects/kubernetes',
    },
    {
      id: 5,
      title: 'Distributed Systems',
      description: 'Fault-tolerant system design',
      imageUrl: 'https://placehold.co/600x400',
      category: 'systems',
      technologies: [techList.golang, techList.cpp, techList.kafka],
      projectUrl: '/projects/distributed-systems',
    },
    {
      id: 6,
      title: 'Web Applications',
      description: 'Full-stack development with modern frameworks',
      imageUrl: 'https://placehold.co/600x400',
      category: 'software',
      technologies: [techList.react, techList.typescript, techList.nodejs],
      projectUrl: '/projects/web-applications',
    },
    // Easy to add new projects to existing or new categories
    {
      id: 7,
      title: 'Algorithmic Trading',
      description: 'High-frequency trading systems and strategies',
      imageUrl: 'https://placehold.co/600x400',
      category: 'quant',
      technologies: [techList.python, techList.cpp, techList.pandas],
      projectUrl: '/projects/algo-trading',
    },
  ];

  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="portfolio">
      <div className="portfolio-content-wrapper fade-in delay-0">
        {/* DEV NOTE: Remove this disclaimer when portfolio content is finalized */}
        <div style={{
          width: '100%',
          backgroundColor: 'rgba(96, 225, 224, 0.1)',
          border: '1px solid var(--color-secondary)',
          borderRadius: '0.5rem',
          padding: '1rem 1.5rem',
          marginBottom: '2rem',
        }}>
          <p style={{
            color: 'var(--color-text-primary)',
            fontSize: '1rem',
            lineHeight: 1.5,
            margin: 0,
          }}>
            👋 Thank you for visiting! My portfolio is currently being populated with projects.
            Check back soon to see my complete work across various technical domains.
          </p>
        </div>
        
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
                
                <div className="project-technologies">
                  {project.technologies.map(tech => (
                    <span key={tech.id} className="technology-tag">
                      {tech.name}
                    </span>
                  ))}
                </div>
                
                <a href={project.projectUrl} className="project-link-button">
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio; 