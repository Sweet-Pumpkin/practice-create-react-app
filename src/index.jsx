import React from 'react';
import ReactDOM from 'react-dom/client';
import Mocking from './practice/220518/Mocking';

// Start the mocking conditionally.
if (process.env.NODE_ENV === 'development') {
  const { worker } = require('./mocks/browser')
  worker.start()
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Mocking />
)