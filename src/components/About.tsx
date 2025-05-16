// import { useState } from 'react';
import './About.css';
import '../styles/animations.css';

const About = () => {
  // const [showConsole, setShowConsole] = useState(false);

  // Toggle console ASCII art
  const toggleConsole = () => {
    // setShowConsole(prev => !prev);
  };

  return (
    <section id="about">
      <div className="about-content-wrapper">
        <h1 className="section-title fade-in delay-0">About Me</h1>
        
        <div className="about-grid">
          {/* Profile Photo and Quick Summary */}
          <div className="grid-row fade-in delay-200">
            <div className="grid-cell profile-photo">
              <div className="avatar-circle">
                {/* Placeholder for profile photo - replace with actual image */}
                <div className="avatar-placeholder">OK</div>
              </div>
            </div>
            
            <div className="grid-cell quick-summary">
              <h2>Hi, I'm Oscar!</h2>
              <p>
                I'm a Computer Science student at UC San Diego, passionate about building real-world systems across AI, Cloud, Backend Infrastructure, and Quantitative Applications.
              </p>
              <p>
                My approach blends technical precision with a drive for execution — turning complex ideas into working, impactful products.
              </p>
            </div>
          </div>
          
          {/* Technical Skills and Career Goals */}
          <div className="grid-row fade-in delay-400">
            <div className="grid-cell technical-skills">
              <h2>Technical Skills</h2>
              <div className="skills-container">
                <div className="skill-group">
                  <h3>Backend Development</h3>
                  <div className="skill-tags">
                    <span className="skill-tag">FastAPI</span>
                    <span className="skill-tag">Node.js</span>
                  </div>
                </div>
                
                <div className="skill-group">
                  <h3>Frontend Engineering</h3>
                  <div className="skill-tags">
                    <span className="skill-tag">React</span>
                    <span className="skill-tag">TailwindCSS</span>
                    <span className="skill-tag">Svelte</span>
                  </div>
                </div>
                
                <div className="skill-group">
                  <h3>Database Systems</h3>
                  <div className="skill-tags">
                    <span className="skill-tag">SQL</span>
                    <span className="skill-tag">MongoDB</span>
                    <span className="skill-tag">SQLite</span>
                  </div>
                </div>
                
                <div className="skill-group">
                  <h3>Machine Learning</h3>
                  <div className="skill-tags">
                    <span className="skill-tag">PyTorch</span>
                    <span className="skill-tag">NumPy</span>
                    <span className="skill-tag">Text-to-SQL</span>
                  </div>
                </div>
                
                <div className="skill-group">
                  <h3>Data Science & Analysis</h3>
                  <div className="skill-tags">
                    <span className="skill-tag">EDA</span>
                    <span className="skill-tag">Scikit-learn</span>
                    <span className="skill-tag">Matplotlib</span>
                    <span className="skill-tag">pandas</span>
                  </div>
                </div>
                
                <div className="skill-group">
                  <h3>Cloud & Infrastructure</h3>
                  <div className="skill-tags">
                    <span className="skill-tag">AWS EC2</span>
                    <span className="skill-tag">Lambda</span>
                    <span className="skill-tag">Deployment</span>
                  </div>
                </div>
                
                <div className="skill-group">
                  <h3>Systems & OS</h3>
                  <div className="skill-tags">
                    <span className="skill-tag">Concurrency</span>
                    <span className="skill-tag">Thread Sync</span>
                    <span className="skill-tag">Nachos OS</span>
                  </div>
                </div>
                
                <div className="skill-group">
                  <h3>Financial Technology</h3>
                  <div className="skill-tags">
                    <span className="skill-tag">Quant Finance</span>
                    <span className="skill-tag">N-PORT Data</span>
                    <span className="skill-tag">Algo Trading</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="grid-cell career-goals">
              <h2>Where I'm Headed</h2>
              <p>
                I'm aiming to bridge AI, finance, and systems engineering by developing scalable, intelligent platforms.
              </p>
              <p>
                Currently focused on building my software engineering expertise and preparing for roles in quantitative finance, cloud systems, and backend infrastructure at industry-leading companies.
              </p>
              <p>
                I'm especially drawn to data-intensive applications and infrastructure, and I see myself transitioning into DevOps or systems engineering roles as I deepen my backend and cloud expertise.
              </p>
            </div>
          </div>
          
          {/* Projects Overview and Soft Skills */}
          <div className="grid-row fade-in delay-600">
            <div className="grid-cell projects-overview">
              <div className="projects-header">
                <h2>Select Projects</h2>
                <a href="#portfolio" onClick={(e) => {
                  e.preventDefault();
                  const element = document.getElementById('portfolio');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }} className="view-all-btn">View All Projects</a>
              </div>
              <div className="project-list">
                <div className="mini-project">
                  <h3>Text-to-SQL Generator</h3>
                  <p>Combined two top academic approaches (DIN_SQL, CHASE_SQL) into a practical retrieval-augmented system.</p>
                </div>
                
                <div className="mini-project">
                  <h3>Harmful Algae Bloom Prediction App</h3>
                  <p>Containerized a ML prediction app with Docker and deployed to GCP.</p>
                </div>
                
                <div className="mini-project">
                  <h3>Portfolio Website</h3>
                  <p>Designed a dynamic, interactive personal website — this one!</p>
                </div>
                
                <div className="mini-project">
                  <h3>VTABS Blackjack Agent</h3>
                  <p>Reinforcement learning agent trained via Q-learning to play Vegas Triple Attack Blackjack, optimizing decisions to maximize winnings.</p>
                </div>
              </div>
            </div>
            
            <div className="grid-cell soft-skills">
              <h2>Beyond Code</h2>
              <ul className="soft-skills-list">
                <li>
                  <span className="skill-highlight">Mentorship:</span> Guided students in machine learning and algorithmic trading fundamentals.
                </li>
                <li>
                  <span className="skill-highlight">Organization:</span> Led technical events, coding workshops, and social impact activities.
                </li>
                <li>
                  <span className="skill-highlight">Execution:</span> Translate ideas into action even when conditions aren't perfect.
                </li>
                <li>
                  <span className="skill-highlight">Leadership:</span> Having led complex technical projects with small teams, I've grown confident in my ability to guide others and aspire to eventually take on engineering leadership roles.
                </li>
              </ul>
            </div>
          </div>
          
          {/* Fun Facts and Contact */}
          <div className="grid-row fade-in delay-800">
            <div className="grid-cell fun-facts" onMouseEnter={toggleConsole} onMouseLeave={toggleConsole}>
              <h2>Fun Facts</h2>
              <ul className="fun-facts-list">
                <li>Fan of <span className="highlight">Cyberpunk 2077</span> aesthetics and open-world storytelling.</li>
                <li>Dedicated <span className="highlight">Diet Coke</span> enthusiast.</li>
                <li>Enjoys strategy-based games and complex problem solving.</li>
                <li>Anime appreciator — favorite genres: Sci-Fi, Psychological, Slice of Life.</li>
                <li>I'm rediscovering balance in life — wherever I travel, I now make a point to try local food and appreciate the moment.</li>
                <li>I'm a fan of aesthetic landscapes — both natural scenery and beautifully designed urban environments.</li>
                <li>I enjoy a healthy lifestyle, with <span className="highlight">badminton</span>, basketball, and billiards as my favorite casual sports.</li>
              </ul>
              
              {/* {showConsole && (
                <div className="console-ascii">
                  <pre>
                    {'> Initializing personality module...\n> System check... Complete.'}
                  </pre>
                </div>
              )} */}
            </div>
            
            <div id='contact' className="grid-cell contact-info">
              <h2>Let's Connect</h2>
              <div className="contact-links">
                <a href="https://github.com/oscarkhaing" className="contact-link github">GitHub</a>
                <a href="https://www.linkedin.com/in/oscar-khaing/" className="contact-link linkedin">LinkedIn</a>
                {/* <a href="#" className="contact-link resume">Resume</a>
                <a href="mailto:example@email.com" className="contact-link email">Email Me</a> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 