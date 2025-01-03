export interface Game {
  id: string;
  title: string;
  description: string;
  difficulty: 'easy' | 'medium' | 'hard';
  category: string;
  thumbnail: string;
  slug: string;
  url?: string;
  aspectRatio?: string;
}