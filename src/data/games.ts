import { Game } from '../types/game';
import { hotGames } from './hotGames';
import { newGames } from './newGames';
import { additionalGames } from './additionalGames';
import { specialGames } from './specialGames';

// Combine all game collections
export const games: Game[] = [
  ...specialGames,
  ...hotGames,
  ...newGames,
  ...additionalGames
];