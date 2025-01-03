import { ROUTES } from '../routes/paths';

export const getGamePath = (slug: string): string => {
  return ROUTES.GAME.replace(':slug', slug);
};

export const isGamePath = (path: string): boolean => {
  return path.startsWith('/games/');
};