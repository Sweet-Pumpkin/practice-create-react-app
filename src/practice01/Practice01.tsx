import React from 'react';
import Div from './Div';
import Span from './Span';

function Practice01 () {
  return (
    <div className='App'>
        <Div name1="name1">
          <Span name1="name1" name2="name2"/>
        </Div>
    </div>
  );
}

export default Practice01;