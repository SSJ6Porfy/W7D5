import * as SessionAPIUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';

export const login = (user) => dispatch => (
  SessionAPIUtil.login(user)
    .then(res => (dispatch(receiveCurrentUser(res))
    ), err => (
    dispatch(receiveErrors(err.responseJSON))
    ))
);

export const logout = () => dispatch => (
  SessionAPIUtil.logout()
    .then(res => dispatch(receiveCurrentUser(res)))
);

export const signup = (user) => dispatch => (
  SessionAPIUtil.signup(user)
    .then(res => (dispatch(receiveCurrentUser(user))
    ), err => (
    dispatch(receiveErrors(err.responseJSON))
    ))
);


export const receiveCurrentUser = (user) => ({
  type: RECEIVE_CURRENT_USER,
  user
});

export const receiveErrors = (errors) => ({
  type: RECEIVE_SESSION_ERRORS,
  errors
});
