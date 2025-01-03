import React from 'react';
import { Game } from '../../types/game';
import { Trophy, Clock, Users } from 'lucide-react';

interface GameHeaderProps {
  game: Game;
}

export function GameHeader({ game }: GameHeaderProps) {
  return (
    <div className="space-y-4">
      <h1 className="text-4xl font-bold text-gray-900">{game.title}</h1>
      <div className="flex items-center space-x-6">
        <div className="flex items-center text-gray-600">
          <Trophy className="w-5 h-5 mr-2" />
          <span>1.2k completed</span>
        </div>
        <div className="flex items-center text-gray-600">
          <Clock className="w-5 h-5 mr-2" />
          <span>5-10 min</span>
        </div>
        <div className="flex items-center text-gray-600">
          <Users className="w-5 h-5 mr-2" />
          <span>238 playing</span>
        </div>
        <span className={`px-3 py-1 rounded-full text-sm font-medium ${
          game.difficulty === 'easy' ? 'bg-green-100 text-green-800' :
          game.difficulty === 'medium' ? 'bg-yellow-100 text-yellow-800' :
          'bg-red-100 text-red-800'
        }`}>
          {game.difficulty}
        </span>
      </div>
    </div>
  );
}