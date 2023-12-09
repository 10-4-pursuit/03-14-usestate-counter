import React, { useState } from 'react';

function StatefulCounter() {
    const [count, setCount] = React.useState(0);
    return (
        <div>
             <h1>{count}</h1>
             <button onClick={() => setCount(count + 1)}>+1</button>
        </div>
    )
}

export default StatefulCounter