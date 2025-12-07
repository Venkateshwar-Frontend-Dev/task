import { createStore, applyMiddleware, combineReducers } from "redux";
import { thunk } from "redux-thunk";
import authReducer from "./reducer/authReducer";
import userReducer from "./reducer/userReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  user: userReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
