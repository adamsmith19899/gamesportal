import React from 'react';
import { useGameFeed } from '../../hooks/useGameFeed';
import { GameGrid } from '../GameGrid';
import { Loader } from 'lucide-react';

interface FeedGamesProps {
  feedUrl: string;
  title: string;
  description?: string;
}

export function FeedGames({ feedUrl, title, description }: FeedGamesProps) {
  const { games, loading, error } = useGameFeed(feedUrl);

  if (loading) {
    return (
      <div className="flex items-center justify-center py-12">
        <Loader className="w-8 h-8 text-indigo-600 animate-spin" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-12">
        <p className="text-red-600">Failed to load games: {error}</p>
      </div>
    );
  }

  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">{title}</h2>
          {description && (
            <p className="text-lg text-gray-600">{description}</p>
          )}
        </div>
        <GameGrid games={games} completedGames={[]} />
      </div>
    </div>
  );
}