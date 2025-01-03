import React from 'react';
import { GameGrid } from '../GameGrid';
import { newGames } from '../../data/newGames';
import { shuffleArray } from '../../utils/array';

export function NewGamesSection() {
  // Shuffle and limit to 20 games
  const shuffledNewGames = React.useMemo(() => {
    return shuffleArray(newGames).slice(0, 20);
  }, []);

  return (
    <section className="py-12 bg-gradient-to-br from-indigo-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">New Releases</h2>
          <p className="text-lg text-gray-600">
            Check out our latest word puzzle games and challenge yourself with new adventures
          </p>
        </div>
        <GameGrid games={shuffledNewGames} completedGames={[]} />
      </div>
    </section>
  );
}