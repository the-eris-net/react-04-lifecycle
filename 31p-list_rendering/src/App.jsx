import { useState } from 'react';

function TravelItem({ index, item, removeItem }) {
  const [liked, setLiked] = useState(0);

  const handleButtonClick = (e) => {
    e.stopPropagation();
    removeItem(index);
  }

  return (
    <div onClick={() => setLiked(liked + 1)} style={{ userSelect: 'none' }}>
      <b>{index + 1}.</b>
      {item} {liked > 0 ? '❤️ x ' + liked : ''}
      <button onClick={handleButtonClick}>삭제</button>
    </div>
  );
}

function TravelPage({ isVisible }) {
  const [inputValue, setInputValue] = useState('');
  const [items, setItems] = useState([]);

  const handleClick = () => {
    setItems([...items, inputValue]);
    setInputValue('');
  };

  const removeItem = (index) =>setItems(items.filter((_, i) => i !== index));


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
            key={index}
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
