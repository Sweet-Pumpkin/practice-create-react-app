import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import Practice from './googlemaps/Maps';
import Practice from './styled-components/Test';
// import Mocking from './practice/220518/Mocking';
// import Counter from './features/counter/Counter';
// import Counter2 from './practice/220518/Counter2';

import { Provider } from 'react-redux';
import store from './practice/220603/store02';

// Start the mocking conditionally.
if (process.env.NODE_ENV === 'development') {
  const { worker } = require('./mocks/browser')
  worker.start()
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <Practice />
  </Provider>
);