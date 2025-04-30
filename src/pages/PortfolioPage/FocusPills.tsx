import { motion } from 'framer-motion';
import '../PortfolioPage.css';
import './FocusPills.css';

const FocusPills = () => {
      // Technical focus areas
    let techFocusAreas = [
        'Machine Learning',
        'Cloud Infrastructure',
        'Systems Engineering',
        'Quantitative Research',
        'DevOps Tooling',
        'LLM Applications'
    ];
    
    techFocusAreas = [...techFocusAreas, ...techFocusAreas];
    return (
        // Technical Focus Pills
        <section className="cp-focus-pills">
            <div className="cp-focus-pills-container">
              <div className="cp-focus-pills-portal left" />
              <div className="cp-focus-pills-portal right" />
              <div className="cp-focus-pills-scroll">
                {techFocusAreas.map((focus, index) => (
                  <motion.div 
                    key={`${focus}-${index}`} 
                    className="cp-focus-pill"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.4, delay: 0.1 * index }}
                  >
                    {focus}
                  </motion.div>
                ))}
              </div>
            </div>
        </section>
    );
};
  
export default FocusPills; 