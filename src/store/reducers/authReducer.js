const initialState = {
  name: "Rakshith",
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "get_user":
      return initialState + action.payload;
    // case "update_user_age":
    //   return { initialState, age };
    default:
      return state;
  }
};

export default authReducer;
