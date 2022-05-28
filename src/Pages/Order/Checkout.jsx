import axios from "axios";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../firebase.init";
import Loading from "../Global/Loading";

const Checkout = () => {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);
  const { id } = useParams();
  const [user] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:5000/product/${id}`)
      .then((res) => setProduct(res.data));
    setLoading(false);
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, [id]);
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const checkoutHandler = (data) => {
    const orders = {
      name: user?.displayName,
      email: user?.email,
      order: data.minorder,
      address: data.address,
    };
    if (data.minorder >= 100) {
      fetch("http://localhost:5000/order", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(orders),
      }).then((res) => res.json());
      reset();
      toast.success("Order placed Successfully");
      navigate("/myorders");
    } else {
      toast.error("Minimum order quantity is 100");
    }
  };
  return (
    <>
      {loading ? (
        <Loading loading={loading} />
      ) : (
        <div className="card w-96 flex mx-auto mt-20 bg-base-100 shadow-xl">
          <figure>
            <img src={product.image} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{product.name}</h2>
            <p>
              <span>Available Quantity: </span>
              {product.quantity}{" "}
            </p>
            <p>
              <span>Minimum Order(package): </span>
              {product.minOrder}{" "}
            </p>
            <p>
              <span>Price: </span>
              {product.price}{" "}
            </p>

            <form onSubmit={handleSubmit(checkoutHandler)}>
              <label className="label">
                <span className="label-text text-primary font-bold">
                  Order Quantity
                </span>
              </label>
              <input
                type="number"
                placeholder="Number of products to order"
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
              {/* name */}
              <label className="label">
                <span className="label-text text-primary font-bold">
                  Full Name
                </span>
              </label>
              <input
                disabled
                type="text"
                placeholder="i.e.: John Doe"
                value={user.displayName}
                className="input input-bordered w-full max-w-xs"
              />
              <label className="label">
                <span className="label-text text-primary font-bold">
                  Address
                </span>
              </label>
              <input
                type="text"
                placeholder="i.e.: 301 linkroad, AU"
                className="input input-bordered w-full max-w-xs"
                {...register("address", {
                  required: {
                    value: true,
                    message: "Address required",
                  },
                })}
              />
              <label className="label">
                {errors.address?.type === "required" && (
                  <span className="label-text-alt text-red-500 font-bold">
                    {errors.address.message}{" "}
                  </span>
                )}
              </label>

              <input
                className="flex my-5 mx-auto text-white btn btn-secondary hover:btn-primary "
                type="submit"
                value="Checkout"
              />
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Checkout;
