import React, { useState, useEffect } from 'react'

export default function Practice11() {
  const [value, setValue] = useState('');
  const [num, setNum] = useState(0);
  const [res, setRes] = useState('');

  useEffect(() => {
      if (value === "") {
        setNum(0);
      } else {
        const a = setInterval(() => setNum(prev => prev + 1), 1000);
        const e = setTimeout(() => {
          clearInterval(a);
          setRes(value);
        }, 3000);

        return () => {
          clearInterval(a);
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
      { 3 - num }
      <br/>
      {`예상 값: ${ value }`}
      <br />
      {`출력 값: ${ res }`}
    </>
  )
}
