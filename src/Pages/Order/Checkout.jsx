import React from "react";
import { useParams } from "react-router-dom";

const Checkout = () => {
  const { id } = useParams();
  return (
    <div>
      <h2>Checkout</h2>
    </div>
  );
};

export default Checkout;
