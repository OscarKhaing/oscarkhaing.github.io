import React from "react";
import { Branch, ProjectsData } from "./types";
import ProjectCard from "./ProjectCard";
import "../../styles/ProjectList.css";

interface ProjectListProps {
  branches: Branch[];
  projects: ProjectsData;
  selectedBranch: string;
}

const ProjectList: React.FC<ProjectListProps> = ({
  branches,
  projects,
  selectedBranch,
}) => {
  return (
    <section className="project-list">
      <div className="project-list-container">
        {branches.map((branch) => (
          <div key={branch.id} hidden={!(selectedBranch === branch.id)}>
            <h3 className="project-list-branch-title">
              {branch.name}
            </h3>
            <div className="project-list-items">
              {projects[branch.id]?.map((project, index) => (
                <ProjectCard key={`${branch.id}-${index}`} project={project} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectList;
