import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

const Dashboard = () => {
  const [products, setProducts] = useState([]);
  const [delivered, setDelivered] = useState(false);
  useEffect(() => {
    axios
      .get("https://langel-server-production.up.railway.app/orders")
      .then((res) => setProducts(res.data));
  }, []);
  const deliverHandler = () => {
    toast.success("Delivery is on the way!");
    setDelivered(!delivered);
  };
  return (
    <div className="overflow-x-auto w-full my-20">
      <table className="table w-full">
        <thead>
          <tr>
            <th>Product Name</th>
            <th>Ordered By</th>
            <th>Quantity</th>
            <th>Address</th>
            <th>Unit Price</th>
            <th>Total Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product._id}>
              <td>
                <div className="flex items-center space-x-3">
                  <div>
                    <div className="font-bold">{product.productName}</div>
                  </div>
                </div>
              </td>
              <td>
                {product.name}
                <br />
                <span className="badge badge-success badge-sm">
                  {product.email}
                </span>
              </td>
              <td>{product.order}</td>
              <td>{product.address}</td>
              <td>$ {product.price}</td>
              <td>
                $
                {parseFloat(product.order * product.price).toFixed(2) ||
                  product.totalPrice}
              </td>
              <td>
                <button
                  className="btn btn-sm
                 btn-pri
              "
                  onClick={deliverHandler}
                >
                  Deliver
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Dashboard;
