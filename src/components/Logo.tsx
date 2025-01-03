import React from 'react';
import { Brain } from 'lucide-react';
import { Link } from 'react-router-dom';

interface LogoProps {
  size?: 'small' | 'medium' | 'large';
}

export function Logo({ size = 'medium' }: LogoProps) {
  const sizes = {
    small: {
      icon: 'w-6 h-6',
      text: 'text-lg'
    },
    medium: {
      icon: 'w-8 h-8',
      text: 'text-xl'
    },
    large: {
      icon: 'w-10 h-10',
      text: 'text-2xl'
    }
  };

  return (
    <Link to="/" className="flex items-center space-x-2 group shrink-0">
      <div className="relative">
        <Brain 
          className={`${sizes[size].icon} text-indigo-600 transition-transform group-hover:scale-110`}
        />
        <div className="absolute inset-0 bg-indigo-600/20 blur-xl rounded-full animate-pulse" />
      </div>
      <span className={`${sizes[size].text} font-bold text-gray-900 group-hover:text-indigo-600 transition-colors hidden sm:inline-block`}>
        Word Puzzle Games
      </span>
    </Link>
  );
}