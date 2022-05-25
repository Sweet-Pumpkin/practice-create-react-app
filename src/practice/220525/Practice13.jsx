import { BrowserRouter, Route, Routes, Link } from "react-router-dom";

const Hello = () => (
  <>
    <div>Hello!</div>
  </>
);

const Main = () => (
  <>
    <div>MainPage</div>
  </>
);

const Bye = () => (
  <>
    <div>Bye!</div>
  </>
);

const App = () => {
 return (
 <BrowserRouter>
    <Link to='/'><div className="nav">to home</div></Link>
    <Link to='/hello'><div className="nav">to hello</div></Link>
    <Link to='/bye'><div className="nav">to bye</div></Link>
  <Routes>
    <Route path="/" element={<Main />} />
    <Route path="/hello" element={<Hello />} />
    <Route path="/bye" element={<Bye />} />
  </Routes>
 </BrowserRouter>
 );
};

export default App;