import { USER_API } from "../../api/api";
import { customAxios } from "../../api/customAxios";

export const FETCH_USERS_REQUEST = "FETCH_USERS_REQUEST";
export const FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS";
export const FETCH_USERS_FAILURE = "FETCH_USERS_FAILURE";

export const ADD_USER_REQUEST = "ADD_USER_REQUEST";
export const ADD_USER_SUCCESS = "ADD_USER_SUCCESS";
export const ADD_USER_FAILURE = "ADD_USER_FAILURE";

export const UPDATE_USER_REQUEST = "UPDATE_USER_REQUEST";
export const UPDATE_USER_SUCCESS = "UPDATE_USER_SUCCESS";

export const DELETE_USER_REQUEST = "DELETE_USER_REQUEST";
export const DELETE_USER_SUCCESS = "DELETE_USER_SUCCESS";

// fetch
export const getUserList = () => async (dispatch) => {
  dispatch({ type: FETCH_USERS_REQUEST });

  const users = JSON.parse(localStorage.getItem("users")) || [];
  if (users.length > 0)
    return dispatch({ type: FETCH_USERS_SUCCESS, payload: users });

  try {
    const res = await customAxios.get(USER_API);
    dispatch({ type: FETCH_USERS_SUCCESS, payload: res.data.data });
  } catch (error) {
    dispatch({ type: FETCH_USERS_FAILURE, payload: error.message });
  }
};

// add
export const addUser = (user) => async (dispatch, getState) => {
  dispatch({ type: ADD_USER_REQUEST });
  const newUser = {
    id: Date.now(),
    ...user,
  };
  const updatedUsers = [newUser, ...getState().user.data];
  localStorage.setItem("users", JSON.stringify(updatedUsers));

  dispatch({ type: ADD_USER_SUCCESS, payload: newUser });
};

export const updateUser = (id, updatedUser) => async (dispatch, getState) => {
  dispatch({ type: UPDATE_USER_REQUEST });
  const users = getState().user.data;

  const updatedUsers = users.map((user) =>
    user.id === id ? { ...user, ...updatedUser } : user
  );

  localStorage.setItem("users", JSON.stringify(updatedUsers));

  dispatch({
    type: UPDATE_USER_SUCCESS,
    payload: { id, ...updatedUser },
  });
};

export const deleteUser = (id) => (dispatch, getState) => {
  dispatch({ type: DELETE_USER_REQUEST });
  const users = getState().user.data;
  const updatedUsers = users.filter((user) => user.id !== id);

  localStorage.setItem("users", JSON.stringify(updatedUsers));

  dispatch({ type: DELETE_USER_SUCCESS, payload: id });
};
