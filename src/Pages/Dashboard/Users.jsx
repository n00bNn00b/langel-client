import React from "react";
import { useQuery } from "react-query";
import Loading from "../Global/Loading";
import UsersInfo from "./UsersInfo";

const Users = () => {
  const {
    data: users,
    isLoading,
    refetch,
  } = useQuery("users", () =>
    fetch("https://langel-server-production.up.railway.app/users", {
      method: "GET",
      headers: {
        "content-type": "application/json",
      },
    }).then((res) => res.json())
  );
  if (isLoading) {
    return <Loading />;
  }
  //   console.log(users);

  return (
    <div className="overflow-x-auto mt-20">
      <table className="table w-full">
        <thead>
          <tr>
            <th>No.</th>
            <th>Name</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <UsersInfo
              key={user._id}
              user={user}
              index={index}
              refetch={refetch}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Users;
