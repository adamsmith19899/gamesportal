import React from 'react';
import { Game } from '../../types/game';
import { Star } from 'lucide-react';

interface GameDetailsProps {
  game: Game;
}

export function GameDetails({ game }: GameDetailsProps) {
  return (
    <div className="mt-8 bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">About This Game</h2>
      <p className="text-gray-600 mb-6">{game.description}</p>
      
      <div className="border-t pt-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Player Reviews</h3>
        <div className="flex items-center mb-4">
          <div className="flex">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star
                key={star}
                className={`w-5 h-5 ${star <= 4 ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
              />
            ))}
          </div>
          <span className="ml-2 text-sm text-gray-600">(128 reviews)</span>
        </div>
      </div>
    </div>
  );
}