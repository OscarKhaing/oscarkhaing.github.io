import '../../styles/Hero.css';
import '../../styles/animations.css';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const navigate = useNavigate();
  
  // Navigate to portfolio page
  const goToPortfolio = (): void => {
    navigate('/portfolio');
  };

  return (
    <section id="hero">
      <div className="hero-content-wrapper">
        <h1 className="fade-in delay-0">
          Oscar Khaing
        </h1>
        <div className="title-divider"></div>

        <div className="flex items-center fade-in delay-200">
          <h2 className="subtitle">
            Applied AI Developer · Full-Stack Engineer · Systems Thinker
          </h2>
        </div>
        
        <div className="tagline-box fade-in delay-400">
          <p className="tagline-primary">
            Always building with two dozen Diet Cokes, precise calibration, architectural foresight, and a rubber ducky.
          </p>
          <p className="tagline-secondary">
            I work across applied AI, cloud infrastructure, and full-stack development to deliver end-to-end solutions.
          </p>
        </div>
        
        <div className="cta-container fade-in delay-600">
          <button 
            className="cta-button"
            onClick={goToPortfolio}
          >
            Explore My Work
          </button>
          <div className="social-icon">
            <span>GH</span>
          </div>
          <div className="social-icon">
            <span>LI</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 