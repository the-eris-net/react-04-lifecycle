import React, { useState, useEffect, useRef } from 'react';

function Sub() {
  const [text, setText] = useState('');
  const [offsetWidth, setOffsetWidth] = useState(0);
  const [rectWidth, setRectWidth] = useState(0);
  const spanRef = useRef(null);

  useEffect(() => {
    setOffsetWidth(spanRef.current.offsetWidth);
    setRectWidth(spanRef.current.getBoundingClientRect().width);
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
        <span ref={spanRef} style={{ border: '1px solid blue' }}>
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
