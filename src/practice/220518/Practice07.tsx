import React from 'react';

const arr = Array.from(Array(100), (_, i) => i+1);
const App = () => {
 const [nums, setNums] = React.useState<{[key: string]: string }>({});
 const [result, setResult] = React.useState(0);
 const handleChangeInput: React.ChangeEventHandler<HTMLInputElement> = (e) => {
  setNums({
   ...nums,
   [e.target.name]: e.target.value,
  });
 }

 const handleClickButton = () => {
  setResult(Object.values(nums).reduce((a, b) => a + parseInt(b, 10), 0));
 }

 return (
  <>
   {arr.map((num, i) => (
    <React.Fragment key={num}>
     <input
      type='number'
      name={`input-${num}`}
      onChange={handleChangeInput}
     />
     {i !== arr.length - 1 ? '+' : '='}
    </React.Fragment>
   ))}
   <input type='number' disabled value={result} />
   <button type='button' onClick={handleClickButton}>계산</button>
  </>
 );
}

export default App;