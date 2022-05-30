import { createContext, useContext, useState } from "react"; 
const NameContext = createContext(''); 

const Hello1 = () => { 
  const name = useContext(NameContext); 
  return ( 
    <div> 
      this is Hello1. and Name is {name} 
      <Hello4 /> 
    </div> 
  ); 
}; 
const Hello4 = () => { 
  const name = useContext(NameContext); 
  return ( 
    <div> 
      this is Hello4 
      <div>Hello {name}!</div> 
    </div> 
  ); 
}; 
const App = () => {
  const [value, setValue] = useState('');
  return (
    <>
      <NameContext.Provider value={value} > 
      <Hello1 />
      </NameContext.Provider> 
      <input type="text" onChange={e => setValue(e.target.value)} />
    </>

  ); 
}; 
export default App;