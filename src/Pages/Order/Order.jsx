import React from "react";

const Order = () => {
  return (
    <div className="card mx-auto m-20 w-96 glass">
      <figure>
        <img src="https://api.lorem.space/image/car?w=400&h=225" alt="car!" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Life hack</h2>
        <p>How to park your car at your garage?</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Learn now!</button>
        </div>
      </div>
    </div>
  );
};

export default Order;
