import React, { useState, useTransition } from 'react'

const UseTransition = () => {
    const [query, setQuery] = useState('');
    const [filteredItems, setFilteredItems] = useState([]);
    const [isPending, startTransition] = useTransition(false);

    const item = Array.from({length: 2000}, (_, i) => `item ${i + 1}`);

    const handleInputChange = (e) => {
        const value = e.target.value;
        setQuery(value);

        startTransition(() => {
            const filtered = item.filter((item) => item.includes(value));
            setFilteredItems(filtered);
        })
    }
  return (
    <div>
        <h1>UseTransition</h1>
        <input 
        type="text"
        value={query}
        onChange={handleInputChange}
        placeholder='filter items......'
          
        />

        {isPending && <p>loading....</p>}

        <ul>
            {filteredItems.map((item) => {
                <li key={index}>{item}</li>
            })}
        </ul>
    </div>
  )
}

export default UseTransition