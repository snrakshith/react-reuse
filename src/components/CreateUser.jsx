import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { addGender } from "../store/actions";

const CreateUser = () => {
  const dispatch = useDispatch();
  const { gender } = useSelector((state) => state.user);
  console.log(gender);
  return (
    <div>
      <h2>Create a User Gender{gender}</h2>
      <button onClick={() => dispatch(addGender("Male"))}>Male</button>
      <button onClick={() => dispatch(addGender("Female"))}>Female</button>
    </div>
  );
};

export default CreateUser;
