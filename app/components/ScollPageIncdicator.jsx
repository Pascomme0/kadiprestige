"use client"

import React, { useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

const ScrollPageIndicator = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <motion.div 
      className="fixed top-0 left-0 right-0 h-2 bg-gray-200 z-50"
      initial={{ scaleX: 0 }}
      style={{ 
        transformOrigin: "0%",
        scaleX: scaleX
      }}
    >
      <motion.div
        className="h-full bg-blue-500"
      />
    </motion.div>
  );
};

export default ScrollPageIndicator;
