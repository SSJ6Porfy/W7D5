import { combineReducers } from "redux";
import sessionReducer from "./session_reducer";
import ErrorReducer from "./error_reducer";

export default combineReducers({
  session: sessionReducer,
  errors: ErrorReducer
});
