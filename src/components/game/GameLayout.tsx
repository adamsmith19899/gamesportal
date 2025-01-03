import React from 'react';
import { Game } from '../../types/game';
import { GameHeader } from './GameHeader';
import { GameFrame } from './GameFrame';
import { GameDetails } from './GameDetails';
import { GameSocial } from './GameSocial';
import { RelatedGames } from './RelatedGames';
import { GameCategories } from './GameCategories';
import { PopularGames } from './PopularGames';
import { AdUnit } from '../ads/AdUnit';
import { categories } from '../../data/categories';
import { hotGames } from '../../data/hotGames';

interface GameLayoutProps {
  game: Game;
}

export function GameLayout({ game }: GameLayoutProps) {
  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <GameHeader game={game} />
        
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            <GameFrame game={game} />
            <AdUnit slot="1234567890" />
            <GameDetails game={game} />
            <GameCategories 
              categories={categories} 
              currentCategory={game.category} 
            />
          </div>
          
          {/* Sidebar */}
          <div className="space-y-8">
            <GameSocial game={game} />
            <RelatedGames currentGame={game} />
            <PopularGames games={hotGames.slice(0, 5)} />
            <AdUnit slot="9876543210" />
          </div>
        </div>
      </div>
    </div>
  );
}