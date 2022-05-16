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
  someOnClick: React.MouseEventHandler<HTMLDivElement>;
}) => {
  return (
      <div onClick={() => props.someOnClick(user)}>
        id : { props.user.id }<br />
        name : { props.user.name }
      </div>
    );
  }
  
const Practice05 = () => {
  const handleClickCard = (user : any) => {
    alert(user.name);
  }
    return (
      <>
        {users.map((user) => {
          return (
            <Card user={user} key={user.id} someOnClick={handleClickCard} />
          );
        })}
      </>
    );
  };
  
  export default Practice05;