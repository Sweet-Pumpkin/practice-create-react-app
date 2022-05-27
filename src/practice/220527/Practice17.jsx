import { 
  BrowserRouter, Route, 
  Routes, Link, Navigate, 
} from "react-router-dom";


const Main = () => ( 
  <Link to='/abc'>Hello</Link> 
); 

const Page = () => (
  <div>PAGE</div>
)

export default function App() { 
  return ( 
    <BrowserRouter> 
      <Routes> 
        <Route path="/" element={<Main />} /> 
        <Route path="/page" element={<Page />} /> 
        <Route 
          path="*" 
          element={<Navigate to="/page" replace />} 
        /> 
      </Routes> 
    </BrowserRouter> 
  ); 
};