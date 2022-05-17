import React from 'react';
const users =  [
  {
    name: 'kim',
    id: 5,
  }, {
    name: 'hello',
    id: 6,
  }, {
    name: 'jin',
    id: 7,
  }, {
    name: 'hi',
    id: 10,
  }, {
    name: 'yellow',
    id: 8,
  }
];

const Card = (props: { 
  user: { id: number; name: string },  
}) => {
  return (
      <div>
        id : { props.user.id }<br />
        name : { props.user.name }
      </div>
    );
  }
  
const Practice05 = () => {
    return (
      <>
        {users.map((user) => {
          return (
            <Card user={user} key={user.id} />
          );
        })}
      </>
    );
  };
  
  export default Practice05;