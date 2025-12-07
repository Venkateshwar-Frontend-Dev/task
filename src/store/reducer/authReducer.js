import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
} from "../action/authActions";

export const LOGOUT = "LOGOUT";
const tokenFromStorage = localStorage.getItem("token");

const initialState = {
  loading: false,
  token: tokenFromStorage ? tokenFromStorage : null,
  error: null,
};

export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN_REQUEST:
      return { ...state, loading: true, error: null };
    case LOGIN_SUCCESS:
      localStorage.setItem("token", action.payload);
      return { ...state, loading: false, token: action.payload };
    case LOGIN_FAILURE:
      return { ...state, loading: false, error: action.payload };
    case LOGOUT:
      localStorage.removeItem("token");
      return { ...state, token: null, error: null };
    default:
      return state;
  }
}
