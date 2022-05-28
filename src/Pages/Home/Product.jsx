import React from "react";
import { Link } from "react-router-dom";

const Product = ({ product }) => {
  const { _id, name, image, description, minOrder, price, quantity } = product;
  return (
    <div className="card border-2 bg-base-100 shadow-2xl ">
      <figure>
        <img
          className="transform transition-all hover:scale-110 duration-500"
          height={400}
          width={400}
          src={image}
          alt="tools"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{description}</p>
        <p>
          <span className="font-bold">Minimum Order:</span> {minOrder}
          {"/package "}
        </p>
        <p>
          <span className="font-bold">Available Quantity:</span> {quantity}{" "}
        </p>
        <p>
          <span className="font-bold">Price:</span> {price}
          {"/package "}
        </p>
        <div className="card-actions justify-end">
          <Link
            to={`/order/${_id}`}
            className="btn btn-secondary hover:btn-primary text-white flex mx-auto"
          >
            Order
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Product;
