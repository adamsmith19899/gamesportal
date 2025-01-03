import React, { useState, useEffect } from 'react';
import { Search, Menu, X, Sparkles, Flame, Target, Grid3X3 } from 'lucide-react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { NavLink } from './navigation/NavLink';
import { Logo } from './Logo';
import { MobileMenu } from './navigation/MobileMenu';

interface HeaderProps {
  onSearch?: (query: string) => void;
}

export function Header({ onSearch }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  
  const headerBg = useTransform(
    scrollY,
    [0, 100],
    ['rgba(255, 255, 255, 0)', 'rgba(255, 255, 255, 0.8)']
  );

  const backdropBlur = useTransform(
    scrollY,
    [0, 100],
    ['blur(0px)', 'blur(8px)']
  );

  const navItems = [
    { to: '/new-games', icon: Sparkles, label: 'New Games', color: 'bg-purple-500' },
    { to: '/hot-games', icon: Flame, label: 'Hot Games', color: 'bg-red-500' },
    { to: '/wordle', icon: Target, label: 'Wordle', color: 'bg-green-500' },
    { to: '/crossword', icon: Grid3X3, label: 'Crossword', color: 'bg-blue-500' },
  ];

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  return (
    <>
      <motion.header
        className="fixed top-0 left-0 right-0 z-40 h-16"
        style={{
          backgroundColor: headerBg,
          backdropFilter: backdropBlur,
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
          <div className="flex items-center justify-between h-full">
            <Logo size="small" />

            <nav className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  icon={item.icon}
                  color={item.color}
                >
                  {item.label}
                </NavLink>
              ))}
            </nav>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-white/10"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6 text-gray-900" />
              ) : (
                <Menu className="w-6 h-6 text-gray-900" />
              )}
            </motion.button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {isMenuOpen && (
          <MobileMenu 
            items={navItems}
            onClose={() => setIsMenuOpen(false)}
          />
        )}
      </AnimatePresence>
    </>
  );
}