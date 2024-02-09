import React, { memo, useEffect, useState } from 'react'

function Child({count}) {

  const [arr,setArr] = useState([])

  useEffect(()=>{
    setArr(prevItems => [...prevItems, count])
  },[count])
  return (
    <>
    <div>Render cont on Child: {count}</div>
    {
      arr.length > 0 && 
        arr.map((i) => (
          
            i >0 && (<li>
              {i}
            </li>  )
          
          
        ))
        
    }
    </>
  )
}

export default memo(Child)