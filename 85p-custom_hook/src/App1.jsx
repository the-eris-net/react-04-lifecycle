import React, { useState, useEffect, useRef } from 'react';

function Sub() {
  const [count, setCount] = useState(0);
  const [left, setLeft] = useState(0);
  const [right, setRight] = useState(0);

  useEffect(() => {
    setCount(count + 1);
  }, [left, right]);

  return (
    <div>
      <p>카운트: {count}</p>
      <button onClick={() => setLeft(left + 1)}>
        왼쪽 버튼: {left}
      </button>
      <button onClick={() => setRight(right + 1)}>
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
      <button onClick={handleToggle}>
        {visible ? '숨기기' : '보이기'}
      </button>
      {visible && <Sub />}
    </>
  );
}

export default App;
