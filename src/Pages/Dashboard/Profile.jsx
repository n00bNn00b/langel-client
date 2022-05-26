import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const Profile = () => {
  const [user, loading] = useAuthState(auth);
  console.log(user);
  const userImg = "https://avatars.githubusercontent.com/u/10570920?v=4";
  return (
    <div className="card mx-10 my-20 lg:card-side bg-base-100 shadow-2xl">
      <figure>
        <img src={user?.photoURL ? user.photoURL : userImg} alt="Album" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">User Profile</h2>
        <p>
          Name:{user?.displayName ? user?.displayName : " Name not updated yet"}{" "}
        </p>
      </div>
    </div>
  );
};

export default Profile;
