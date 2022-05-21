import React, { useState, useRef } from 'react'

export default function Practice10() {
  const idInput = useRef(null);
  const pwInput = useRef(null);
  const idText = useRef(null);
  const pwText = useRef(null);

  const [id, setId] = useState("");
  const [pw, setPw] = useState("");
  const handleClick = () => {
    if (id === "" && pw === "") {
      alert("아이디와 비밀번호를 입력하세요.")
    } else if (id === "") {
      alert("아이디를 입력하세요.")
    } else if (pw === "") {
      alert("비밀번호를 입력하세요.")
    } else if (id.length > 5 && id.length < 21) {
      if (pw.length > 5 && pw.length < 21) {
        setId("");
        setPw("");
        alert("회원가입 완료.");
      } else {
        setPw("");
        pwInput.current.focus();
        alert("유효하지않은 비밀번호입니다.");
      } 
    } else if (pw.length > 5 && pw.length < 21) {
      console.log("3p")
      if (id.length <= 5 && id.length >= 21) {
        console.log("2p")
        setId("");
        idInput.current.focus();
        alert("유효하지않은 아이디입니다.")
      }
    } else {
      setId("");
      setPw("");
      idInput.current.focus();
      alert("유효하지않은 아이디와 비밀번호입니다.")
    }
  }

  // id text
  if (id.length === 0) {
    console.log("sex")
  } else if (id.length > 0 && id.length < 6) {
    idText.current.innerText = "유효하지않은 아이디입니다.";
    idText.current.style.color = "red";
  } else if (id.length > 5 && id.length < 21) {
    idText.current.innerText = "사용가능한 아이디입니다.";
    idText.current.style.color = "green";
  } else if (id.length > 20) {
    idText.current.innerText = "유효하지않은 아이디입니다.";
    idText.current.style.color = "red";
  }

  // pw text
  if (pw.length === 0) {
    console.log("fuck")
  } else if (pw.length > 0 && pw.length < 6) {
    pwText.current.innerText = "유효하지않은 비밀번호입니다.";
    pwText.current.style.color = "red";
  } else if (pw.length > 5 && pw.length < 21) {
    pwText.current.innerText = "사용가능한 비밀번호입니다.";
    pwText.current.style.color = "green";
  } else if (pw.length > 20) {
    pwText.current.innerText = "유효하지않은 비밀번호입니다.";
    pwText.current.style.color = "red";
  }

  return (
    <>
      <div>
        <input 
          type="text" 
          ref={ idInput }
          value={ id }
          onChange={(e) => setId(e.target.value)}
          placeholder="6자 이상 20자 이하"
        />
        <span ref={ idText }></span>
      </div>
      <div>
        <input 
          type="password" 
          ref={ pwInput }
          value={ pw }
          onChange={(e) => setPw(e.target.value)}
          placeholder="6자 이상 20자 이하"
        />
        <span ref={ pwText }></span>
      </div>
      <button onClick={ handleClick }>회원가입</button>
    </>
  )
}
