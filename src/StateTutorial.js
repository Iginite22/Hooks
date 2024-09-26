import React, { useState } from 'react'

export default function StateTutorial() {
  const [counter, setCounter] = useState(0);
  const [inputValue, setInputValue] = useState("Abhay Thakur");
  const increment = () => {
    setCounter(counter + 1);
    console.log(counter);
  }
  let onChange = (e) => {
    setInputValue(e.target.value);
  }
  return (
    <div>
      <button onClick={increment}>Increment</button>
      {counter}
      <div>
        <input placeholder='Enter Something ...' onChange={onChange} />
        {inputValue}
      </div>
    </div>
  )
}
