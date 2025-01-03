import React from 'react';
import { Benefit } from './Benefit';
import { benefits } from './benefits';

export function TextSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Why Play Word Puzzles?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover how our collection of word puzzles can help improve your language skills
            while having fun.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit) => (
            <Benefit key={benefit.title} {...benefit} />
          ))}
        </div>
      </div>
    </section>
  );
}