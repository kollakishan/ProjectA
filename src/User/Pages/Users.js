import React from "react";
import UsersList from "../Components/UsersList";

const Users = () => {
  const USER = [
    {
      id: "x1",
      image:
        "https://tesla-cdn.thron.com/delivery/public/image/tesla/35d15221-0a5f-4dce-b484-a4db67b81dd2/bvlatuR/std/0x0/model-s@2x",
      name: "tesla",
      place: "5",
    },
  ];
  return <UsersList items={USER}></UsersList>;
};
export default Users;
