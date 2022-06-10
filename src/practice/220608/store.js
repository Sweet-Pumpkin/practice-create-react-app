import { createStore, combineReducers, applyMiddleware } from "redux";

const INITIAL_STATE = {
  isFetching: false,
  name: '',
};
const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "LOGIN_REQUEST": {
      return {
        ...state,
        isFetching: true,
      } 
    } 
    case "LOGIN":
      return {
        isFetching: false,
        name: action.payload,
      } 
    case "LOGOUT":
      return { ...INITIAL_STATE };
    default: 
      return state;
  }   
};

function thunkMiddleware(store) {
  return function (next) {
    return function (action) {
      if (typeof action === 'function') {
        action(store.dispatch, store.getState);
      } else {
        next(action);
      } 
    };
  };
};

const store = createStore(
  combineReducers({
    user: userReducer,
  }),
  applyMiddleware(thunkMiddleware),
);
export default store;