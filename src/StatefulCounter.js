import React, { useState } from 'react';

function StatefulCounter() {
const [count, setCount] = useState(0);


const onButtonClick = () => {
    setCount(count+1)
}

return (
    <div>
        <button onClick={ onButtonClick }>Add 1</button>
        { count }
    </div>
)
}



export default StatefulCounter;

