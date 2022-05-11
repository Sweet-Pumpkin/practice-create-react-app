import React from 'react';

function Span (props: { name1: string, name2: string }) {
  return (
    <span>
      span: {props.name1} {props.name2}
    </span>
  );
}

export default Span;