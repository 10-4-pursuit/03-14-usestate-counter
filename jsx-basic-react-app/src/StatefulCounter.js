import React, { useState } from 'react'

const StatefulCounter = () => {
    
    const [count, setCount] = useState(0)
    const [count2, setCount2] = useState(0)
    const [count3, setCount3] = useState(0)
return (
    <>
     <h1>Stateful Counter</h1>
     <p >Count: {count}</p>
     <button  onClick={() => setCount(count + 1)}>Count: {count}</button>
     <p>Count2: {count2}</p>
     <button onClick={() => setCount2(count2 + 2)}>Count2: {count2}</button>
     <p>Count3: {count3}</p>
     <button onClick={() => setCount3(count3 + 3)}>Count3: {count3}</button>
    </>
)
}

export default StatefulCounter
