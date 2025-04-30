import './FuturePlans.css';
import { useState } from 'react';
import { motion } from 'framer-motion';

// Future plans data
const futurePlans = [
  {
    title: 'DevOps Automation',
    description: 'Building comprehensive CI/CD pipelines and infrastructure as code'
  },
  {
    title: 'GPU Cluster Optimization',
    description: 'Optimizing distributed training for ML models across GPU clusters'
  },
  {
    title: 'Systems & Observability',
    description: 'Creating advanced monitoring and observability tools for complex systems'
  },
  {
    title: 'Team Scaling',
    description: 'Leading engineering teams and mentoring junior developers'
  },
];

const FuturePlans = () => {


    const [showFuturePlans, setShowFuturePlans] = useState(false);

    return (
        <section className="cp-future-plans">
        <div className="cp-future-header" onClick={() => setShowFuturePlans(!showFuturePlans)}>
          <h2 className="cp-section-title">What's Next?</h2>
          <div className={`cp-expand-icon ${showFuturePlans ? 'expanded' : ''}`}>+</div>
        </div>
        
        {showFuturePlans && (
          <motion.div 
            className="cp-future-content"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            transition={{ duration: 0.4 }}
          >
            <div className="cp-future-grid">
              {futurePlans.map((plan, index) => (
                <div key={index} className="cp-future-card">
                  <h3 className="cp-future-title">{plan.title}</h3>
                  <p className="cp-future-description">{plan.description}</p>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </section>
    );
};

export default FuturePlans;



