import React from 'react';
import { createContext, useContext } from "react";
import { Navigate, BrowserRouter, Route, Routes } from "react-router-dom";

const IdContext = createContext({ id: '', setId: (id) => {} });

const Hello = () => {
  const { id, setId } = useContext(IdContext);
  const handleClickLogout = () => {
    setId('');
  }
  return (
    <>
      <div>안녕하세요 {id}님!</div>
      <button type='button' onClick={handleClickLogout}>로그아웃</button>
    </>
  );
}

const Form = () => {
  const { setId } = useContext(IdContext);
  const [inputValue, setInputValue] = React.useState('');

  const handleClick = (e) => {
    setId(inputValue);
  };

  const handleChangeId = (e) => {
    setInputValue(e.target.value);
  }

  return (
    <div>
      <input
        data-testid='id-input'
        type="text"
        name='id'
        value={inputValue}
        onChange={handleChangeId}
      />
      <button
        type="button"
        onClick={handleClick}
      >
        회원가입
      </button>
    </div>
  );
}

const App = () => {
  const [id, setId] = React.useState('');
  const contextValue = {
    id,
    setId,
  }
  return (
    <IdContext.Provider value={contextValue}>
      <BrowserRouter>
        {id ? (
          <Routes>
            <Route path="/" element={<Hello />} />
            <Route path="*" element={<Navigate to='/' replace />} />
          </Routes>
        ) : (
          <Routes>
            <Route path="/register" element={<Form />} />
            <Route path="*" element={<Navigate to='/register' replace />} />
          </Routes>
        )}
      </BrowserRouter>
    </IdContext.Provider>
  );
}

export default App;  