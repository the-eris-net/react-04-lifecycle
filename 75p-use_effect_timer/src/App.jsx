import React, { useState, useEffect, useRef } from 'react';

function Sub({ setDates }) {
  const [text, setText] = useState("");

  useEffect(() => {
    // value가 바뀌면 delay 후에 반영
    const handler = setTimeout(() => {
      console.log(text);
    }, 300);

    // cleanup: value가 바뀌면 기존 타이머 제거
    return () => clearTimeout(handler);
  }, [text]);


  return (
    <input
      type="text"
      value={text}
      onChange={(e) => setText(e.target.value)}
      placeholder="검색어 입력"
    />
  );
}

function App() {
  const [visible, setVisible] = useState(false);
  const [date, setDates] = useState([]);

  const handleToggle = () => setVisible(!visible);

  return (
    <>
      <button onClick={handleToggle}>
        {visible ? '숨기기' : '보이기'}
      </button>
      {visible && <Sub setDates={setDates} />}
      <ul>
        {date.map((date, index) => (
          <li key={index}>{date}</li>
        ))}
      </ul>
    </>
  );
}

export default App;
