import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  const { _id, name, image, description, minOrder, quantity, price } = product;
  return (
    <div className="card shadow-2xl  glass">
      <figure>
        <img height={225} width={400} src={image} alt="car!" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{description}</p>
        <p>
          <span className="font-bold">Minimum Order: </span>
          {minOrder}/package{" "}
        </p>
        <p>
          <span className="font-bold">Available Quantity: </span>
          {quantity} package{" "}
        </p>
        <p>
          <span className="font-bold">Price: </span>${price}/package{" "}
        </p>
        <div className="card-actions justify-end">
          <Link
            to={`/order/${_id}`}
            className="btn btn-secondary text-white hover:btn-primary"
          >
            Order Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
