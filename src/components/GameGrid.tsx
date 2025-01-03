import React from 'react';
import { GameCard } from './GameCard';
import { Game } from '../types/game';

interface GameGridProps {
  games: Game[];
  completedGames: string[];
}

export function GameGrid({ games, completedGames }: GameGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-6">
      {games.map((game) => (
        <GameCard
          key={game.id}
          game={game}
          completed={completedGames.includes(game.id)}
        />
      ))}
    </div>
  );
}