import React from 'react';
import Div from './Div';
import Span from './Span';

function Practice01 () {
  return (
    <div className='App'>
        <Div name1="name1" span1={Span()} span2={Span()} />
    </div>
  );
}

export default Practice01;