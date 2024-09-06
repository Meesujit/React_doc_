import React, { useState, useCallback } from 'react'
import List from './List';

const UseCallBack = () => {
    const [number , setNumber] = useState(1);
    const [dark, setDark] = useState(false);

    const getItems = useCallback(() => {
        return [number, number + 1, number + 2];
    },[number]);

    const theme = {
        backgroundColor: dark ? '#333' : '#FFF',
        color: dark ? '#FFF' : '#333'
    }
  return (
    <>
    <h2>UseCallBack</h2>
    <div style={theme}>
        <input 
        type="number"
        value={number}
        onChange={(e) => setNumber(e.target.value)} />

        <button onClick={() => setDark(prevDark => !prevDark)}>
            Toggle Theme
        </button>
        <List getItems={getItems} />
    </div>
    </>
  )
}

export default UseCallBack