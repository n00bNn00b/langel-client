import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import Loading from "../Global/Loading";

const Profile = () => {
  const [user, loading] = useAuthState(auth);
  //   console.log(user);
  if (loading) {
    return <Loading />;
  }
  const userImg = "https://avatars.githubusercontent.com/u/10570920?v=4";
  return (
    <div className="card w-96 flex  mx-auto my-20 bg-base-100 shadow-2xl">
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
