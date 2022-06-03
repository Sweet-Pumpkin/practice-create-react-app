import React from "react";
import { Navigate, BrowserRouter, Route, Routes } from "react-router-dom";
import store from "./store02";

const Hello = ({ id, dispatchAndUpdateState }) => {
  const handleClickLogout = () => {
    dispatchAndUpdateState({ type: "LOGOUT" });
  };

  return (
    <>
      <div>안녕하세요 {id}님!</div>
      <button type='button' onClick={handleClickLogout}>
        로그아웃
      </button>
    </>
  );
};

const Form = ({ dispatchAndUpdateState }) => {
  const [inputValue, setInputValue] = React.useState("");

  const handleClick = () => {
    dispatchAndUpdateState({ type: "LOGIN", payload: inputValue });
  };

  const handleChangeId = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div>
      <input
        type='text'
        name='id'
        value={inputValue}
        onChange={handleChangeId}
      />
      <button type='button' onClick={handleClick}>
        회원가입
      </button>
    </div>
  );
};

const ContextToRedux = () => {
  const [id, setId] = React.useState(store.getState().user);
  const dispatchAndUpdateState = (action) => {
    store.dispatch(action);
    setId(store.getState().user);
  };

  return (
    <BrowserRouter>
      {id ? (
        <Routes>
          <Route path='/' element={<Hello id={id} dispatchAndUpdateState={dispatchAndUpdateState} />} />
          <Route path='*' element={<Navigate to='/' replace />} />
        </Routes>
      ) : (
        <Routes>
          <Route path='/register' element={<Form dispatchAndUpdateState={dispatchAndUpdateState} />} />
          <Route path='*' element={<Navigate to='/register' replace />} />
        </Routes>
      )}
    </BrowserRouter>
  );
};

export default ContextToRedux;