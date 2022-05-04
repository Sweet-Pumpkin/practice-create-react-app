import React, { useState } from "react";
import "./App.css";

function App() {
  // ES6+ 문법
  const [List, setList] = useState([0]);
  const [Target, setTarget] = useState(1);
  const ListFunction = () => {
    // let temp = [ ...List ];
    // temp.push(Target);
    setList((arr) => [...arr, Target]);
    setTarget(Target + 1);
  }

  return (
    <div>
      <p>리스트</p>
      {
        List.map((element, index) => {
          return(
            <p key={index}>{element} : {index},</p>
          );
        })
      }
      <p>Target : {Target}</p>
      <br />
      <button 
        onClick={ListFunction}
      >
        Click
      </button>
    </div>
  );
}
export default App;