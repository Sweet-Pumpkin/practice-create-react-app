import React, { useState, useRef, useEffect} from 'react';
import { Link } from 'react-router-dom';

export default function Practice10(props) {
  const idInput = useRef(null);
  const pwInput = useRef(null);

  const [id, setId] = useState("");
  const [pw, setPw] = useState("");
  const [idText, setIdText] = useState("");
  const [pwText, setPwText] = useState("");

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
      } else {
        setPw("");
        pwInput.current.focus();
        alert("유효하지않은 비밀번호입니다.");
      } 
    } else if (pw.length > 5 && pw.length < 21) {
        if (id.length > 21 || id.length < 6) {
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

  useEffect(() => {
    // id text
    if (id.length > 0 && id.length < 6) {
      setIdText("유효하지않은 아이디입니다.")
    } else if (id.length > 5 && id.length < 21) {
      setIdText("사용가능한 아이디입니다.")
    } else if (id.length > 20) {
      setIdText("유효하지않은 아이디입니다.")
    } else {
      setIdText("");
    }

    // pw text
    if (pw.length > 0 && pw.length < 6) {
      setPwText("유효하지않은 비밀번호입니다.");
    } else if (pw.length > 5 && pw.length < 21) {
      setPwText("사용가능한 비밀번호입니다.");
    } else if (pw.length > 20) {
      setPwText("유효하지않은 비밀번호입니다.");
    } else {
      setPwText("");
    }
  }, [id, pw]);

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
        <span>{ idText }</span>
      </div>
      <div>
        <input 
          type="password" 
          ref={ pwInput }
          value={ pw }
          onChange={(e) => setPw(e.target.value)}
          placeholder="6자 이상 20자 이하"
        />
        <span>{ pwText }</span>
        </div>
        { 
          id.length > 5 && id.length < 21 &&
          pw.length > 5 && pw.length < 21 ? 
          <Link to="/login">
            <button onClick={() => {props.idValue(id)}}>회원가입</button>
          </Link> : 
          <button onClick={handleClick}>회원가입</button>
        }
    </>
  )
}