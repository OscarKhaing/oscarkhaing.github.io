// src/pages/PortfolioPage/types
export type CategoryId = 'machine-learning' | 'cloud-computing' | 'systems' | 'software' | 'quant' | 'all';

export interface Category {
  id: CategoryId;
  name: string;
}

export interface Technology {
  id: string;
  name: string;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  category: CategoryId;
  featured?: boolean;
  technologies: Technology[];
  projectUrl: string;
}