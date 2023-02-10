import React from "react";
import { FadeLoader } from "react-spinners";

const Loading = () => {
  return (
    <div className="text-center my-20 pt-5 pb-5 mb-5">
      <FadeLoader color="rgb(70, 129, 104)" size={150} />
    </div>
  );
};

export default Loading;
