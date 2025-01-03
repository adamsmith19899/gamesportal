import React from 'react';
import { Link } from 'react-router-dom';
import { LucideIcon } from 'lucide-react';
import { motion } from 'framer-motion';

interface NavLinkProps {
  to: string;
  icon: LucideIcon;
  color: string;
  children: React.ReactNode;
  onClick?: () => void;
  isMobile?: boolean;
}

export function NavLink({ 
  to, 
  icon: Icon, 
  color, 
  children, 
  onClick,
  isMobile 
}: NavLinkProps) {
  return (
    <Link
      to={to}
      onClick={onClick}
      className={`group relative ${isMobile ? 'block' : ''}`}
    >
      <motion.div 
        className={`flex items-center gap-2 ${
          isMobile ? 'text-gray-900 py-2' : 'text-gray-900'
        }`}
        whileHover={isMobile ? { x: 4 } : undefined}
      >
        <div className={`p-1.5 rounded-lg ${color} bg-opacity-10 group-hover:bg-opacity-20 transition-all`}>
          <Icon className="w-4 h-4" />
        </div>
        <span>{children}</span>
      </motion.div>
      {!isMobile && (
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-0.5 bg-current transform origin-left"
          initial={{ scaleX: 0 }}
          whileHover={{ scaleX: 1 }}
          transition={{ duration: 0.2 }}
        />
      )}
    </Link>
  );
}