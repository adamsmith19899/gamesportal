import React from 'react';

export function MemoryMatch() {
  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Memory Match</h1>
        <div className="bg-white rounded-lg shadow-md p-8">
          <div className="grid grid-cols-4 gap-4 max-w-2xl mx-auto">
            {Array(16).fill(null).map((_, i) => (
              <div
                key={i}
                className="aspect-square bg-indigo-100 rounded-lg cursor-pointer hover:bg-indigo-200 transition-colors"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}