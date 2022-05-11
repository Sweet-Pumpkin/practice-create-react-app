import React, { ReactNode } from 'react';

function Div (props: { 
  name1: string, 
  span1: ReactNode, 
  span2: ReactNode,
}) 

{
  return (
    <div>
      { props.span1 }<br />
      { props.name1 }<br />
      { props.span2 }
    </div>
  );
}

export default Div;