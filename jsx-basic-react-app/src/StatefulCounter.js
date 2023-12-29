import React from 'react';
import { useState } from 'react';

function StatefulCounter () {
    const [count, setCount] = useState(0);
    const [decrementCount, setDecrementCount] = useState(100);
    
    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>Click me</button>
            <p>You clicked {decrementCount} times</p>
            <button onClick={() => setDecrementCount(decrementCount - 1)}>Click me</button>
        </div>
    )

   
}

export default StatefulCounter