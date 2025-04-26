"use client";

import React from "react";
import { Branch, ProjectsData } from "./types";
import ProjectCard from "./ProjectCard";

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
    <section className="w-[600px] max-md:w-full">
      <div className="p-8 rounded-2xl bg-neutral-800 shadow-[0px_4px_20px_rgba(0,0,0,0.2)]">
        {branches.map((branch) => (
          <div key={branch.id} hidden={!(selectedBranch === branch.id)}>
            <h3 className="mb-6 text-3xl font-bold text-white">
              {branch.name}
            </h3>
            <div className="flex flex-col gap-6">
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
