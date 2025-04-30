import { useState } from 'react';
import '../PortfolioPage.css';
import './Footer.css';


// {/* Footer */}

const Footer = () => {

  const [clickedLink, setClickedLink] = useState<string | null>(null);


  // Handle footer link click with red flash effect
  const handleLinkClick = (linkId: string, href: string) => {
    setClickedLink(linkId);
    setTimeout(() => setClickedLink(null), 300);
    
    // If it's not an anchor link, let the default behavior happen
    if (!href.startsWith('#')) return;
    
    // Otherwise handle anchor links manually
    const element = document.getElementById(href.substring(1));
    if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
    }
  };




  return (
    <footer className="cp-footer">
      <div className="cp-footer-content">
        <div className="cp-footer-links">
          <a 
          href="https://github.com" 
          className={`cp-footer-link ${clickedLink === 'github' ? 'clicked' : ''}`}
          onClick={() => handleLinkClick('github', 'https://github.com')}
          >
          Github
          </a>
          <a 
          href="#" 
          className={`cp-footer-link ${clickedLink === 'resume' ? 'clicked' : ''}`}
          onClick={() => handleLinkClick('resume', '#')}
          >
          Resume
          </a>
          <a 
          href="mailto:example@email.com" 
          className={`cp-footer-link ${clickedLink === 'email' ? 'clicked' : ''}`}
          onClick={() => handleLinkClick('email', 'mailto:example@email.com')}
          >
          Email
          </a>
          <a 
          href="/" 
          className={`cp-footer-link ${clickedLink === 'home' ? 'clicked' : ''}`}
          onClick={() => handleLinkClick('home', '/')}
          >
          Back to Home
          </a>
        </div>
        
        <div className="cp-footer-glyphs">
            <div className="cp-glyph"></div>
            <div className="cp-glyph"></div>
            <div className="cp-glyph"></div>
        </div>
      </div>
    </footer>

  )
};

export default Footer;  