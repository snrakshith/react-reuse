import { combineReducers } from "redux";
import userReducer from "./userReducer";
import authReducer from "./authReducer";

const reducers = combineReducers({
  user: userReducer,
  auth: authReducer,
});

export default reducers;
