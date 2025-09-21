import React, { useState, useEffect } from 'react';

function Sub() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('useEffect([]): DOM에 마운트 완료');

    return () => {
      console.log('useEffect([]): 컴포넌트 제거');
    };
  }, []);

  useEffect(() => {
    console.log('useEffect(): 업데이트 완료');
  });

  useEffect(() => {
    console.log('useEffect([count]): 업데이트 완료');
    console.log('현재 count:', count);
  }, [count]);

  console.log('render: UI 그리기');

  return (
    <div>
      <h2>자식 컴포넌트 : {count}</h2>
      <button onClick={() => setCount(count + 1)}>count 증가</button>
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
