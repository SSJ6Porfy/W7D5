import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import RootReducer from "../reducers/root_reducer";


export const configureStore = (preloadedState = {}) => {
  const store = createStore(RootReducer, preloadedState, applyMiddleware(logger, thunk));
  return store;
}
