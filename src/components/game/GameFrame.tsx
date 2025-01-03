import React, { useState } from 'react';
import { Game } from '../../types/game';
import { Maximize2, Minimize2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface GameFrameProps {
  game: Game;
}

export function GameFrame({ game }: GameFrameProps) {
  const [isFullscreen, setIsFullscreen] = useState(false);

  const frameStyle = {
    aspectRatio: game.aspectRatio || '16/9',
    width: '100%',
    maxWidth: '100%',
    height: 'auto',
  };

  return (
    <div className="relative bg-white rounded-lg shadow-lg overflow-hidden">
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsFullscreen(!isFullscreen)}
        className="absolute top-4 right-4 z-10 p-2 bg-white/90 rounded-full shadow-md hover:bg-white transition-colors"
      >
        {isFullscreen ? (
          <Minimize2 className="w-5 h-5 text-gray-600" />
        ) : (
          <Maximize2 className="w-5 h-5 text-gray-600" />
        )}
      </motion.button>
      
      <AnimatePresence>
        {isFullscreen ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="fixed inset-0 z-50 bg-black flex items-center justify-center p-4"
          >
            <iframe
              src={game.url}
              title={game.title}
              className="w-full h-full"
              style={frameStyle}
              scrolling="no"
              frameBorder="0"
              allowFullScreen
            />
          </motion.div>
        ) : (
          <div className="relative w-full">
            <div className="w-full" style={frameStyle}>
              <iframe
                src={game.url}
                title={game.title}
                className="absolute inset-0 w-full h-full"
                scrolling="no"
                frameBorder="0"
              />
            </div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}