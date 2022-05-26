import React from "react";

const Product = ({ product }) => {
  const { name, image, description, minOrder, price, quantity } = product;
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
          <button className="btn btn-secondary hover:btn-primary text-white flex mx-auto">
            Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
