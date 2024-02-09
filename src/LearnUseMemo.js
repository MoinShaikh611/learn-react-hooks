import React, { useMemo, useState } from 'react'

function slowFunction(number){
    console.log('doubling');
    for (let index = 0; index < 100000000; index++) {}
    return number * 2
}
function LearnUseMemo() {
    const [number,setNumber] = useState(1);
    const [dark,setDark] = useState(false);
    // const doubleNUmber = useMemo(() => {
    //     return slowFunction(number)
    // },[number]);
    const doubleNUmber = slowFunction(number)

    const themeStyles ={
        backgroundColor: dark ? 'black' : 'white',
        color:dark ? 'white' : 'black'
    }

    return (
        <>
        <input type="number" value={number} onChange={e => setNumber(parseInt(e.target.value))} />
        <button onClick={() => setDark(prevDark => !prevDark)}>Change theme</button>
            <div style={themeStyles}>{doubleNUmber}</div>
        </>
    )
}
export default LearnUseMemo;

