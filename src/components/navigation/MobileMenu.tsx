import React from 'react';
import { motion } from 'framer-motion';
import { NavLink } from './NavLink';
import { LucideIcon } from 'lucide-react';

interface MenuItem {
  to: string;
  icon: LucideIcon;
  label: string;
  color: string;
}

interface MobileMenuProps {
  items: MenuItem[];
  onClose: () => void;
}

export function MobileMenu({ items, onClose }: MobileMenuProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 md:hidden"
    >
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        exit={{ opacity: 0 }}
        className="absolute inset-0 bg-black"
        onClick={onClose}
      />

      {/* Menu Content */}
      <motion.nav
        initial={{ x: '100%' }}
        animate={{ x: 0 }}
        exit={{ x: '100%' }}
        transition={{ type: 'tween', duration: 0.3 }}
        className="absolute right-0 top-0 bottom-0 w-64 bg-white shadow-xl"
      >
        <div className="pt-20 px-6 pb-6 space-y-4">
          {items.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              icon={item.icon}
              color={item.color}
              onClick={onClose}
              isMobile
            >
              {item.label}
            </NavLink>
          ))}
        </div>
      </motion.nav>
    </motion.div>
  );
}