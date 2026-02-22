import React from 'react';

interface StarRatingProps {
  rating: number; 
  totalStars?: number; 
}

const StarRating: React.FC<StarRatingProps> = ({
  rating,
  totalStars = 5,
}) => {
  return (
    <div className="flex">
      {[...Array(totalStars)].map((_, index) => {
        const starValue = index + 1;
        return (
          <span
            key={starValue}
            className={`text-2xl ${
              starValue <= rating ? 'text-accentPrimary' : 'text-txtSecondary'
            }`}
          >
            ★
          </span>
        );
      })}
    </div>
  );
};

export default StarRating;