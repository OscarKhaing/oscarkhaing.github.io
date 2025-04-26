import '../styles/Hero.css';
import '../styles/animations.css';

const Hero = () => {
  return (
    <section id="hero">
      <h1 className="fade-in delay-0">
        Oscar Khaing
      </h1>
      
      <div className="flex items-center mt-4 fade-in delay-200">
        <div className="title-divider"></div>
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
        <button className="cta-button">
          Explore My Work
        </button>
        <div className="social-icon">
          <span>GH</span>
        </div>
        <div className="social-icon">
          <span>LI</span>
        </div>
      </div>
    </section>
  );
};

export default Hero; 