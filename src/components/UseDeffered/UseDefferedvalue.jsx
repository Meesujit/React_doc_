import React, { useDeferredValue, useState } from 'react'

// Explanation: This hook allows you to defer updates to a value to avoid blocking urgent UI updates. It can improve responsiveness in heavy computations or slow renders.

const UseDefferedvalue = () => {
    const [query, setQuery] = useState("");
    const deferredQuery = useDeferredValue(query);
  
    const items = Array.from({ length: 10}, (_, i) => `Item ${i}`);
  
    const filteredItems = items.filter(item => item.includes(deferredQuery));
  
    return (
      <div>
        <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search..." />
        <ul>
          {filteredItems.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    );
}

export default UseDefferedvalue