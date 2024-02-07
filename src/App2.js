import React,{useState} from 'react';
import './style.css';

export default function App2() {
  console.log('app2 called');
  const [incr,setincr] = useState(0)
  function updateHandler(){
    setincr((prev) => prev + 1)
  }
  return (
    <div>
      <h1>{incr}</h1>
      <button onClick={updateHandler}>update</button>
    </div>
  );
}
