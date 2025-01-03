import React from 'react';
import { Star } from 'lucide-react';

interface RatingProps {
  rating: number;
  totalRatings: number;
}

export function Rating({ rating, totalRatings }: RatingProps) {
  return (
    <div className="flex items-center gap-2">
      <div className="flex">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={`w-5 h-5 ${
              star <= rating
                ? 'text-yellow-400 fill-current'
                : 'text-gray-300'
            }`}
          />
        ))}
      </div>
      <span className="text-sm text-gray-600">
        ({totalRatings} ratings)
      </span>
    </div>
  );
}