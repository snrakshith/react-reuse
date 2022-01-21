import React from "react";
import CreateUser from "./CreateUser";
import DeleteUser from "./DeleteUser";
import GetUser from "./GetUser";
import UpdateUser from "./UpdateUser";

const User = () => {
  return (
    <>
      <GetUser />
      <CreateUser />
      <UpdateUser />
      <DeleteUser />
    </>
  );
};

export default User;
