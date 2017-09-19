import { RECEIVE_CURRENT_USER, RECEIVE_SESSION_ERRORS } from "../actions/session_actions";
import { merge } from 'lodash';

const SessionErrorsReducer = (state = {}, action) => {
  Object.freeze(state);
  const newState = merge({}, state);
  switch (action.type) {
    case RECEIVE_SESSION_ERRORS:
      newState[errors] = action.errors
      return newState
    case RECEIVE_CURRENT_USER:
      newState[errors] = {}
      return newState
    default:
      return state;

  }
};

export default SessionErrorsReducer;
