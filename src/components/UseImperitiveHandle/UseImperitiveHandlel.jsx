import React, { useRef, useImperativeHandle, forwardRef } from 'react';

// Explanation: Customize the instance value that is exposed to parent components when using ref. Use this when you want to control what the parent can access from the child component.

const Input = forwardRef((props, ref) => {
  const inputRef = useRef();

  useImperativeHandle(ref, () => ({
    focus: () => {
      inputRef.current.focus();
    },
  }));

  return <input ref={inputRef} />;
});

const UseImperitiveHandlel = () => {
    const inputRef = useRef();

    return (
      <div>
        <h2>UseImperitiveHanlde</h2>
        <Input ref={inputRef} />
        <button onClick={() => inputRef.current.focus()}>Focus Input</button>
      </div>
  )
}

export default UseImperitiveHandlel