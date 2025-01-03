import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Game } from '../types/game';
import { Trophy } from 'lucide-react';

interface GameCardProps {
  game: Game;
  completed?: boolean;
}

export function GameCard({ game, completed }: GameCardProps) {
  const navigate = useNavigate();

  return (
    <div 
      onClick={() => navigate(`/games/${game.slug}`)}
      className="group relative bg-white rounded-lg shadow-md overflow-hidden cursor-pointer transform transition-all hover:scale-105"
    >
      <div className="aspect-video w-full overflow-hidden">
        <img 
          src={game.thumbnail} 
          alt={game.title}
          className="w-full h-full object-cover group-hover:opacity-90 transition-opacity"
        />
      </div>
      {completed && (
        <div className="absolute top-2 right-2 bg-green-500 rounded-full p-1">
          <Trophy className="w-4 h-4 text-white" />
        </div>
      )}
      <div className="p-4">
        <h3 className="font-bold text-lg mb-1">{game.title}</h3>
        <p className="text-gray-600 text-sm mb-2">{game.description}</p>
        <div className="flex items-center justify-between">
          <span className={`px-2 py-1 rounded-full text-xs ${
            game.difficulty === 'easy' ? 'bg-green-100 text-green-800' :
            game.difficulty === 'medium' ? 'bg-yellow-100 text-yellow-800' :
            'bg-red-100 text-red-800'
          }`}>
            {game.difficulty}
          </span>
          <span className="text-xs text-gray-500">{game.category}</span>
        </div>
      </div>
    </div>
  );
}