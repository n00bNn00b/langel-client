import axios from "axios";
import React, { useEffect, useState } from "react";
import Loading from "../Global/Loading";
import ProductCard from "./ProductCard";

const AllProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    axios
      .get("https://langel-server-production.up.railway.app/products")
      .then((res) => setProducts(res.data));
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);

  return (
    <div className="my-20">
      <h2 className="text-center text-3xl font-bold text-secondary">
        Products We Supply all over the World
      </h2>
      {loading ? (
        <Loading loading={loading} />
      ) : (
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 m-10">
          {products.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};

export default AllProducts;
