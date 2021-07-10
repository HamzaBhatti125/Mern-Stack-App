import React from "react";
import UserList from "../compoents/UserList";

const Users = () => {
  const USERS = [
    {
      id: "u1",
      name: "Hamza Bhatti",
      image: "./images/cats.jpg",
      places: "123",
    },
  ];
  return <UserList items={USERS} />;
};

export default Users;
