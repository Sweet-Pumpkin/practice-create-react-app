import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from './Main';
import Login from './Login'

const App = () => {
  const [id, setId] = useState(null);
  const idValue = (e) => {
    setId(e);
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main idValue={idValue}/>} />
        <Route path="/login" element={<Login id={id} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;