import React from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import auth from "../../firebase.init";
import Loading from "../Global/Loading";

const Social = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

  if (loading) {
    return <Loading />;
  }
  if (error) {
    toast.error("Something gone wrong! Please Try again.");
  }

  return (
    <div>
      <div className="divider">OR</div>
      <button
        onClick={() => signInWithGoogle()}
        className="btn btn-secondary text-white hover:btn-primary  flex mx-auto"
      >
        Continue with Google
      </button>
    </div>
  );
};

export default Social;
