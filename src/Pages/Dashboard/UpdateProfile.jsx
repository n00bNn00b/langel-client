import React from "react";
import { useAuthState, useUpdateProfile } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../firebase.init";
import Loading from "../Global/Loading";

const UpdateProfile = () => {
  const [updateProfile, updating, error] = useUpdateProfile(auth);
  const [user] = useAuthState(auth);
  const navigate = useNavigate();
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({ mode: "all" });

  if (updating) {
    return <Loading />;
  }
  if (error) {
    toast.error("Something gone Wrong! Please Try again later.");
  }

  const profileHandler = async (e) => {
    const users = {
      email: user?.email,
      name: e.name,
      linkedIn: e.linkedIn,
      gitHub: e.gitHub,
    };
    fetch("http://localhost:5000/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(users),
    }).then((res) => res.json());

    await updateProfile({ displayName: e.name });
    reset();
    toast.success("Profile Updated SuccessFully");
    navigate("/profile");
  };
  return (
    <div className="card flex mx-auto my-20 w-96 bg-base-100 shadow-2xl">
      <div className="card-body">
        <h2 className="card-title flex mx-auto">Update Profile</h2>
        {/* profile input */}
        <form onSubmit={handleSubmit(profileHandler)}>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text font-bold">Full Name</span>
            </label>
            <input
              type="text"
              placeholder="i.e: John Danver"
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
          </div>

          {/* LinkedIn */}
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text font-bold">LinkedIn</span>
            </label>
            <input
              type="text"
              placeholder="i.e: https://www.linkedin.com/in/johndanver/"
              className="input input-bordered w-full max-w-xs"
              {...register("linkedIn", {
                required: {
                  value: true,
                  message: "LinkedIn URL Required",
                },
                pattern: {
                  value:
                    /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)/g,
                  message: "Valid LinkedIn URL Required",
                },
              })}
            />
            <label className="label">
              {errors.linkedIn?.type === "required" && (
                <span className="label-text-alt text-red-500 font-bold">
                  {errors.linkedIn.message}{" "}
                </span>
              )}
              {errors.linkedIn?.type === "pattern" && (
                <span className="label-text-alt text-red-500 font-bold">
                  {errors.linkedIn.message}{" "}
                </span>
              )}
            </label>
          </div>
          {/* GitHub */}
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text font-bold">GitHub</span>
            </label>
            <input
              type="text"
              placeholder="i.e: https://www.github.com/johndanver"
              className="input input-bordered w-full max-w-xs"
              {...register("gitHub", {
                required: {
                  value: true,
                  message: "GitHub Profile Link Required",
                },
                pattern: {
                  value:
                    /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)/g,
                  message: "Valid GitHub URL Required",
                },
              })}
            />
            <label className="label">
              {errors.gitHub?.type === "required" && (
                <span className="label-text-alt text-red-500 font-bold">
                  {errors.gitHub.message}{" "}
                </span>
              )}
              {errors.gitHub?.type === "pattern" && (
                <span className="label-text-alt text-red-500 font-bold">
                  {errors.gitHub.message}{" "}
                </span>
              )}
            </label>
          </div>

          {/* profile input end */}
          <div className="card-actions justify-end">
            <button className="my-3 flex mx-auto text-white btn btn-secondary hover:btn-primary ">
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateProfile;
