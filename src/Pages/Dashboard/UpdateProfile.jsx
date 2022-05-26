import React, { useState } from "react";
import { useAuthState, useUpdateProfile } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import auth from "../../firebase.init";
import Loading from "../Global/Loading";

const UpdateProfile = () => {
  const [updateProfile, updating, errorProfile] = useUpdateProfile(auth);

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({ mode: "all" });

  if (updating) {
    return <Loading />;
  }
  const profileHandler = async (e) => {
    await updateProfile({ displayName: e.name });
  };
  return (
    <div className="card flex mx-auto my-20 w-96 bg-base-100 shadow-2xl">
      <div className="card-body">
        <h2 className="card-title">Update Profile</h2>
        {/* profile input */}
        <form onSubmit={handleSubmit(profileHandler)}>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Full Name</span>
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
          </div>

          {/* profile input end */}
          <div className="card-actions justify-end">
            <button className="my-3 flex mx-auto btn btn-primary hover:btn-secondary hover:text-white">
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateProfile;
