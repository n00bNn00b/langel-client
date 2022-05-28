import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="hero min-h-screen">
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <img
            src="https://devbeep.com/wp-content/uploads/2021/07/BBBBBBBB-2.png"
            alt=""
          />
          <h1 className="mb-5 text-5xl font-bold">404 !</h1>
          <p className="mb-5">The Content You are Looking for was not found</p>
          <Link className="btn btn-primary" to="/">
            Go Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
