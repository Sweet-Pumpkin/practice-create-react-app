import React, { useState, useRef } from 'react'

export default function Practice09() {
  const input = useRef(null);
  const [text, setText] = useState("");

  const handleClick = () => {
    setText("");
    input.current.focus();
  }
  
  return (
    <div>
      <span>현재 value는 { text }입니다.</span><br />
      <input type="text" ref={ input } value={ text } onChange={(e) => setText(e.target.value)} />
      <button onClick={handleClick}>RESET</button>
    </div>
  )
}
