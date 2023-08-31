import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';

const ScrollReveal = ({ children, direction, delay }) => {
  const controls = useAnimation();
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 300) { // Change this value as needed
      setIsVisible(true);
    }
  };

  useEffect(() => {
    if (isVisible) {
      setTimeout(() => {
        controls.start({ opacity: 1, x: 0, transition: { type: 'spring', stiffness: 500 } });
      }, delay); // Delay before animation starts
    }
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isVisible, controls, delay]);

  const initialStyles = {
    x: direction === 'left' ? 100 : -100,
    opacity: 0,
  };

  return (
    <motion.div
      style={{ display: 'flex', justifyContent: 'center' }}
      initial={initialStyles}
      animate={controls}
      transition={{ duration: 0.6 }}
    >
      {children}
    </motion.div>
  );
};

export default ScrollReveal;
