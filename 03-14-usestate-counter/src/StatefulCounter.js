
import React, { useState } from 'react';

const StatefulCounter = () => {
  
  const [count, setCount] = useState(0);

  
  const handleIncrement = () => {
    setCount(count + 1);
  };

  
  return (
    <div>
      <button onClick={handleIncrement}>Increment</button>
      <p>Count: {count}</p>
    </div>
  );
};

export default StatefulCounter;
