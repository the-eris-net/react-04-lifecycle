import React, { useState, useEffect, useRef } from 'react';

function Country({ name, url }) {
  return (
    <div>
      <h3>{name}</h3>
      <img src={url} alt={name} />
    </div>
  );
}

function useDebounce(value, delay = 300) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => setDebouncedValue(value), delay);
    return () => clearTimeout(handler);
  }, [value, delay]);

  return debouncedValue;
}

function App() {
  const [text, setText] = useState('');
  const debouncedText = useDebounce(text, 300);
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    console.log('데이터 호출');
    fetch(`https://restcountries.com/v3.1/name/${debouncedText}`)
        .then((res) => {
          if (!res.ok) throw new Error('데이터가 없습니다.');
          return res.json();
        })
        .then(setCountries)
        .catch(() => setCountries([]));
  }, [debouncedText]);

  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="검색어 입력"
      />
       {countries.map((country) => (
        <Country
          key={country.name.common}
          name={country.name.common}
          url={country.flags.png}
        />
      ))}
    </div>
  );
}

export default App;
