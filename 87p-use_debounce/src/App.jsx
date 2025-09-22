import React, { useState, useEffect, useRef } from 'react';

function useCounter() {
  const [count, setCount] = useState(0);
  const [left, setLeft] = useState(0);
  const [right, setRight] = useState(0);

  const setter = ({ leftValue = 0, rightValue = 0 }) => {
    setLeft(left + leftValue);
    setRight(right + rightValue);
    setCount(count + 1);
  };

  return [count, left, right, setter];
}

function Sub() {
  const [count, left, right, setCount] = useCounter();

  return (
    <div>
      <p>카운트: {count}</p>
      <button onClick={() => setCount({ leftValue: 1 })}>
        왼쪽 버튼: {left}
      </button>
      <button onClick={() => setCount({ rightValue: 1 })}>
        오른쪽 버튼: {right}
      </button>
    </div>
  );
}

function App() {
  const [visible, setVisible] = useState(false);
  const handleToggle = () => setVisible(!visible);

  return (
    <>
      <button onClick={handleToggle}>{visible ? '숨기기' : '보이기'}</button>
      {visible && <Sub />}
    </>
  );
}

export default App;
