import { useReducer } from "react";
import { createStore, combineReducers, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";


const store = createStore(
  combineReducers({
    user: useReducer,
  }),
  applyMiddleware(thunkMiddleware)
);

export default store;