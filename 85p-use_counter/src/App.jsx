import React, { useState, useEffect, useRef } from 'react';

function Timer() {
  const [count, setCount] = useState(0);
  const intervalRef = useRef(null);

  console.log('렌더링 발생! (Ref 버전)');

  const startTimer = () => {
    if (!intervalRef.current) {
      console.log('타이머 시작!');
      intervalRef.current = setInterval(() => {
        setCount((c) => c + 1);
      }, 1000);
    }
  };

  const stopTimer = () => {
    console.log('타이머 중지!');
    clearInterval(intervalRef.current);
    intervalRef.current = null;
  };

  return (
    <div>
      <p>카운트: {count}</p>
      <button onClick={startTimer}>시작</button>
      <button onClick={stopTimer}>중지</button>
    </div>
  );
}

function App() {
  const [visible, setVisible] = useState(false);
  const handleToggle = () => setVisible(!visible);

  return (
    <>
      <button onClick={handleToggle}>{visible ? '숨기기' : '보이기'}</button>
      {visible && <Timer />}
    </>
  );
}

export default App;
