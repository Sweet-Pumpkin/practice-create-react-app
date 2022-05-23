import React, { useState, useEffect } from 'react'

export default function Practice11() {
  const [value, setValue] = useState('');
  useEffect(() => {
    const a = setTimeout(() => console.log("3초 뒤 실행됩니다."), 0);
    const b = setTimeout(() => console.log("2초 뒤 실행됩니다."), 1000);
    const c = setTimeout(() => console.log("1초 뒤 실행됩니다."), 2000);
    const d = setTimeout(() => console.log(value), 3000);
    return () => {
      clearTimeout(a);
      clearTimeout(b);
      clearTimeout(c);
      clearTimeout(d);
    }
  }, [value]);
  return (
    <>
      <input 
        type="number"
        onChange={(e) => {setValue(e.target.value)}}
      />
      <br />
      {`초 뒤 실행됩니다.`}
      <br/>
      {`예상 값: ${value}`}
      <br />
      {`출력 값: `}
    </>
  )
}
