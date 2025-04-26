import React, { useState } from "react";
import { Project } from "./types";
import "../../styles/ProjectCard.css";

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <article className="project-card">
      <div className="project-card-content">
        <img
          className="project-card-image"
          src={project.img}
          alt={project.title}
        />
        <div className="project-card-details">
          <header className="project-card-header">
            <h4 className="project-card-title">{project.title}</h4>
            <time className="project-card-date">{project.date}</time>
          </header>
          <p className="project-card-description">{project.desc}</p>
          <a
            className="project-card-button"
            href={project.link}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={{
              transform: isHovered ? "scale(1.05)" : "scale(1)",
            }}
          >
            View Project
          </a>
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
