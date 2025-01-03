import React from 'react';
import { categories } from '../../data/categories';

interface GameCategoriesProps {
  currentCategory: string;
}

export function GameCategories({ currentCategory }: GameCategoriesProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Game Categories</h3>
      <div className="flex flex-wrap gap-2">
        {categories.map((category) => (
          <span
            key={category.id}
            className={`px-3 py-1 rounded-full text-sm font-medium ${
              category.id === currentCategory
                ? 'bg-indigo-100 text-indigo-800'
                : 'bg-gray-100 text-gray-600'
            }`}
          >
            {category.name}
          </span>
        ))}
      </div>
    </div>
  );
}