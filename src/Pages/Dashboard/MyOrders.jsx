import axios from "axios";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import Loading from "../Global/Loading";

const MyOrders = () => {
  const [user] = useAuthState(auth);
  const [loading, setLoading] = useState(false);
  const [myOrders, setMyOrders] = useState([]);
  const email = user?.email;
  useEffect(() => {
    axios
      .get(`http://localhost:5000/orders/${email}`)
      .then((res) => setMyOrders(res.data));
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, [email]);
  if (loading) {
    return <Loading />;
  }
  //   console.log(myOrders);
  return (
    <>
      {loading ? (
        <Loading loading={loading} />
      ) : (
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {myOrders.map((myOrder) => (
            <div key={myOrder._id} className="card w-96 bg-base-100 shadow-2xl">
              <div className="card-body">
                <h2 className="card-title">
                  Product Name: {myOrder.productName}{" "}
                </h2>
                <p>
                  <span className="font-bold">Ordered Quantity: </span>
                  {myOrder.order}{" "}
                </p>
                <p>
                  <span className="font-bold">Ordered By: </span>
                  {myOrder.name}{" "}
                </p>
                <p>
                  <span className="font-bold">Shipping Address: </span>
                  {myOrder.address}{" "}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default MyOrders;
