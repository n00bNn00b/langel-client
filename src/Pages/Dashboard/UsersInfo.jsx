import React from "react";
import { toast } from "react-toastify";

const UsersInfo = ({ user, refetch, index }) => {
  const { email, name, role } = user;
  const makeAdmin = () => {
    fetch(
      `https://industrious-rabbits-production.up.railway.app/user/admin/${email}`,
      {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          refetch();
          toast.success(name, "was promoted to Admin ");
        }
      });
  };
  return (
    <tr>
      <th>{index + 1}</th>
      <td>{name}</td>
      <td>{email}</td>
      <td>
        {role !== "admin" && (
          <button className="btn" onClick={makeAdmin}>
            Make Admin
          </button>
        )}
      </td>
    </tr>
  );
};

export default UsersInfo;
