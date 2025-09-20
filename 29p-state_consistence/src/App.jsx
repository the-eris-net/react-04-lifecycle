import { useState } from 'react';

function TravelPage({ isVisible }) {
  const [inputValue, setInputValue] = useState('');
  const [items, setItems] = useState([]);

  const handleClick = () => {
    setItems([...items, inputValue]);
    setInputValue('');
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div>
      <h2>해외여행 버킷 리스트</h2>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={handleClick}>입력</button>
      <div>{items.toString()}</div>
    </div>
  );
}

function Travel() {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div>
      <h1>해외여행가고 싶다</h1>
      <button onClick={() => setIsVisible(!isVisible)}>
        해외여행 버킷 리스트 켜기
      </button>
      <TravelPage isVisible={isVisible} />
    </div>
  );
}

function App() {
  return (
    <div>
      <Travel />
    </div>
  );
}
export default App;
