import React from 'react';
import { motion } from 'framer-motion';

interface FooterLinkProps {
  href: string;
  children: React.ReactNode;
  onClick?: (e: React.MouseEvent) => void;
}

export function FooterLink({ href, children, onClick }: FooterLinkProps) {
  return (
    <motion.a
      href={href}
      onClick={onClick}
      className="text-gray-600 hover:text-gray-900 transition-colors duration-200 block"
      whileHover={{ x: 4 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      {children}
    </motion.a>
  );
}