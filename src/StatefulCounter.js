import React from "react";

function StatefulCounter() {
    const [count, setCount] = React.useState(0)
    return (
        <div>
            <h2>{count}</h2>
            <button onClick={ () => setCount(count + 1)}>Increment</button>
            <button onClick={ () => setCount(count - 1)}>Decrement</button>
        </div>
    );
};

export default StatefulCounter;