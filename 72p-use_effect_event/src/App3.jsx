import React, { useState, useEffect } from 'react';
import { use } from 'react';

function Sub() {
  const [text, setText] = useState('');
  const [offsetWidth, setOffsetWidth] = useState(0);
  const [rectWidth, setRectWidth] = useState(0);

  useEffect(() => {
    setOffsetWidth(document.getElementById('text-span')?.offsetWidth);
    setRectWidth(document
      .getElementById('text-span')
      ?.getBoundingClientRect()?.width);
  }, [text]);

  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <br />
      <p>
        span :{' '}
        <span id="text-span" style={{ border: '1px solid blue' }}>
          {text}
        </span>
      </p>
      <p>span 가로길이(offsetWidth) : {offsetWidth}px</p>
      <p>span 가로길이(getBoundingClientRect) : {rectWidth}px</p>
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
