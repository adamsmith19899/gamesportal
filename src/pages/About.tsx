import React from 'react';

export function About() {
  return (
    <main className="flex-1 py-12">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">About Us</h1>
        <div className="prose prose-indigo">
          <p className="text-lg text-gray-600 mb-6">
            Welcome to Word Puzzle Games, where we combine education with entertainment
            to create engaging word-based challenges that sharpen your mind.
          </p>
          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Our Mission</h2>
          <p className="text-gray-600 mb-6">
            We believe in the power of words to educate, inspire, and entertain. Our
            mission is to provide high-quality word puzzles that help improve vocabulary,
            cognitive skills, and problem-solving abilities while ensuring an enjoyable
            gaming experience.
          </p>
          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Our Story</h2>
          <p className="text-gray-600 mb-6">
            Founded by word game enthusiasts, our platform has grown into a comprehensive
            collection of puzzles designed for all skill levels. We continuously work to
            expand our game library and enhance the user experience.
          </p>
        </div>
      </div>
    </main>
  );
}