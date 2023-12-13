import React, { useState } from "react";

function StatefulCounter(){
    const [count, setCount] = useState(0);
    return (
        <div>
            <h2>{count}</h2>
            <button onClick={() => setCount(count + 1)}>+1</button>
        </div>
    )
}

export default StatefulCounter;