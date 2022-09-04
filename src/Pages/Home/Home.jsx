import React, { useEffect, useState } from "react";
import Footer from "../Global/Footer/Footer";
import Loading from "../Global/Loading";
import Banner from "./Banner";
import Products from "./Products";
import Reviews from "./Reviews";
import Summary from "./Summary";

const Home = () => {
  const [loading, SetLoading] = useState(false);
  useEffect(() => {
    SetLoading(true);
    setTimeout(() => {
      SetLoading(false);
    }, 3000);
  }, []);
  return (
    <div>
      <div className="mt-10">
        <Banner />
        <Summary />
        {loading ? <Loading loading={loading} /> : <Products />}
        <Reviews />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
