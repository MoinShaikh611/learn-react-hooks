import React, { useEffect, useState } from 'react'

function LearnUseEffect() {
  const [windowWidth,setwindowWidth] = useState(window.innerWidth);

  const handleResize =() => {
    setwindowWidth(window.innerWidth)
    console.log(window.innerWidth)
  }
  useEffect(()=>{
    window.addEventListener("resize",handleResize)
    return () =>{
      window.removeEventListener("resize",handleResize)
    }
  },[])
  return (
    <>
    <h1>{windowWidth}</h1>
    </>
  )
}

export default LearnUseEffect