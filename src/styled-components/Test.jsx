// react 
import React, { useState } from 'react';
// style
import { TestStyle } from './TestStyle';

export default function Test() {
  
  const [colorState, setColorState] = useState(false)

  return (
    <TestStyle colorState={colorState}>
      <div className="title">
        TEST
      </div>
      <button onClick={() => setColorState(prev => !prev)}>
        CHANGE
      </button>
    </TestStyle>
  )
}
