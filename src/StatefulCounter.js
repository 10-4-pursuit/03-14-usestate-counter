import React from "react";

function StatefulCounter() {
  const [count, setCount] = React.useState(0);
  return (
    <div>
      <h2>{count}</h2>
      <button onClick={() => setCount(count + 1)}>Add 1</button>
    </div>
  );
}
export default StatefulCounter;
