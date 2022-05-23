import React from 'react';
import ReactDOM from 'react-dom/client';
import Practice from './practice/220523/Practice11';

// import Mocking from './practice/220518/Mocking';
// import Counter from './features/counter/Counter';
// import Counter2 from './practice/220518/Counter2';

// import { Provider } from 'react-redux';
// import store from './store/store';

// Start the mocking conditionally.
if (process.env.NODE_ENV === 'development') {
  const { worker } = require('./mocks/browser')
  worker.start()
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <Provider store={ store }>
  //   <Mocking />
  //   <Counter />
  //   <br />
  //   <Counter2 />
  // </Provider>
    <Practice />
)