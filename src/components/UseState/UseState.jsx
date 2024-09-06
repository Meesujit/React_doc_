import React, { useState } from 'react'

const UseState = () => {

    const [count, setCount] = useState(0);
        function increment() {
            setCount(count + 1);
        }

        function decrement(){
            if(count === 0){
                return ;
            }
            setCount(count - 1);
        }


  return (

    <div>
        <h1>UseState: </h1>
        <button onClick={increment}>
            increment
        </button>
       <p>{count}</p>
       <button onClick={decrement}>decrement</button>
       <hr style={{
              width: '100%',
              margin: '20px 0'
       }} />
    </div>
  )
}

export default UseState