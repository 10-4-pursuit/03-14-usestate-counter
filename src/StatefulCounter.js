import React, { useState } from "react";

function StatefulCounter() {
    const [count, setCount] = React.useState(0);

    function incrementCount() {
        setCount(prevCount => prevCount + 1)
    }

    function decrementCount() {
        setCount(prevCount => prevCount - 1)
    }

    return (
        <div>
            <button onClick={incrementCount}>+</button>
            <span>{ count }</span>
            <button onClick={decrementCount}>-</button>
        </div>
    )
}



export default StatefulCounter;