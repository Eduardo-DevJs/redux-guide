import userActionTypes from "./action-types";

export const LoginUser = (payload) => ({
  type: userActionTypes.LOGIN,
  payload,
});

export const LogoutUser = () => ({
  type: userActionTypes.LOGOUT,
});
