import React, { useState, useEffect, useRef } from 'react';

function Sub() {
  const [text, setText] = useState('');

  useEffect(() => {
    const handler = setTimeout(() => {
      console.log(text);
    }, 300);

    return () => clearTimeout(handler);
  }, [text]);

  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="검색어 입력"
      />
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
