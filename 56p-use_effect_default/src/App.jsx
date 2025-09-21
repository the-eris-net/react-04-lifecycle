import React, { useState, useEffect } from "react";

function Sub() {
  const [count, setCount] = useState(0);

  // 마운트 + 언마운트
  useEffect(() => {
    console.log("componentDidMount: DOM에 마운트 완료");
    console.log("----------------------------------");

    return () => {
      console.log("componentWillUnmount: 컴포넌트 제거");
      console.log("----------------------------------");
    };
  }, []);

  // 업데이트 감지
  useEffect(() => {
    if (count > 0) { // 마운트 직후 실행되는 걸 막기 위해 조건
      console.log("componentDidUpdate: 업데이트 완료");
      console.log("현재 count:", count);
      console.log("----------------------------------");
    }
  }, [count]);

  console.log("render: UI 그리기");

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
      <button onClick={handleToggle}>
        {visible ? "숨기기" : "보이기"}
      </button>
      {visible && <Sub />}
    </>
  );
}

export default App;
