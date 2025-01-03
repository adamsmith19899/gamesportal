import React from 'react';
import { Layout } from '../components/Layout';
import { HomePage } from '../pages/HomePage';
import { NewGames } from '../pages/games/NewGames';
import { HotGames } from '../pages/games/HotGames';
import { GamePage } from '../pages/GamePage';
import { Wordle } from '../pages/games/Wordle';
import { Crossword } from '../pages/games/Crossword';
import { MemoryMatch } from '../pages/games/MemoryMatch';
import { About } from '../pages/About';
import { Contact } from '../pages/Contact';
import { Privacy } from '../pages/Privacy';
import { Terms } from '../pages/Terms';
import { DMCA } from '../pages/DMCA';

export const routes = [
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'new-games', element: <NewGames /> },
      { path: 'hot-games', element: <HotGames /> },
      { path: 'games/:slug', element: <GamePage /> },
      { path: 'wordle', element: <Wordle /> },
      { path: 'crossword', element: <Crossword /> },
      { path: 'memory-match', element: <MemoryMatch /> },
      { path: 'about', element: <About /> },
      { path: 'contact', element: <Contact /> },
      { path: 'privacy', element: <Privacy /> },
      { path: 'terms', element: <Terms /> },
      { path: 'dmca', element: <DMCA /> },
    ],
  },
];