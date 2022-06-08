import { createStore, combineReducers, applyMiddleware } from "redux";

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

function myMiddleware(store) {
  console.log("1차 실행");
  return function (next) {
    console.log("2차 실행");
    return function (action) {
      console.log("action이 middleware에 도착", action);
      console.log("현재 state: ", store.getState());
      
      if (Math.random() <0.5) {
        console.log("성공!!");
        next(action);
      } else {
        console.log("실패!!");
      }
    }
  }
}

const store = createStore(
  combineReducers({
    user: userReducer,
  }),
  applyMiddleware(myMiddleware)
);
export default store;