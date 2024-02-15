import { useState } from "react";

function StatefulCounter() {
    const [count, setCount] = useState(0);

    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            
        </div>
    )
    }
    export default StatefulCounter;