import React, { useState, useRef, useEffect } from 'react'

export default function Practice10() {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  let idValue = useRef(null);
  let passwordValue = useRef(null);

  const handleClick = () => {
    if (id.length > 5 && id.length < 21 && password.length > 5 && password.length < 21) {
      alert('회원가입 성공!');
    } else if (id.length < 5 && id.length > 21 && password.length > 5 && password.length < 21) {
      return alert("유효하지 않은 id입니다.")
    } else if (id.length > 5 && id.length < 21 && password.length < 5 && password.length > 21) {
      return alert("유효하지 않은 password입니다.")
    } else {
      return alert("유효하지 않은 id와 password입니다.")
    }
  };

  useEffect(() => {
    if (id === "") {
      idValue.current.innerText = "";
    } else if (id.length > 5 && id.length < 21) {
      idValue.current.innerText = "";
    } else {
      idValue.current.innerText = "유효하지 않은 id입니다."
    } 

    if (password === "") {
      passwordValue.current.innerText = "";
    } else if (password.length > 5 && password.length < 21) {
      passwordValue.current.innerText = "";
    } else {
      passwordValue.current.innerText = "유효하지 않은 password입니다."
    }
  });

  return (
    <div>
      <div>
        <input
          type="text"
          placeholder='6글자 이상 20글자 이하'
          onChange={(e) => setId(e.target.value)}
          />
      <span ref={ idValue } style={{color: "red"}}></span>
      </div>
      <div>
        <input
        type="password"
        placeholder='12글자 이상 20글자 이하'
        onChange={(e) => setPassword(e.target.value)}
        />
        <span ref={ passwordValue } style={{color: "red"}}></span>
      </div>
      <button type="button" onClick={handleClick} disabled={false}>회원가입</button>
    </div>
  );
}


