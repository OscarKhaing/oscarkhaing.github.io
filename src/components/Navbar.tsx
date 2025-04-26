import { useState, useEffect } from 'react';
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
  
  // Change navbar transparency on scroll
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
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
  const navItems = ['Home', 'Portfolio', 'Contact'];

  return (
    <motion.nav
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
          <Link to="/projects">
            <motion.button
              className="navbar-link"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              Project Tree
            </motion.button>
          </Link>

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
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;