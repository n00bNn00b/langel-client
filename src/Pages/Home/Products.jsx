import axios from "axios";
import React, { useEffect, useState } from "react";
import Product from "./Product";

const Products = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios
      .get("https://langel-server-production.up.railway.app/products")
      .then((res) => setProducts(res.data));
  }, []);
  //   console.log(products);
  return (
    <div className="my-10">
      <div className="divider h-1 bg-secondary"></div>
      <h2 className="text-center font-bold text-3xl text-primary my-5">
        Products We Supply{" "}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {products.splice(0, 6).map((product) => (
          <Product key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;
