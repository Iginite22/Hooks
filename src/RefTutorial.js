import React, { useRef } from 'react'

export default function RefTutorial() {
  const inputRef = useRef(null);
  const onClick = () => {
    console.log(inputRef.current.value);
    inputRef.current.focus();
  }
  return (
    <div>
      <h1>Abhay Thakur</h1>
      <input type="text" placeholder='write something....' ref={inputRef} />
      <button onClick={onClick}>Change Name</button>
    </div>
  )
}
