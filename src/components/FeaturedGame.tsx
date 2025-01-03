import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Play, Star, Users } from 'lucide-react';
import { Game } from '../types/game';

interface FeaturedGameProps {
  game: Game;
}

export function FeaturedGame({ game }: FeaturedGameProps) {
  const navigate = useNavigate();

  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-indigo-950 to-purple-900 text-white">
      <div className="absolute inset-0">
        <img
          src={game.thumbnail}
          alt={game.title}
          className="w-full h-full object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/95 via-indigo-950/95 to-purple-900/95" />
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Star className="w-5 h-5 text-amber-400" />
              <span className="text-amber-400 font-medium">Featured Game</span>
            </div>
            <h1 className="text-4xl font-bold mb-4">{game.title}</h1>
            <p className="text-lg text-slate-300 mb-6">{game.description}</p>
            <div className="flex items-center space-x-6 mb-8">
              <div className="flex items-center space-x-2">
                <Users className="w-5 h-5 text-slate-400" />
                <span className="text-slate-300">1.2k playing</span>
              </div>
              <span className="px-3 py-1 rounded-full bg-white/10 text-slate-300">
                {game.category}
              </span>
            </div>
            <button
              onClick={() => navigate(`/games/${game.slug}`)}
              className="inline-flex items-center px-6 py-3 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 text-white font-semibold shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 transition-all duration-200"
            >
              <Play className="w-5 h-5 mr-2" />
              Play Now
            </button>
          </div>
          
          <div className="relative">
            <div className="aspect-video rounded-lg overflow-hidden shadow-2xl ring-1 ring-white/10">
              <img
                src={game.thumbnail}
                alt={game.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-lg" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}