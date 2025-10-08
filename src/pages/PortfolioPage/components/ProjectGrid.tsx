// src/pages/PortfolioPage/components/ProjectGrid.tsx
import React from 'react';
import { motion } from 'framer-motion';
import { Project } from '../types';
import './ProjectGrid.css';

interface ProjectGridProps {
  projects: Project[];
  showImages: boolean;
}

const ProjectGrid: React.FC<ProjectGridProps> = ({ projects, showImages }) => {
  return (
    <section className="cp-project-grid">
      <div className="cp-grid-container">
        {projects.map(project => (
          <motion.div 
            key={project.id}
            className="cp-project-card"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            whileHover={{ y: -10 }}
          >
            {showImages && (
              <div className="cp-card-image-container">
                <img 
                  src={project.imageUrl} 
                  alt={project.title} 
                  className="cp-card-image"
                />
                <div className="cp-card-overlay"></div>
              </div>
            )}
            
            <div className={`cp-card-content ${!showImages ? 'cp-card-content-full' : ''}`}>
              <a href={project.projectUrl} className="cp-card-title-link">
                <h3 className="cp-card-title">{project.title}</h3>
              </a>
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
  );
};

export default ProjectGrid;