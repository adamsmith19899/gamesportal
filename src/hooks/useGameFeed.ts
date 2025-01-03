import { useState, useEffect } from 'react';
import { Game } from '../types/game';
import { fetchGameFeed } from '../services/gameFeed';

export function useGameFeed(feedUrl: string) {
  const [games, setGames] = useState<Game[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function loadGames() {
      try {
        setLoading(true);
        setError(null);
        const feedGames = await fetchGameFeed(feedUrl);
        setGames(feedGames);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load games');
      } finally {
        setLoading(false);
      }
    }

    loadGames();
  }, [feedUrl]);

  return { games, loading, error };
}