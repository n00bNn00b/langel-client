import React from "react";

const Review = ({ review }) => {
  const { name, rating, description, image } = review;
  //   setRatings(rating);

  return (
    <div className="card bg-base-100 shadow-2xl">
      <div className="avatar flex mx-auto mt-3">
        <div className="w-24 rounded-full ring ring-secondary ring-offset-base-100 ring-offset-2">
          <img src={image} alt="user" />
        </div>
      </div>
      <div className="text-center pt-5">Rating: {rating}</div>
      <div className="card-body">
        <p>"{description}"</p>
        <br /> <span className="font-bold text-right">~{name}</span>
      </div>
    </div>
  );
};

export default Review;
