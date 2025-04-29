import React, { useState } from "react";
import ProjectList from "./ProjectList";
import { Branch, ProjectsData } from "./types";
import "../../styles/PortfolioTree.css";
import Tree3D from "./Tree3D";

const ProjectTimelineTree: React.FC = () => {
  const [selectedBranch, setSelectedBranch] = useState<string>("ml");

  const [branches] = useState<Branch[]>([
    {
      id: "ml",
      name: "Machine Learning",
      angle: 0,
    },
    {
      id: "cloud",
      name: "Cloud Computing",
      angle: 72,
    },
    {
      id: "web",
      name: "Web Development",
      angle: 144,
    },
    {
      id: "systems",
      name: "Systems",
      angle: 216,
    },
    {
      id: "vision",
      name: "Computer Vision",
      angle: 288,
    },
  ]);

  const [projects] = useState<ProjectsData>({
    ml: [
      {
        date: "2023-10",
        title: "Neural Network Visualizer",
        desc: "Interactive deep learning architecture explorer",
        img: "https://placehold.co/600x400/111/FFF",
        link: "#",
      },
      {
        date: "2023-08",
        title: "AI Model Trainer",
        desc: "Automated machine learning pipeline",
        img: "https://placehold.co/600x400/111/FFF",
        link: "#",
      },
    ],
    cloud: [
      {
        date: "2023-09",
        title: "Cloud Orchestrator",
        desc: "Multi-cloud management platform",
        img: "https://placehold.co/600x400/111/FFF",
        link: "#",
      },
      {
        date: "2023-07",
        title: "Serverless Framework",
        desc: "Event-driven architecture system",
        img: "https://placehold.co/600x400/111/FFF",
        link: "#",
      },
    ],
    web: [
      {
        date: "2023-10",
        title: "Dynamic Dashboard",
        desc: "Real-time analytics platform",
        img: "https://placehold.co/600x400/111/FFF",
        link: "#",
      },
      {
        date: "2023-06",
        title: "Web Components Library",
        desc: "Reusable UI component system",
        img: "https://placehold.co/600x400/111/FFF",
        link: "#",
      },
    ],
    systems: [
      {
        date: "2023-09",
        title: "System Monitor",
        desc: "Performance tracking tool",
        img: "https://placehold.co/600x400/111/FFF",
        link: "#",
      },
      {
        date: "2023-08",
        title: "Distributed Cache",
        desc: "High-performance caching system",
        img: "https://placehold.co/600x400/111/FFF",
        link: "#",
      },
    ],
    vision: [
      {
        date: "2023-10",
        title: "Object Detector",
        desc: "Real-time object recognition",
        img: "https://placehold.co/600x400/111/FFF",
        link: "#",
      },
      {
        date: "2023-07",
        title: "Image Processor",
        desc: "Advanced image manipulation pipeline",
        img: "https://placehold.co/600x400/111/FFF",
        link: "#",
      },
    ],
  });

  const selectBranch = (branchId: string) => {
    // Handle "all" separately to reset to default view
    if (branchId === 'all') {
      setSelectedBranch('all');
    } else {
      setSelectedBranch(branchId);
    }
  };

  return (
    <section className="project-timeline-container">
      <div className="project-timeline-wrapper">
        <h2 className="project-timeline-title">
          Project Timeline Tree
        </h2>
        <p className="project-timeline-subtitle">
          Explore my journey through different technology branches
        </p>
        <div className="project-timeline-content">
          <Tree3D
            branches={branches}
            projects={projects}
            selectedBranch={selectedBranch}
            onSelectBranch={selectBranch}
          />
          <ProjectList
            branches={branches}
            projects={projects}
            selectedBranch={selectedBranch}
          />
        </div>
      </div>
    </section>
  );
};

export default ProjectTimelineTree;
