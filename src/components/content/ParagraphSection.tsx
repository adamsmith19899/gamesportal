import React from 'react';
import { paragraphs } from './paragraphs';

export function ParagraphSection() {
  return (
    <section className="py-16 bg-gradient-to-br from-indigo-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Unlock Your Mental Potential
            </h2>
            {paragraphs.map((text, index) => (
              <p key={index} className="text-gray-600 mb-4 leading-relaxed">
                {text}
              </p>
            ))}
          </div>
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg opacity-20 blur-lg" />
            <img
              src="https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?w=800&auto=format&fit=crop&q=60"
              alt="Person solving puzzles"
              className="relative rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}