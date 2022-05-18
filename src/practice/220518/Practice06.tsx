import React, { useState } from 'react'

export default function Practice06() {
  const [num1, setNum1] = useState<number>(0);
  const [num2, setNum2] = useState<number>(0);
  const [res, setRes] = useState<number>(0);

  const num1Value = (e: React.FormEvent<HTMLInputElement>) => {
    setNum1(Number(e.currentTarget.value));
  }

  const num2Value = (e: React.FormEvent<HTMLInputElement>) => {
    setNum2(Number(e.currentTarget.value));
  }

  const plus = () => {
    setRes(Number(num1) + Number(num2));
  }

  return (
    <>
      <input value={num1} onChange={num1Value} type="number" />
      +
      <input value={num2} onChange={num2Value} type="number" />
      =
      <input value={res} type="number" disabled />
      <button onClick={plus}>계산</button>
    </>
  )
}
