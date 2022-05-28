import axios from "axios";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import Loading from "../Global/Loading";

const Order = () => {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);
  const [flex, setFlex] = useState("hidden");
  const [minOrder, setMinOrder] = useState(0);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  useEffect(() => {
    axios
      .get(`http://localhost:5000/product/${id}`)
      .then((res) => setProduct(res.data));
    setLoading(false);
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, [id]);

  const orderHandler = (data) => {
    const userOrder = data.minorder;
    setMinOrder(userOrder);
    console.log(minOrder);
  };
  return (
    <>
      {loading ? (
        <Loading loading={loading} />
      ) : (
        <div className="card mx-auto m-20 w-96 glass shadow-2xl">
          <form onSubmit={handleSubmit(orderHandler)}>
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

              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text font-bold">Your Order</span>
                </label>

                <input
                  type="number"
                  placeholder="Type here"
                  className="input input-bordered w-full max-w-xs"
                  {...register("minorder", {
                    required: {
                      value: true,
                      message: "Minimum order number required",
                    },
                    pattern: {
                      value: /^[0-9]+$/g,
                      message: "Please Input a valid number",
                    },
                  })}
                />
                <label className="label">
                  {errors.minorder?.type === "required" && (
                    <span className="label-text-alt text-red-500 font-bold">
                      {errors.minorder.message}{" "}
                    </span>
                  )}
                  {errors.minorder?.type === "pattern" && (
                    <span className="label-text-alt text-red-500 font-bold">
                      {errors.minorder.message}{" "}
                    </span>
                  )}
                </label>
                <input
                  className="flex my-5 mx-auto text-white btn btn-secondary"
                  type="submit"
                  value="Update Order"
                />
                <Link to={`/checkout/${id}`} className={flex ? flex : flex}>
                  Proceed to Checkout
                </Link>
              </div>
            </div>
          </form>
        </div>
      )}
    </>
  );
};

export default Order;
