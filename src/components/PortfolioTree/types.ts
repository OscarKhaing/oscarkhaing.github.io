export interface Project {
    date: string;
    title: string;
    desc: string;
    img: string;
    link: string;
  }
  
  export interface Branch {
    id: string;
    name: string;
    angle: number;
  }
  
  export interface ProjectsData {
    [key: string]: Project[];
  }
  