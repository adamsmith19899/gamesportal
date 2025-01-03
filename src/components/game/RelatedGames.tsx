import React from 'react';
import { Game } from '../../types/game';
import { games } from '../../data/games';
import { Link } from 'react-router-dom';

interface RelatedGamesProps {
  currentGame: Game;
}

export function RelatedGames({ currentGame }: RelatedGamesProps) {
  const relatedGames = games
    .filter(game => 
      game.id !== currentGame.id && 
      (game.category === currentGame.category || game.difficulty === currentGame.difficulty)
    )
    .slice(0, 3);

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Similar Games</h3>
      <div className="space-y-4">
        {relatedGames.map(game => (
          <Link
            key={game.id}
            to={`/games/${game.slug}`}
            className="block group"
          >
            <div className="flex items-center space-x-4">
              <img
                src={game.thumbnail}
                alt={game.title}
                className="w-20 h-20 object-cover rounded-lg group-hover:opacity-90 transition-opacity"
              />
              <div>
                <h4 className="font-medium text-gray-900 group-hover:text-indigo-600 transition-colors">
                  {game.title}
                </h4>
                <p className="text-sm text-gray-600 line-clamp-2">{game.description}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}