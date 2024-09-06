import React, { useId } from 'react';
// Explanation: Generates a unique ID for accessibility attributes like id or aria-labelledby.


export default function UseId() {
  const id = useId();
  const id2 = useId();

  return (
    <div>
        <h2>UseId</h2>
      <label htmlFor={id}>Name: </label>
      <input id={id} type="text" />
      <br />
      <label htmlFor={id2}>checkbox: </label>
      <input id={id2} type="checkbox" />
    </div>
  );
}
