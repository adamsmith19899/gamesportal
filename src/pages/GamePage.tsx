import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { GameLayout } from '../components/game/GameLayout';
import { games } from '../data/games';

export function GamePage() {
  const { slug } = useParams();
  const game = games.find(g => g.slug === slug);
  
  if (!game) {
    return <Navigate to="/" replace />;
  }

  return <GameLayout game={game} />;
}