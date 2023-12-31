import React from 'react';

function StatefulCounter () {
    const [count, setCount] = React.useState(0);
    return <h1>{count} <button onClick={ () => setCount(count + 1) }>Add 1</button></h1>;
}

export default StatefulCounter;