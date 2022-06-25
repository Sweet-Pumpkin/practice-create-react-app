// react 
import React, { useState } from 'react';
// components
import Welcome from './Welcome';
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
      <Welcome colorState={colorState}/>
    </TestStyle>
  )
}
