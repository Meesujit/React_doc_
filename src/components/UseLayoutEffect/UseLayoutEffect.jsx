import React, { useLayoutEffect, useState } from 'react'
// Explanation: Similar to useEffect, but it fires synchronously after all DOM mutations. Use it when you need to measure layout or sync with DOM before the browser paints.

const UseLayoutEffect = () => {
    const [count, setCount] = useState(0);
    
    useLayoutEffect(() => {
        console.log(count);
        
    }, [count]);
    return (
        <div className="">
            <h1>UseLayoutEffect</h1>
            <button onClick={() =>{
                setCount(count + 1)
            }}>Increment {count}</button>
        </div>
    )
  }

  export default UseLayoutEffect