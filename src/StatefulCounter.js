import React, {useState} from 'react'

function StatefulCounter() {
    const [count, setCount] = useState(0)
    const increment = () => {
        setCount(count + 1)
    }
  return (
    <>
    <button onClick={increment}>Increment</button>
    <p>{count}</p>
    </>
    
  )
}

export default StatefulCounter