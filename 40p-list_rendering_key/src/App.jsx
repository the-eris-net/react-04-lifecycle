import { useState } from 'react';

function TravelItem({ index, item: { id, value }, removeItem }) {
  const [liked, setLiked] = useState(0);

  const handleButtonClick = (e) => {
    e.stopPropagation();
    removeItem(id);
  };

  return (
    <div onClick={() => setLiked(liked + 1)} style={{ userSelect: 'none' }}>
      <b>{index + 1}.</b>
      {value} {liked > 0 ? '❤️ x ' + liked : ''}
      <button onClick={handleButtonClick}>삭제</button>
    </div>
  );
}

let nextId = 0;

function TravelPage({ isVisible }) {
  const [inputValue, setInputValue] = useState('');
  const [items, setItems] = useState([]);

  const handleClick = () => {
    nextId++;
    setItems([...items, { id: nextId, value: inputValue }]);
    setInputValue('');
  };

  const removeItem = (id) => setItems(items.filter((item) => item.id !== id));

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
      <div>
        {items.map((item, index) => (
          <TravelItem
            key={item.id}
            index={index}
            item={item}
            removeItem={removeItem}
          />
        ))}
      </div>
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
