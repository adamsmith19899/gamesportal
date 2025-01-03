import React, { useState } from 'react';
import { Puzzle } from 'lucide-react';
import { motion, useSpring } from 'framer-motion';

export function MouseFollower() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  
  // Create smooth spring animations for x and y coordinates
  const springConfig = { damping: 25, stiffness: 200 };
  const x = useSpring(0, springConfig);
  const y = useSpring(0, springConfig);

  React.useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
      // Update spring animations
      x.set(e.clientX - 12);
      y.set(e.clientY - 12);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [x, y]);

  return (
    <motion.div 
      className="fixed pointer-events-none z-50"
      style={{ x, y }}
    >
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.6 }}
        transition={{ duration: 0.2 }}
      >
        <Puzzle className="w-6 h-6 text-indigo-600" />
      </motion.div>
    </motion.div>
  );
}