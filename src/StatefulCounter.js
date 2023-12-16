import React from "react";
import { useState } from 'react';


function StatefulCounter() {
    const [count, setCount] = React.useState(0);

    return ( 
        <div>
            <h1>#of Rebels: {count}</h1>

    <button onClick={() => setCount(count + 1)}>Add another rebel</button>
    </div>
    )
  }

  export default StatefulCounter;