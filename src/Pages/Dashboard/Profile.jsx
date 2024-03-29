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
      .get(`https://langel-server-production.up.railway.app/user/${email}`)
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
          <a
            href={
              socialUser?.gitHub ? socialUser?.gitHub : " Link not updated yet"
            }
            className="text-blue-500"
          >
            {socialUser?.gitHub ? socialUser?.gitHub : " Link not updated yet"}
          </a>
        </p>
        <p>
          <span className="font-bold">LinkedIn:</span>{" "}
          <a
            href={
              socialUser?.linkedIn
                ? socialUser?.linkedIn
                : " Link not updated yet"
            }
            className="text-blue-500"
          >
            {socialUser?.linkedIn
              ? socialUser?.linkedIn
              : " Link not updated yet"}
          </a>
        </p>
        <Link to="/updateProfile" className="btn">
          Edit Profile
        </Link>
      </div>
    </div>
  );
};

export default Profile;
