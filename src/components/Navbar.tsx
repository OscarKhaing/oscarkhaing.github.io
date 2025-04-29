import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import '../styles/Navbar.css';
import '../styles/animations.css';

/**
 * Navigation bar component with scroll behavior
 */
const Navbar = () => {
  const [scrolled, setScrolled] = useState<boolean>(false);
  const location = useLocation();
  const navigate = useNavigate();
  const navRef = useRef<HTMLElement>(null);
  
  // Change navbar transparency on scroll
  useEffect(() => {
    const handleScroll = () => {
      const navHeight = navRef.current?.offsetHeight ?? 0;
      const isScrolled = window.scrollY > navHeight;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    // Clean up event listener
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  // Update CSS variable for navbar height to offset hero section
  useEffect(() => {
    const navHeight = navRef.current?.offsetHeight ?? 0;
    document.documentElement.style.setProperty('--navbar-height', `${navHeight}px`);
  }, [scrolled]);

  // Smooth scroll function
  const scrollToSection = (sectionId: string): void => {
    // If we're not on the homepage, navigate there first
    if (location.pathname !== '/') {
      navigate('/');
      // Use setTimeout to wait for navigation to complete
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      // If we're already on the homepage, just scroll
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  // Navigation items for all pages
  const navItems = ['Home', 'About', 'Contact'];
  
  return (
    <motion.nav
      ref={navRef}
      className={`navbar ${scrolled ? 'navbar-scrolled' : 'navbar-transparent'}`}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="navbar-container">
        {/* Logo/Name */}
        <Link to="/">
          <motion.div 
            className="navbar-logo"
            whileHover={{ scale: 1.05 }}
            style={{ cursor: 'pointer' }}
          >
            Oscar Khaing
          </motion.div>
        </Link>

        {/* Navigation Links */}
        <div className="navbar-links">
          {/* Page Navigation */}
          {/* <Link to="/projects">
            <motion.button
              className="navbar-link"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              Project Tree
            </motion.button>
          </Link> */}

          {/* Section Navigation - on all pages */}
          {navItems.map((item) => (
            <motion.button
              key={item}
              onClick={() => scrollToSection(item.toLowerCase())}
              className="navbar-link"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              {item}
            </motion.button>
          ))}
          <motion.button
            onClick={() => navigate('/portfolio')}
            className="navbar-link"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            Portfolio
          </motion.button>
          <motion.button
            onClick={() => navigate('/portfolio-tree')}
            className="navbar-link cyberpunk-tree-link"
            whileHover={{ 
              scale: 1.1,
              textShadow: "0 0 8px #ff003c, 0 0 12px #60FFFF"
            }}
            whileTap={{ scale: 0.95 }}
          >
            Cool Tree
          </motion.button>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;