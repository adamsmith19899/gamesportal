import React from 'react';
import { GameGrid } from '../GameGrid';
import { games } from '../../data/games';
import { shuffleArray } from '../../utils/array';

export function GamesSection() {
  // Shuffle and limit to 20 games
  const shuffledGames = React.useMemo(() => {
    return shuffleArray(games).slice(0, 20);
  }, []);

  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Featured Games</h2>
        <GameGrid games={shuffledGames} completedGames={[]} />
      </div>
    </section>
  );
}