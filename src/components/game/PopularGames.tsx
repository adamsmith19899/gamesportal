import React from 'react';
import { Link } from 'react-router-dom';
import { Game } from '../../types/game';
import { Trophy } from 'lucide-react';

interface PopularGamesProps {
  games: Game[];
}

export function PopularGames({ games }: PopularGamesProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex items-center gap-2 mb-4">
        <Trophy className="w-5 h-5 text-yellow-500" />
        <h3 className="text-lg font-semibold text-gray-900">Popular Games</h3>
      </div>
      <div className="space-y-4">
        {games.map((game) => (
          <Link
            key={game.id}
            to={`/games/${game.slug}`}
            className="flex items-center gap-3 group"
          >
            <img
              src={game.thumbnail}
              alt={game.title}
              className="w-16 h-16 object-cover rounded-lg group-hover:opacity-90 transition-opacity"
            />
            <div>
              <h4 className="font-medium text-gray-900 group-hover:text-indigo-600 transition-colors">
                {game.title}
              </h4>
              <p className="text-sm text-gray-500">{game.category}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}