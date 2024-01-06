// StatefulCounter.js
import React, { useState } from 'react';

const StatefulCounter = () => {
  const [count, setCount] = useState(0);
  return (
    <>
        <h1>{count}</h1>
        <button onClick={() => setCount(count + 1)}>Increment</button>
    </>
  );
};

export default StatefulCounter;
