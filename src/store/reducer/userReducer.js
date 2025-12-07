import {
  ADD_USER_FAILURE,
  ADD_USER_REQUEST,
  ADD_USER_SUCCESS,
  DELETE_USER_REQUEST,
  DELETE_USER_SUCCESS,
  FETCH_USERS_FAILURE,
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
  UPDATE_USER_REQUEST,
  UPDATE_USER_SUCCESS,
} from "../action/userAction";

const localUsers = JSON.parse(localStorage.getItem("users")) || [];

const initialState = {
  loading: false,
  data: localUsers,
  error: null,
};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_USERS_REQUEST:
    case ADD_USER_REQUEST:
    case UPDATE_USER_REQUEST:
    case DELETE_USER_REQUEST:
      return { ...state, loading: true, error: null };

    case FETCH_USERS_SUCCESS:
      localStorage.setItem("users", JSON.stringify(action.payload));
      return { ...state, loading: false, data: action.payload };

    case ADD_USER_SUCCESS:
      return {
        loading: false,
        data: [action.payload, ...state.data],
        error: null,
      };

    case UPDATE_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        data: state.data.map((user) =>
          user.id === action.payload.id ? { ...user, ...action.payload } : user
        ),
      };

    case DELETE_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        data: state.data.filter((user) => user.id !== action.payload),
      };

    case FETCH_USERS_FAILURE:
    case ADD_USER_FAILURE:
      return { ...state, loading: false, error: action.payload };

    default:
      return state;
  }
}
