import { Game } from '../types/game';

export const specialGames: Game[] = [
  {
    id: 'wordle-H5',
    title: 'Wordle H5',
    description: 'Guess the five-letter word in six tries. Each guess must be a valid word. After each guess, the color of the tiles will change to show how close your guess was to the word.',
    difficulty: 'medium',
    category: 'guessing',
    thumbnail: 'https://images.unsplash.com/photo-1632167764165-74a3d686e9f8?w=800&auto=format&fit=crop&q=60',
    slug: 'wordle',
    url: 'https://wordle1-chi.vercel.app/',
    aspectRatio: '16/13'
  },
  {
    id: 'crossword',
    title: 'Daily Crossword',
    description: 'Challenge yourself with our daily crossword puzzle. Test your knowledge across various topics and expand your vocabulary with engaging clues.',
    difficulty: 'medium',
    category: 'crossword',
    thumbnail: 'https://images.unsplash.com/photo-1577563908411-5077b6dc7624?w=800&auto=format&fit=crop&q=60',
    slug: 'crossword',
    url: 'https://html5.gamemonetize.co/ax7k6j5n1brn3x65u3vfn8v8yj8o1nw5/',
    aspectRatio: '16/9'
  },
  {
    id: 'word-search',
    title: 'Word Search Classic',
    description: 'Find hidden words in a grid of letters. A classic word puzzle game that helps improve concentration and vocabulary.',
    difficulty: 'easy',
    category: 'word-search',
    thumbnail: 'https://images.unsplash.com/photo-1516321497487-e288fb19713f?w=800&auto=format&fit=crop&q=60',
    slug: 'word-search',
    url: 'https://html5.gamemonetize.co/axj12vgc9nqhqi7688f2e7c4d1goaf1x/',
    aspectRatio: '16/9'
  }
];
