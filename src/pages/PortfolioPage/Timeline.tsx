import '../PortfolioPage.css';
import './Timeline.css';



interface TimelineItem {
  year: string;
  title: string;
  description: string;
}


// Timeline data
const timelineData: TimelineItem[] = [
  {
    year: '2021',
    title: 'First ML Projects',
    description: 'Began exploring machine learning with PyTorch and TensorFlow'
  },
  {
    year: '2022',
    title: 'Backend & API',
    description: 'Built robust API infrastructure with FastAPI and deployed to cloud'
  },
  {
    year: '2023',
    title: 'Full-Stack & LLMs',
    description: 'Integrated frontend and backend systems, explored LLM applications'
  },
  {
    year: '2024',
    title: 'Cloud & Quant',
    description: 'Focused on cloud infrastructure and quantitative trading systems'
  },
  {
    year: '2025',
    title: 'DevOps & Optimization',
    description: 'Planning: advanced DevOps pipelines and system optimization'
  },
];

const Timeline = () => {



  
  return (
      
    <section className="cp-timeline">
    <h2 className="cp-section-title">Development Journey</h2>
    
    <div className="cp-timeline-container">
      {timelineData.map((item, index) => (
        <div key={index} className="cp-timeline-item">
          <div className="cp-timeline-dot"></div>
          <div className="cp-timeline-content">
            <div className="cp-timeline-year">{item.year}</div>
            <h3 className="cp-timeline-title">{item.title}</h3>
            <p className="cp-timeline-description">{item.description}</p>
          </div>
        </div>
      ))}
      <div className="cp-timeline-line"></div>
    </div>
    </section>
  )
}

export default Timeline;