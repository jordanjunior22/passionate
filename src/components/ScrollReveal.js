import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';

const ScrollReveal = ({ children }) => {
  const controls = useAnimation();
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 300) { // Change this value as needed
      setIsVisible(true);
    }
  };

  useEffect(() => {
    controls.start({ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 });
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isVisible, controls]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={controls}
      transition={{ duration: 0.6 }}
    >
      {children}
    </motion.div>
  );
};

export default ScrollReveal;
