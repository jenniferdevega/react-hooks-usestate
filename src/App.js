import React, {useState} from 'react';
import './App.css';

const App = () => {
  // useState(0) - 0 is the initial state
  const [counter, setCounter] = useState(0);

  const increment = () => {
    setCounter(counter + 1);
   }

  return (
    <div>
      {counter}
      <button onClick={increment}>Increment</button>
    </div>
  );
}

export default App;
