import React from "react";
import { useForm } from "react-hook-form";
import {
  useCreateUserWithEmailAndPassword,
  useSendEmailVerification,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import Loading from "../../Global/Loading";

const Signup = () => {
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  const [updateProfile, updating, errorProfile] = useUpdateProfile(auth);
  const [sendEmailVerification, sending, errorVerification] =
    useSendEmailVerification(auth);

  const navigate = useNavigate();

  const {
    register,
    watch,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({ mode: "all" });

  if (loading || updating) {
    return <Loading />;
  }

  const signUpHandler = async (e) => {
    // console.log(e);
    if (e.password !== e.confirmPassword) {
      toast("password does not match!");
    }
    await createUserWithEmailAndPassword(e.email, e.password);
    await updateProfile({ displayName: e.name });
    await sendEmailVerification();
    signOut(auth);
    toast.success("Signup Successful! Please Confirm Email.");
    reset();
    navigate("/login");
  };
  // password match
  const password = watch("password");
  return (
    <div className="form-control d-flex justify-center items-center my-20">
      <div className="card w-96 bg-base-100 shadow-2xl image-full">
        <figure>
          <img
            src="https://i.ibb.co/GWjhvrX/lagel-logo.png?w=400&h=225"
            alt="Langel"
          />
        </figure>
        <div className="card-body">
          <h2 className="text-center text-secondary font-bold text-3xl">
            Sign Up
          </h2>
          <form onSubmit={handleSubmit(signUpHandler)}>
            <label className="label">
              <span className="label-text text-secondary font-bold">
                Full Name
              </span>
            </label>
            <input
              type="text"
              placeholder="i.e.: John Doe"
              className="input input-bordered w-full max-w-xs"
              {...register("name", {
                required: {
                  value: true,
                  message: "Name Required",
                },
                minLength: {
                  value: 6,
                  message: "Minimum 6 characters and maximum 40 characters",
                },
                pattern: {
                  value: /(?=^.{0,40}$)^[a-zA-Z-]+\s[a-zA-Z-]+$/,
                  message:
                    "Required Valid Name with maximum 40 characters and one space",
                },
              })}
            />
            <label className="label">
              {errors.name?.type === "required" && (
                <span className="label-text-alt text-red-500 font-bold">
                  {errors.name.message}{" "}
                </span>
              )}
              {errors.name?.type === "pattern" && (
                <span className="label-text-alt text-red-500 font-bold">
                  {errors.name.message}{" "}
                </span>
              )}
              {errors.name?.type === "minLength" && (
                <span className="label-text-alt text-red-500 font-bold">
                  {errors.name.message}{" "}
                </span>
              )}
            </label>
            {/* email */}
            <label className="label">
              <span className="label-text text-secondary font-bold">
                Email Address
              </span>
            </label>
            <input
              type="email"
              placeholder="i.e.: someone@example.com"
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
                <span className="label-text-alt text-red-500 font-bold">
                  {errors.email.message}{" "}
                </span>
              )}
            </label>
            {/* password */}
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
                    "Must contain at least one number, one uppercase , one lowercase letter and at least 8 or more characters",
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
            {/* confirm password */}
            <label className="label">
              <span className="label-text text-secondary font-bold">
                Confirm Password
              </span>
            </label>
            <input
              type="password"
              placeholder="Confirm Password"
              className="input input-bordered w-full max-w-xs"
              {...register("confirmPassword", {
                required: {
                  value: true,
                  message: "Password Confirm required",
                },
                validate: (value) =>
                  value === password || "Password Does not match",
              })}
            />
            <label className="label">
              {errors.confirmPassword?.type === "required" && (
                <span className="label-text-alt text-red-500 font-bold">
                  {errors.confirmPassword.message}{" "}
                </span>
              )}
              {errors.confirmPassword?.type === "validate" && (
                <span className="label-text-alt text-red-500 font-bold">
                  {errors.confirmPassword.message}{" "}
                </span>
              )}
            </label>
            <label className="label">
              <span className="label-text text-lg text-secondary font-bold">
                Already have an account?{" "}
                <Link className="underline underline-offset-1" to="/login">
                  Login
                </Link>
              </span>
            </label>

            <input
              className="flex mx-auto mt-3 btn btn-neutral hover:btn-secondary hover:text-white"
              type="submit"
              value="Sign up"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
