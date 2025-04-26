"use client";

import React from "react";
import { Branch, ProjectsData } from "./types";

interface BranchSelectorProps {
  branches: Branch[];
  projects: ProjectsData;
  selectedBranch: string;
  rotationDegrees: number;
  onSelectBranch: (branchId: string) => void;
}

const BranchSelector: React.FC<BranchSelectorProps> = ({
  branches,
  projects,
  selectedBranch,
  rotationDegrees,
  onSelectBranch,
}) => {
  return (
    <div className="relative h-[600px] w-[600px] max-md:h-[400px] max-md:w-[400px] max-sm:h-[300px] max-sm:w-[300px]">
      <div
        className="absolute transition-transform ease-in-out duration-[800ms] size-full"
        style={{
          transform: `rotate(${rotationDegrees}deg)`,
        }}
      >
        {branches.map((branch) => (
          <div
            key={branch.id}
            className="origin-bottom absolute top-2/4 left-2/4 w-1 transition-all duration-500 ease-in-out h-[45%]"
            style={{
              transform: `rotate(${branch.angle}deg)`,
              opacity: selectedBranch === branch.id ? 1 : 0.3,
            }}
          >
            <div
              className="rounded-sm transition-all duration-500 ease-in-out size-full"
              style={{
                background: selectedBranch === branch.id ? "#4318D1" : "#333",
              }}
            />
            <button
              className="whitespace-nowrap absolute top-0 left-2/4 px-4 py-2 text-sm font-medium rounded-lg -translate-x-2/4 -translate-y-full"
              onClick={() => onSelectBranch(branch.id)}
              style={{
                background: selectedBranch === branch.id ? "#4318D1" : "#333",
                color: "#FFF",
              }}
            >
              <span>{branch.name}</span>
            </button>
            {projects[branch.id]?.map((project, index) => (
              <div
                key={`${branch.id}-dot-${index}`}
                className="absolute left-2/4 w-2 h-2 rounded-full transition-all duration-500 ease-in-out"
                style={{
                  transform: `translateY(${
                    -index * 120 - 100
                  }px) translateX(-50%)`,
                  opacity: selectedBranch === branch.id ? 1 : 0,
                }}
              >
                <div
                  className="rounded-full size-full"
                  style={{
                    background:
                      selectedBranch === branch.id ? "#4318D1" : "#333",
                  }}
                />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default BranchSelector;
