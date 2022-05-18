import React, { useState } from 'react'

const Item = ({name, age}) => {
  return (
    <li>
      name: {name} / age: {age}
    </li>
  )
}

const url = "https://raw.githubusercontent.com/techoi/raw-data-api/main/simple-api.json";

export default function Mocking() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const handleClick = () => {
    fetch(url)
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        setData(json.data);
      })
      .catch((error) => {
        setError(`Something Wrong: ${error}`);
      });
  }

  const handleClick2 = () => {
    fetch('/login')
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        console.log(JSON.stringify(json));
      });
  }

  if (error) {
    return <p>{ error }</p>;
  }

  return (
    <div>
      <button onClick={handleClick}>데이터 가져오기</button>
      <button onClick={handleClick2}>데이터 가져오기2</button>
      { data && (
        <ul>
          {data.people.map(person => (
            <Item key={`${person.name}-${person.age}`} name={person.name} age={person.age} />
          ))}
        </ul>
      ) }
    </div>
  )
}
