import React from 'react';
import { GameGrid } from '../../components/GameGrid';
import { newGames } from '../../data/newGames';

export function NewGames() {
  // Take the first 20 new games
  const displayedGames = newGames.slice(0, 20);

  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">New Games</h1>
          <p className="text-lg text-gray-600">
            Check out our latest word puzzle games and challenge yourself with new adventures!
          </p>
        </div>
        <GameGrid
          games={displayedGames}
          completedGames={[]}
        />
      </div>
    </div>
  );
}