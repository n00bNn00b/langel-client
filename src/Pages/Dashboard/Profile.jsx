import axios from "axios";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";
import Loading from "../Global/Loading";

const Profile = () => {
  const [user, loading] = useAuthState(auth);
  const email = user?.email;
  const [socialUser, setSocialUser] = useState([]);
  useEffect(() => {
    axios
      .get(`https://warm-castle-08464.herokuapp.com/user/${email}`)
      .then((res) => setSocialUser(res.data));
  }, [email]);
  // console.log(socialUser);
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
        <h2 className="card-title">My Profile</h2>
        <p>
          <span className="font-bold">Name:</span>{" "}
          {user?.displayName ? user?.displayName : " Name not updated yet"}{" "}
        </p>
        <p>
          <span className="font-bold">Email:</span> {user?.email}{" "}
        </p>
        <p>
          <span className="font-bold">GitHub:</span>{" "}
          {socialUser?.gitHub ? socialUser?.gitHub : " Name not updated yet"}{" "}
        </p>
        <p>
          <span className="font-bold">LinkedIn:</span>{" "}
          {socialUser?.linkedIn
            ? socialUser?.linkedIn
            : " Name not updated yet"}{" "}
        </p>
        <Link to="/updateProfile" className="btn">
          Edit Profile
        </Link>
      </div>
    </div>
  );
};

export default Profile;
