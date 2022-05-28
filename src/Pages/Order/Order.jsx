import axios from "axios";
import React, { useEffect, useState } from "react";

import { Link, useParams } from "react-router-dom";

import Loading from "../Global/Loading";

const Order = () => {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/product/${id}`)
      .then((res) => setProduct(res.data));
    setLoading(false);
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, [id]);

  return (
    <>
      {loading ? (
        <Loading loading={loading} />
      ) : (
        <div className="card mx-auto m-20 w-96 glass shadow-2xl">
          <figure>
            <img src={product.image} alt="tool" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{product.name}</h2>
            <p>{product.description}</p>
            <p>
              {" "}
              <span className="font-bold">Available Quanitity: </span>{" "}
              {product.quantity}
            </p>
            <p>
              {" "}
              <span className="font-bold">Price: $</span> {product.price}
            </p>
            <Link
              className="btn bg-secondary text-white mt-3 flex mx-auto"
              to={`/checkout/${id}`}
            >
              Proceed to Checkout
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default Order;
