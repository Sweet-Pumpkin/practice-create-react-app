import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

const exampleApi = (gender) => fetch(`https://randomuser.me/api/?gender=${gender}`, {
  headers: {
    'Content-Type': 'application/json',
  },
})
.then(response => response.json())
.then(res => {
  const randomUser = res.results[0];
  console.log(randomUser);
  return `${randomUser.gender} - ${randomUser.name.first}`;
});

const registerThunk = (gender) => async (dispatch, getState) => {
  dispatch({ type: 'LOGIN_REQUEST' });
  const randomName = await exampleApi(gender);
  dispatch({ type: 'LOGIN', payload: randomName });
}

const App = () => {
  const id = useSelector((state) => state.user.name);

  return (
    <>
      {id ? (
        <Routes>
          <Route path="/" element={<Hello />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      ) : (
        <Routes>
          <Route path="/register" element={<Form />} />
          <Route path="*" element={<Navigate to="/register" replace />} />
        </Routes>
      )}
    </>
  );
};

const Form = () => {
  const isFetching = useSelector((state) => state.user.isFetching);
  const [inputValue, setInputValue] = React.useState("");
  const dispatch = useDispatch();
  const handleChangeId = (e) => {
    setInputValue(e.target.value);
  };

  const handleClick = () => {
    const returnedActionFunction = registerThunk(inputValue);
    dispatch(returnedActionFunction);
  };

  return (
    <div>
      <input
        data-testid="id-input"
        type="text"
        name="id"
        placeholder='gender'
        value={inputValue}
        onChange={handleChangeId}
      />
      <button type="button" onClick={handleClick}>
        회원가입
      </button>
      {isFetching && '진행중'}
    </div>
  );
};

const Hello = () => {
  const id = useSelector((state) => state.user.name);
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };

  return (
    <>
      <div>안녕하세요 {id}님!</div>
      <button type="button" onClick={handleLogout}>
        로그아웃
      </button>
    </>
  );
};

export default App;