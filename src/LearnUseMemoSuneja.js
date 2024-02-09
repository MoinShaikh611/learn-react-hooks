import React, { useMemo, useState } from 'react'

function LearnUseMemoSuneja() {

    const [incre,setIncre] = useState(0)
    const [incre2,setIncre2] = useState(0)

    const increment = () =>{
        setIncre(prev => prev + 1)
    }
    const increment2 = () =>{
        setIncre2(prev => prev + 1)
        
    }
    const countEvent = useMemo(()=>{
        let i=0;
        while(i<200000000)i++;
        return  incre % 2 === 0 ? "Even" : "odd"
    },[incre])
    
    return (
    <>
        <button onClick={increment}>increment {incre}</button>
        <br/>
        <p>{countEvent}</p>
        <br/>
        <button onClick={increment2}>incrementWithMemo {incre2}</button>
    </>
  )
}

export default LearnUseMemoSuneja