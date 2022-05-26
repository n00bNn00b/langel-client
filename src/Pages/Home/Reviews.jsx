import React, { useState } from "react";

const Reviews = () => {
  const [rating, setRating] = useState(0);
  //   console.log(rating);

  return (
    <div className="rating rating-md flex justify-center my-20">
      {[...Array(5)].map((star, i) => {
        const ratingValue = i + 1;

        return (
          <input
            key={i}
            type="radio"
            name="rating-7"
            className={
              ratingValue <= rating
                ? "mask mask-star-2 bg-orange-400"
                : "mask mask-star-2 bg-gray-300"
            }
            onClick={() => setRating(ratingValue)}
          />
        );
      })}
    </div>
  );
};

export default Reviews;
