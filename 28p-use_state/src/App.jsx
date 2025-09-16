import { useState } from "react";

// function App() {
//   let count = 0;

//   return (
//     <div>
//       <h1>Count: {count}</h1>
//       <button onClick={() => count++}>+</button>
//       <button onClick={() => count--}>-</button>
//     </div>
//   );
// }

// function App() {
//   let [count, setCount] = useState(0);

//   return (
//     <div>
//       <h1>Count: {count}</h1>
//       <button onClick={() => count++}>+</button>
//       <button onClick={() => count--}>-</button>
//     </div>
//   );
// }

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button>
    </div>
  );
}


export default App;
