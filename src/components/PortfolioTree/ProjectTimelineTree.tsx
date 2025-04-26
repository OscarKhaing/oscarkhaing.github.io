"use client";

import React, { useState } from "react";
import BranchSelector from "./BranchSelector";
import ProjectList from "./ProjectList";
import { Branch, ProjectsData } from "./types";

const ProjectTimelineTree: React.FC = () => {
  const [selectedBranch, setSelectedBranch] = useState<string>("ml");
  const [rotationDegrees, setRotationDegrees] = useState<number>(0);

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
    const newBranch = branches.find((b) => b.id === branchId);
    if (newBranch) {
      setRotationDegrees(-newBranch.angle);
      setSelectedBranch(branchId);
    }
  };

  return (
    <section className="flex flex-col items-center px-5 py-20 w-screen bg-neutral-900 min-h-screen">
      <div className="w-full max-w-[1400px]">
        <h2 className="mb-5 text-5xl font-bold text-center text-white">
          Project Timeline Tree
        </h2>
        <p className="mb-16 text-xl text-center text-neutral-400">
          Explore my journey through different technology branches
        </p>
        <div className="flex relative gap-10 justify-center items-start max-md:flex-col">
          <BranchSelector
            branches={branches}
            projects={projects}
            selectedBranch={selectedBranch}
            rotationDegrees={rotationDegrees}
            onSelectBranch={selectBranch}
          />
          <ProjectList
            branches={branches}
            projects={projects}
            selectedBranch={selectedBranch}
          />
        </div>
      </div>
      <div>
        <div
          dangerouslySetInnerHTML={{
            __html:
              '<link href="https://fonts.googleapis.com/css2?family=Inter&display=swap" rel="stylesheet">',
          }}
        />
      </div>
    </section>
  );
};

export default ProjectTimelineTree;
