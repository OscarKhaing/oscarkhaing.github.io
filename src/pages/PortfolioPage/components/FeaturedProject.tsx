// src/pages/PortfolioPage/components/FeaturedProject.tsx
import React from 'react';
import { motion } from 'framer-motion';
import { Project } from '../types';
import './FeaturedProject.css';

interface FeaturedProjectProps {
  project: Project;
  showImages: boolean;
}

const FeaturedProject: React.FC<FeaturedProjectProps> = ({ project, showImages }) => {
  if (!project) return null;
  
  return (
    <section className="cp-featured-project">
      <div className="cp-featured-project-container">
        {showImages && (
          <div className="cp-featured-image-container">
            <img 
              src={project.imageUrl} 
              alt={project.title} 
              className="cp-featured-image"
            />
            <div className="cp-image-glitch-overlay"></div>
          </div>
        )}
        
        <div className={`cp-featured-content ${!showImages ? 'cp-featured-content-full' : ''}`}>
          <h2 className="cp-featured-title">
            🚀 Signature Project: {project.title}
          </h2>
          
          <h3 className="cp-featured-subtitle">
            Deploying LLMs on finance-grade infra
          </h3>
          
          <p className="cp-featured-description">
            {project.description}
          </p>
          
          <div className="cp-featured-tech">
            {project.technologies.map(tech => (
              <span key={tech.id} className="cp-tech-tag">
                {tech.name}
              </span>
            ))}
          </div>
          
          <motion.a 
            href={project.projectUrl}
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
  );
};

export default FeaturedProject;