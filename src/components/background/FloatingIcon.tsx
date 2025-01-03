import React from 'react';
import { LucideIcon } from 'lucide-react';
import { motion } from 'framer-motion';

interface FloatingIconProps {
  Icon: LucideIcon;
  color: string;
  delay: number;
  duration: number;
  x: number;
  y: number;
}

export function FloatingIcon({ Icon, color, delay, duration, x, y }: FloatingIconProps) {
  return (
    <motion.div
      className={`absolute text-${color}-500/10`}
      style={{
        left: `${x}%`,
        top: `${y}%`,
      }}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ 
        opacity: 0.5,
        scale: 1,
        y: [0, -20, 15, 0],
        rotate: [0, 10, -8, 0],
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut"
      }}
    >
      <Icon size={48} />
    </motion.div>
  );
}