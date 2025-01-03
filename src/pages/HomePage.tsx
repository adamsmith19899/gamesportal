import React from 'react';
import { FeaturedGame } from '../components/FeaturedGame';
import { GamesSection } from '../components/sections/GamesSection';
import { NewGamesSection } from '../components/sections/NewGamesSection';
import { ParagraphSection } from '../components/content/ParagraphSection';
import { TextSection } from '../components/content/TextSection';
import { FloatingIcons } from '../components/FloatingIcons';
import { games } from '../data/games';

export function HomePage() {
  return (
    <>
      <FloatingIcons />
      <FeaturedGame game={games[0]} />
      <main className="flex-1">
        <GamesSection />
        <NewGamesSection />
        <ParagraphSection />
        <TextSection />
      </main>
    </>
  );
}