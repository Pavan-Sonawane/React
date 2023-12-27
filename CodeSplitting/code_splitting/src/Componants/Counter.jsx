import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };
  
  return (
    <div style={{backgroundColor:'cyan',display:'block'}}>
      <h1  style={{fontWeight:'bold', color:'blue',fontSize:70, marginTop:70, padding:20}}>Code Splitting</h1>
      <p style={{color:'orange', fontSize:100,fontWeight:'bolder'}}> {count}</p>
      <button onClick={decrement} style={{padding:20,backgroundColor:'black', color:'white'}}>Decrement</button>
      <button onClick={increment} style={{padding:20,backgroundColor:'grey', margin:10}}>Increment</button>
    </div>
  );
};

export default Counter;
