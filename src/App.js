import StatefulCounter from './StatefulCounter';
import './App.css';
import React from'react';
import { useState } from'react';

function App() {


  return (
    <div>
      <StatefulCounter />
     {/* <button onClick={() => setCount(count + 1)}>Add 1</button> */}
    </div>
  );
}

export default App;
