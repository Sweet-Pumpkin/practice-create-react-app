import React from "react";

const names = [{
  name: 'hello',
}, {
  name: 'jin',
}, {
  name: 'bye',
}];

const App = () => {
  const [result, setResult] = React.useState<string[]>([]);
  return (
    <>
      { result }
      <button type='button' onClick={() => {
        setResult([...result, ...names.map(({ name }) => name)]);
      }} />
    </>
  );
}

export default App;