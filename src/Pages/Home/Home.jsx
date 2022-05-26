import React from "react";
import Footer from "../Global/Footer/Footer";
import Reviews from "./Reviews";
import Summary from "./Summary";

const Home = () => {
  return (
    <div>
      <div className="m-5">
        <h2>Home</h2>
        <Summary />
        <Reviews />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
