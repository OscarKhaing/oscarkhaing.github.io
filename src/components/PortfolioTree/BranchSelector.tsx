import React from "react";
import { Branch, ProjectsData } from "./types";
import "../../styles/BranchSelector.css";

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
    <div className="branch-selector">
      <div
        className="branch-wheel"
        style={{
          transform: `rotate(${rotationDegrees}deg)`,
        }}
      >
        {branches.map((branch) => (
          <div
            key={branch.id}
            className="branch-line"
            style={{
              transform: `rotate(${branch.angle}deg)`,
              opacity: selectedBranch === branch.id ? 1 : 0.3,
            }}
          >
            <div
              className="branch-line-inner"
              style={{
                background: selectedBranch === branch.id ? "#4318D1" : "#333",
              }}
            />
            <button
              className="branch-button"
              onClick={() => onSelectBranch(branch.id)}
              style={{
                background: selectedBranch === branch.id ? "#4318D1" : "#333",
                color: "#FFF",
              }}
            >
              <span>{branch.name}</span>
            </button>
            {projects[branch.id]?.map((_, index) => (
              // Note: The project data (first parameter) could be used in the future
              // for adding features like tooltips showing project details on hover,
              // or making dots clickable to navigate to the specific project
              <div
                key={`${branch.id}-dot-${index}`}
                className="branch-dot"
                style={{
                  transform: `translateY(${
                    -index * 120 - 100
                  }px) translateX(-50%)`,
                  opacity: selectedBranch === branch.id ? 1 : 0,
                }}
              >
                <div
                  className="branch-dot-inner"
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
