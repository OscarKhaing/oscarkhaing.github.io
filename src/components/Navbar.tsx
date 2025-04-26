import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import '../styles/Navbar.css';
import '../styles/animations.css';

/**
 * Navigation bar component with scroll behavior
 */
const Navbar = () => {
  const [scrolled, setScrolled] = useState<boolean>(false);
  
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
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Navigation items
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
        <motion.div 
          className="navbar-logo"
          whileHover={{ scale: 1.05 }}
        >
          Oscar Khaing
        </motion.div>

        {/* Navigation Links */}
        <div className="navbar-links">
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