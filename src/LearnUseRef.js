import React, { useEffect, useState,useRef } from 'react'

function LearnUseRef() {
    // it not only useful for accessing DOM element 
    // but they really useful for persisting values 
    // accross renders without actually causing re-renders
    const [name,setName] = useState('')
    const renderCount = useRef(0);
    const prevName = useRef('');
    useEffect(()=>{
        renderCount.current = renderCount.current + 1;
        prevName.current = name;
    },[name]);

    return (
    <div>
        <input  value={name} onChange={(e) => setName(e.target.value)} />
        <p>Name: {name}</p>
        <p>Previous Name: {prevName.current}</p>
        <p>Render count: {renderCount.current}</p>
    </div>
  )
}

export default LearnUseRef;