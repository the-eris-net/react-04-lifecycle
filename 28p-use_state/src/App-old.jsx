import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  handleIncrease = () => {
    setCount(count + 1);
  };
  handleDecrease = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={handleIncrease}>+</button>
      <button onClick={handleDecrease}>-</button>
    </div>
  );
}

export default App;
