import axios from "axios";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const MyOrders = () => {
  const [user] = useAuthState(auth);
  const [myOrders, setMyOrders] = useState([]);
  const email = user?.email;
  useEffect(() => {
    axios
      .get(`http://localhost:5000/orders/${email}`)
      .then((res) => setMyOrders(res.data));
  }, [email]);
  console.log(myOrders);
  return (
    <div>
      <h2>My Orders</h2>
    </div>
  );
};

export default MyOrders;
