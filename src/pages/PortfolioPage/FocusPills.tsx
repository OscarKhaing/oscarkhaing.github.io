import { motion } from 'framer-motion';
import '../PortfolioPage.css';
import './FocusPills.css';

const FocusPills = () => {
      // Technical focus areas
    const techFocusAreas = [
        'Machine Learning',
        'Cloud Infrastructure',
        'Systems Engineering',
        'Quantitative Research',
        'DevOps Tooling',
        'LLM Applications'
    ];
    return (
        // Technical Focus Pills
        <section className="cp-focus-pills">
            <div className="cp-focus-pills-container">
            {techFocusAreas.map((focus, index) => (
                <motion.div 
                key={index} 
                className="cp-focus-pill"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.1 * index }}
                whileHover={{ 
                    scale: 1.05, 
                    boxShadow: '0 0 15px rgba(255, 240, 0, 0.7)' 
                }}
                >
                {focus}
                </motion.div>
            ))}
            </div>
        </section>
    );
};
  
export default FocusPills; 