export const getUser = () => {
  return (dispatch) => {
    dispatch({
      type: "get_user",
      payload: 1,
    });
  };
};

export const addGender = (gender) => {
  return (dispatch) => {
    dispatch({
      type: "add_user_gender",
      payload: gender,
    });
  };
};

export const updateAge = (age) => {
  return (dispatch) => {
    dispatch({
      type: "update_user_age",
      payload: age,
    });
  };
};
