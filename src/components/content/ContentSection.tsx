import React from 'react';
import { ArticleCard } from './ArticleCard';
import { SocialShare } from './SocialShare';
import { Rating } from './Rating';

const articles = [
  {
    title: 'Boost Your Vocabulary with Word Games',
    excerpt: 'Discover how playing word games can significantly improve your vocabulary and cognitive skills.',
    date: 'March 15, 2024',
    imageUrl: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=800&auto=format&fit=crop&q=60',
  },
  {
    title: 'The Science Behind Word Puzzles',
    excerpt: 'Learn about the cognitive benefits and brain-boosting effects of solving word puzzles regularly.',
    date: 'March 12, 2024',
    imageUrl: 'https://images.unsplash.com/photo-1546776310-eef45dd6d63c?w=800&auto=format&fit=crop&q=60',
  },
  {
    title: 'Tips for Mastering Crosswords',
    excerpt: 'Expert strategies and techniques to help you become a crossword puzzle solving champion.',
    date: 'March 10, 2024',
    imageUrl: 'https://images.unsplash.com/photo-1457369804613-52c61a468e7d?w=800&auto=format&fit=crop&q=60',
  },
];

export function ContentSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Latest Articles</h2>
          <div className="flex justify-center items-center gap-8">
            <Rating rating={4.5} totalRatings={1234} />
            <SocialShare
              url={window.location.href}
              title="Check out these amazing word puzzle games!"
            />
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article) => (
            <ArticleCard key={article.title} {...article} />
          ))}
        </div>
      </div>
    </section>
  );
}