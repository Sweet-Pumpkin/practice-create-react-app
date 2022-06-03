import { createStore, combineReducers } from "redux";

const INITIAL_STATE = "";
const userReducer = (state = INITIAL_STATE, action) => {
  console.log('reducer에 action 도착: ', action, '현재 state는 ', state);
  switch (action.type) {
    case "LOGIN":
      return action.payload;
    case "LOGOUT":
      return INITIAL_STATE;
    default:
      return state;
  }
};

const store = createStore(
  combineReducers({
    user: userReducer,
  })
);
export default store;