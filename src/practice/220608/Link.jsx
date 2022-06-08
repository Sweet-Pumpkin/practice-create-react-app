import React from "react";
import { Navigate, BrowserRouter, Route, Routes } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
const Hello = () => {
  const dispatch = useDispatch();
  const handleClickLogout = () => {
    dispatch({ type: "LOGOUT" });
  };
  const user = useSelector(state=> state.user)
  return (
    <>
      <div>안녕하세요 {user}님!</div>
      <button type='button' onClick={handleClickLogout}>
        로그아웃
      </button>
    </>
  );
};

const Form = () => {
  const [inputValue, setInputValue] = React.useState("");
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch({ type: "LOGIN", payload: inputValue })
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
  const userId = useSelector(state => state.user)
  return (
    <BrowserRouter>
      {userId ? (
        <Routes>
          <Route path='/' element={<Hello  />} />
          <Route path='*' element={<Navigate to='/' replace />} />
        </Routes>
      ) : (
        <Routes>
          <Route path='/register' element={<Form  />} />
          <Route path='*' element={<Navigate to='/register' replace />} />
        </Routes>
      )}
    </BrowserRouter>
  );
};
export default ContextToRedux;