import React, { useState, useEffect, useRef } from 'react';

function Sub({ setDates }) {
  useEffect(() => {
    window.addEventListener('keyup', (e) => {
      if (e.key.toUpperCase() === 'A') {
        setDates((prev) => [...prev, new Date().toISOString()]);
      }
    });
  }, []);

  return <div>키워드 등록!</div>;
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
