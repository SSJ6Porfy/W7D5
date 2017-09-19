import { RECEIVE_CURRENT_USER } from "../actions/session_actions";
import { merge } from 'lodash';

const initialState = {
  currentUser: null,
  errors: []
};

const sessionReducer = (state = initialState, action) => {
  Object.freeze(state);
  const newState = merge({}, state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return newState[currentUser] = action.user;
    default:
      return state;
  }
};

export default sessionReducer;
