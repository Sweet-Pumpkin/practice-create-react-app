import React, { useState, useEffect } from 'react'

export default function Practice11() {
  const [value, setValue] = useState('');
  const [num, setNum] = useState("값을 입력하세요.");
  const [res, setRes] = useState("");
  useEffect(() => {
    if (value === "") {
      return setNum("값을 입력하세요.")
    } else {
      const a = setTimeout(() => setNum("3초 뒤 실행됩니다."), 0);
      const b = setTimeout(() => setNum("2초 뒤 실행됩니다."), 1000);
      const c = setTimeout(() => setNum("1초 뒤 실행됩니다."), 2000);
      const d = setTimeout(() => setNum("실행 완료"), 3000);
      const e = setTimeout(() => setRes(value), 3000);
      return () => {
        clearTimeout(a);
        clearTimeout(b);
        clearTimeout(c);
        clearTimeout(d);
        clearTimeout(e);
      }
    }
  }, [value]);
  return (
    <>
      <input 
        type="number"
        onChange={(e) => {setValue(e.target.value)}}
      />
      <br />
      { num }
      <br/>
      {`예상 값: ${ value }`}
      <br />
      {`출력 값: ${ res }`}
    </>
  )
}
