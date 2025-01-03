import React from 'react';
import { Game } from '../../types/game';
import { GameHeader } from './GameHeader';
import { GameFrame } from './GameFrame';
import { GameDetails } from './GameDetails';
import { GameSocial } from './GameSocial';
import { RelatedGames } from './RelatedGames';
import { AdUnit } from '../ads/AdUnit';

interface GamePageProps {
  game: Game;
}

export function GamePage({ game }: GamePageProps) {
  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <GameHeader game={game} />
        
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <GameFrame game={game} />
            <AdUnit slot="1234567890" style={{ marginTop: '2rem' }} />
            <GameDetails game={game} />
          </div>
          
          <div className="space-y-8">
            <GameSocial game={game} />
            <RelatedGames currentGame={game} />
            <AdUnit slot="9876543210" />
          </div>
        </div>
      </div>
    </div>
  );
}