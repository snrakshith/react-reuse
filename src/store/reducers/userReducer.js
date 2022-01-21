const initialState = {
  name: "Rakshith",
  age: 25,
  phoneNumber: 8951432665,
  location: "Bangalore",
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "get_user":
      return initialState;
    case "update_user_age":
      return initialState + action.payload;
    case "add_user_gender":
      const gender = (initialState["gender"] = action.payload);
      const newUserObj = { ...initialState, gender };
      return newUserObj;

    default:
      return state;
  }
};

export default userReducer;
