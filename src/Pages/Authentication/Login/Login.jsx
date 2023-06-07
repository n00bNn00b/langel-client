import React from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../../firebase.init";
import Loading from "../../Global/Loading";
import Social from "../Social";

const Login = () => {
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const navigate = useNavigate();

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  if (loading) {
    return <Loading />;
  }
  if (error) {
    toast.error("Something gone wrong! Please try again.");
  }
  if (user) {
    navigate("/");
  }

  const loginHandler = async (e) => {
    // console.log(e);
    await signInWithEmailAndPassword(e.email, e.password);
    navigate("/");
  };
  return (
    <div className="form-control d-flex justify-center items-center my-20">
      <div className="card w-96 bg-base-100 shadow-2xl  image-full">
        <figure>
          <img src="https://i.ibb.co/PNmzYRX/diginventory.png" alt="Langel" />
        </figure>
        <div className="card-body">
          <h2 className="text-center text-secondary font-bold text-3xl">
            Login
          </h2>
          <form onSubmit={handleSubmit(loginHandler)}>
            <label className="label">
              <span className="label-text text-secondary font-bold">
                Email Address
              </span>
            </label>
            <input
              type="email"
              placeholder="i.e: someone@example.com"
              className="input input-bordered w-full max-w-xs"
              {...register("email", {
                required: {
                  value: true,
                  message: "Email address required",
                },
                pattern: {
                  value: /[a-z0-9]+\.[a-z]{2,3}/,
                  message: "Required Valid Email",
                },
              })}
            />
            <label className="label">
              {errors.email?.type === "required" && (
                <span className="label-text-alt text-red-500 font-bold">
                  {errors.email.message}{" "}
                </span>
              )}
              {errors.email?.type === "pattern" && (
                <span className="label-text-alt text-red font-bold">
                  {errors.email.message}{" "}
                </span>
              )}
            </label>
            <label className="label">
              <span className="label-text text-secondary font-bold">
                Password
              </span>
            </label>
            <input
              type="password"
              placeholder="Password"
              className="input input-bordered w-full max-w-xs"
              {...register("password", {
                required: {
                  value: true,
                  message: "Password required",
                },
                pattern: {
                  value: /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/,
                  message:
                    "Must contain at least one number, one uppercase, one lowercase letter, and at least 8 or more characters",
                },
              })}
            />
            <label className="label">
              {errors.password?.type === "required" && (
                <span className="label-text-alt text-red-500 font-bold">
                  {errors.password.message}{" "}
                </span>
              )}
              {errors.password?.type === "pattern" && (
                <span className="label-text-alt text-red-500 font-bold">
                  {errors.password.message}{" "}
                </span>
              )}
            </label>
            <label className="label">
              <span className="label-text text-secondary font-bold">
                New to Langel?{" "}
                <Link className="text-primary" to="/signup">
                  Signup
                </Link>
              </span>
            </label>

            <input
              className="flex my-5 mx-auto text-white btn btn-secondary hover:btn-primary "
              type="submit"
              value="Login"
            />
          </form>
          <Social />
        </div>
      </div>
    </div>
  );
};

export default Login;
