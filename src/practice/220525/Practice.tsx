import React from "react";
import { BrowserRouter, Route, Routes, Link, useParams } from "react-router-dom";

const Hello = () => {
  const params = useParams();
  return (
    <>
      <div>안녕하세요 {params.id}님!</div>
      <Link to='/'>
        <button type='button'>로그아웃</button>
      </Link>
    </>
  );
}

const checkIdValid = (id: string) => {
  return id.length >= 6 && id.length <= 20;
}
const checkPasswordValid = (password: string) => {
  return password.length >= 12 && password.length <= 20;
}

const Main = () => {
  const [id, setId] = React.useState('');
  const [password, setPassword] = React.useState('');
  const idInput = React.useRef<HTMLInputElement>(null);
  const passwordInput = React.useRef<HTMLInputElement>(null);
  const isIdValid = checkIdValid(id);
  const isPasswordValid = checkPasswordValid(password);

  const handleClick: React.MouseEventHandler<HTMLButtonElement>= (e) => {
    if (!isIdValid) {
      setId('');
      idInput.current?.focus();
      alert('유효하지 않은 id입니다.');
      return;
    }
    if (!isPasswordValid) {
      setPassword('');
      passwordInput.current?.focus();
      alert('유효하지 않은 password입니다.');
      return;
    }
  };

  const handleChangeId: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setId(e.target.value);
  }

  const handleChangePassword: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setPassword(e.target.value);
  }
  const button = (
    <button
      type="button"
      onClick={handleClick}
      disabled={!(id.length || password.length)}
    >
      회원가입
    </button>
  );
  return (
    <div>
      <div>
        <input
          type="text"
          name='id'
          placeholder='6글자 이상 20글자 이하'
          ref={idInput}
          value={id}
          onChange={handleChangeId}
        />
        <br />
        {!checkIdValid(id) && '유효하지 않은 id입니다.'}
      </div>
      <div>
        <input
          type="text"
          name='password'
          placeholder='12글자 이상 20글자 이하'
          ref={passwordInput}
          value={password}
          onChange={handleChangePassword}
        />
        <br />
        {!checkPasswordValid(password) && '유효하지 않은 password입니다.'}
      </div>
      {isIdValid && isPasswordValid ? (
        <Link to={`/hello/${id}`}>
          {button}
        </Link>
      ) : button}
    </div>
  );
}

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/hello/:id" element={<Hello />} />
      </Routes>
    </BrowserRouter>
  );
};


export default App;