import React, { useState } from 'react';

function onmyclick()
{
    
}
function Counter() {
  const [count, setCount] = useState(0); // Initialize state with 0
  
  return (
    <div>
      <p>Current Count: {count}</p>
      <button onClick='onmyclick()'>Increment</button>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button disabled={count == 0}  onClick={() => setCount(count - 1)  }>Decrement</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}

export default Counter;
