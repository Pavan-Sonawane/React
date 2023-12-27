
import React, {  useState } from 'react'
function App() {
  return (
    <div className="App">
      <h1>High HighOrderCompo </h1>
      <High cmp={Counter} />
    </div>
  );
}
function High(props)
{
  return <h2 ><props.cmp /></h2>
}


function Counter()
{
  const [count,setCount]=useState(0)

  return<div>
    <h3 style={{color:'magenta',fontSize:100}}>{count}</h3>
    <button onClick={()=>setCount(count+1)} style={{backgroundColor:'green' ,margin:10, padding:20}}>Increase</button>
    <button onClick={()=>setCount(count-1)} style={{backgroundColor:'red', padding:20}}>Decrease</button>

      </div>
}

export default App;