import axios from "axios";
import React, { useEffect, useState } from "react";
import Review from "./Review";

const Reviews = () => {
  const [ratings, setRatings] = useState([]);
  //   console.log(rating);
  useEffect(() => {
    axios
      .get("http://localhost:5000/reviews")
      .then((res) => setRatings(res.data));
  }, []);
  // console.log(ratings);

  return (
    <div className="my-20">
      <div className="divider h-1 bg-secondary"></div>
      <h2 className="font-bold text-center text-secondary text-3xl">
        {" "}
        What Our Happy Clients Say
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5">
        {ratings.map((review) => (
          <Review key={review._id} review={review} />
        ))}
      </div>
    </div>
  );
};

export default Reviews;
