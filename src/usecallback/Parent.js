import React, { useCallback, useState } from 'react'
import Child from './Child'

function Parent() {
  const [incre,setIncre] = useState(0)
  const [incre2,setIncre2] = useState(0)
  
  const increment = () => {
    setIncre(prev => prev + 1)
    if(incre % 10 === 0){
      setIncre2(prev => prev = incre)
    }else{
      return;
    }
  }
  const func = useCallback(() => console.log("hello"),incre);
    
  
  
  return (
    <>
      <button onClick={increment}>increment {incre}</button>
      <div>Render cont on Parent:{incre}</div>
      <Child fun={func} count={incre2}/>
    </>
  )
}

export default Parent