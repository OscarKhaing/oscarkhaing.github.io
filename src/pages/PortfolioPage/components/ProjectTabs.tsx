// src/pages/PortfolioPage/components/ProjectTabs.tsx
import React, { useEffect, useRef } from 'react';
import { Category, CategoryId } from '../types';
import './ProjectTabs.css';

interface ProjectTabsProps {
  categories: Category[];
  activeCategory: CategoryId;
  setActiveCategory: (id: CategoryId) => void;
  isSticky: boolean;
}

const ProjectTabs: React.FC<ProjectTabsProps> = ({ 
  categories, 
  activeCategory, 
  setActiveCategory,
  isSticky
}) => {
  const tabsRef = useRef<HTMLDivElement>(null);
  const [tabsHeight, setTabsHeight] = React.useState(0);
  
  // Measure tabs height when they render
  useEffect(() => {
    if (tabsRef.current) {
      setTabsHeight(tabsRef.current.offsetHeight);
    }
  }, [categories]); // Remeasure if categories change
  
  return (
    <>
      <div 
        ref={tabsRef}
        className={`cp-project-tabs ${isSticky ? 'sticky' : ''}`}
      >
        {categories.map(category => (
          <button 
            key={category.id}
            className={`cp-tab ${activeCategory === category.id ? 'active' : ''}`}
            onClick={() => setActiveCategory(category.id)}
          >
            {category.name}
            <div className="cp-tab-underline"></div>
          </button>
        ))}
      </div>
      
      {/* Placeholder div to prevent content jump */}
      {isSticky && <div style={{ height: `${tabsHeight}px` }} />}
    </>
  );
};

export default ProjectTabs;