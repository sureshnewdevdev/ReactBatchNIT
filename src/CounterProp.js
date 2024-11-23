import React, { useState } from 'react';

 

const Counter = ({ initialCount }) => {
  // State to manage the counter value
  const [count, setCount] = useState(initialCount);

  // Handlers to modify state
  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(initialCount);

  return (
    <div>
      <h2>Counter: {count}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement} style={{ marginLeft: '10px' }}>
        Decrement
      </button>
      <button onClick={reset} style={{ marginLeft: '10px' }}>
        Reset
      </button>
    </div>
  );
};

export default CounterProp;
