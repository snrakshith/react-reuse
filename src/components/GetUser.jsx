import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../store/actions";

const GetUser = () => {
  const { name, phoneNumber, age, location } = useSelector(
    (state) => state.user
  );
  const dispatch = useDispatch();
  console.log(dispatch(getUser()));
  return (
    <div>
      <h1>Name:{name}</h1>
      <h1>Age:{age}</h1>
      <h1>Phone:{phoneNumber}</h1>
      <h1>Location:{location}</h1>
      <button onClick={() => dispatch(getUser())}>Get User</button>
    </div>
  );
};

export default GetUser;
