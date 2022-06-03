import { createContext, useContext } from "react"; 

const defaultName = { 
  name: 'jin',  
}; 

const defaultId = {
  id: 'woorung'
}

const UserContextName = createContext(defaultName); 
const UserContextId = createContext(defaultId);

const HelloName = () => { 
  const { name } = useContext(UserContextName); 
  console.log("name: " + name );
  return ( 
    <div> 
      this is HelloName. and Name is { name } 
    </div> 
  ); 
};

const HelloId = () => {
  const { id } = useContext(UserContextId); 
  console.log("id: " + id ); 
  return ( 
    <div> 
      this is HelloId. and Id is { id } 
    </div> 
  ); 
}; 
// App.tsx 
const App = () => ( 
  <UserContextName.Provider value={defaultName} > 
    <UserContextId.Provider value={defaultId}>
      <HelloId /> 
      <HelloName />
    </UserContextId.Provider> 
  </UserContextName.Provider> 
); 

export default App;