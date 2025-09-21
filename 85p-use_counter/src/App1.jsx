import React, { useState, useEffect, useRef } from 'react';

function Timer() {
  const [count, setCount] = useState(0);
  const [intervalId, setIntervalId] = useState(null);

  console.log('렌더링 발생! (State 버전)');

  const startTimer = () => {
    if (!intervalId) {
      console.log('타이머 시작!');
      const id = setInterval(() => {
        setCount((c) => c + 1);
      }, 1000);
      setIntervalId(id);
    }
  };

  const stopTimer = () => {
      console.log('타이머 중지!');
      clearInterval(intervalId);
      setIntervalId(null);
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
