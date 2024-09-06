import React, { useState, useMemo } from 'react'

/*
-useMemo is a hook that will only return the memoized value when one of the dependencies has changed.

-if the dependencies have not changed, it will return the last calculated value.

*/
const UseMemo = () => {

    const [number , setNumber] = useState(0);
    const [counter, setCounter] = useState(0);

    function cubeNum(num){
        console.log('Calculating cube of the number')
        return Math.pow(num, 3);
    }

    const result = useMemo(()=>{
        return cubeNum(number);
    },[number]);

  return (
    <div>
        <h1>UseMemo</h1>
        <input 
        type="number" 
        value={number}    
        onChange={(e) => setNumber(e.target.value)}   
        />
        <h1>Cubic of the number: {result}</h1>
        <button onClick={() => {
            setCounter(counter + 1)
        }}>Counter++</button>
        <h2>Counter: {counter}</h2>
    </div>
  )
}

export default UseMemo