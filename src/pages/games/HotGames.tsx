import React from 'react';
import { GameGrid } from '../../components/GameGrid';
import { hotGames } from '../../data/hotGames';
import { games } from '../../data/games';
import { shuffleArray } from '../../utils/array';

export function HotGames() {
  // Combine hot games with some regular games to reach 20 total
  const allHotGames = React.useMemo(() => {
    const remainingCount = 20 - hotGames.length;
    const additionalGames = shuffleArray(games)
      .filter(game => !hotGames.find(g => g.id === game.id))
      .slice(0, remainingCount);
    
    return [...hotGames, ...additionalGames];
  }, []);

  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Hot Games</h1>
          <p className="text-lg text-gray-600">
            Our most popular word puzzles that players can't get enough of!
          </p>
        </div>
        <GameGrid
          games={allHotGames}
          completedGames={[]}
        />
      </div>
    </div>
  );
}