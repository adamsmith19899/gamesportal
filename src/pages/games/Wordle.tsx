import React from 'react';
import { Navigate } from 'react-router-dom';
import { specialGames } from '../../data/specialGames';
import { GameLayout } from '../../components/game/GameLayout';

export function Wordle() {
  const game = specialGames.find(g => g.slug === 'wordle');
  
  if (!game) {
    return <Navigate to="/" replace />;
  }

  return <GameLayout game={game} />;
}