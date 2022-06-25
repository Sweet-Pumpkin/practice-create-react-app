import React from 'react';
import { WelcomeStyle } from './WelcomeStyle';

export default function Welcome({ colorState }) {
  return (
    <WelcomeStyle colorState={colorState}>
      <div>Welcome</div>
    </WelcomeStyle>
  )
}
