import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateAge } from "../store/actions";

const UpdateUser = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  console.log(user);
  return (
    <div className="">
      <h1>Update Age</h1>
      <input type="text" />
      <button onClick={() => dispatch(updateAge(50))}>Update</button>
    </div>
  );
};

export default UpdateUser;
