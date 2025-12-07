import { LOGIN_API } from "../../api/api";
import { customAxios } from "../../api/customAxios";

export const LOGIN_REQUEST = "LOGIN_REQUEST";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";

// Thunk action
export const loginUser = (credentials) => {
  return async (dispatch) => {
    dispatch({ type: LOGIN_REQUEST });
    try {
      const res = await customAxios.post(LOGIN_API, credentials);
      dispatch({ type: LOGIN_SUCCESS, payload: res.data.token });
    } catch (error) {
      const message = error.response?.data?.error || "Network or server error";
      dispatch({ type: LOGIN_FAILURE, payload: message });
    }
  };
};
