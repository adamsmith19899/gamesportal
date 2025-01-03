import React from 'react';
import { Github, Twitter, Heart } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FooterSection } from './FooterSection';
import { FooterLink } from './FooterLink';
import { Logo } from '../Logo';

export function Footer() {
  const navigate = useNavigate();

  const handleNavigation = (path: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    navigate(path);
  };

  return (
    <footer className="relative mt-auto">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50/90 to-gray-100/90 backdrop-blur-lg -z-10" />
      <div className="absolute inset-0 bg-grid-pattern opacity-5 -z-10" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {/* Brand Section */}
          <div className="space-y-4">
            <Logo size="small" />
            <p className="text-sm text-gray-600">
              Enhance your vocabulary and cognitive skills with our collection of engaging word puzzles.
            </p>
            <div className="flex gap-4">
              <motion.a
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
                href="https://twitter.com"
                className="p-2 bg-gray-100 rounded-lg hover:bg-gray-200 text-gray-600 transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
                href="https://github.com"
                className="p-2 bg-gray-100 rounded-lg hover:bg-gray-200 text-gray-600 transition-colors"
              >
                <Github className="w-5 h-5" />
              </motion.a>
            </div>
          </div>

          {/* Games Section */}
          <FooterSection title="Games">
            <li><FooterLink href="/new-games" onClick={handleNavigation('/new-games')}>New Games</FooterLink></li>
            <li><FooterLink href="/hot-games" onClick={handleNavigation('/hot-games')}>Hot Games</FooterLink></li>
            <li><FooterLink href="/wordle" onClick={handleNavigation('/wordle')}>Wordle</FooterLink></li>
            <li><FooterLink href="/crossword" onClick={handleNavigation('/crossword')}>Crossword</FooterLink></li>
          </FooterSection>

          {/* Company Section */}
          <FooterSection title="Company">
            <li><FooterLink href="/about" onClick={handleNavigation('/about')}>About Us</FooterLink></li>
            <li><FooterLink href="/contact" onClick={handleNavigation('/contact')}>Contact</FooterLink></li>
            <li><FooterLink href="/privacy" onClick={handleNavigation('/privacy')}>Privacy Policy</FooterLink></li>
            <li><FooterLink href="/terms" onClick={handleNavigation('/terms')}>Terms of Service</FooterLink></li>
            <li><FooterLink href="/dmca" onClick={handleNavigation('/dmca')}>DMCA</FooterLink></li>
          </FooterSection>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-12 pt-8 border-t border-gray-200 text-center text-sm text-gray-600"
        >
          <p className="flex items-center justify-center gap-2">
            Made with <Heart className="w-4 h-4 text-red-400" /> by Word Puzzle Games
          </p>
          <p className="mt-2">&copy; {new Date().getFullYear()} Word Puzzle Games. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
}