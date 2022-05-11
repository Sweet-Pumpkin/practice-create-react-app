import React, { ReactNode } from 'react';

function Div (props: { name1: string, children: ReactNode }) {
  return (
    <div>
      div: { props.name1 } <br />
      { props.children }
    </div>
  );
}

export default Div;