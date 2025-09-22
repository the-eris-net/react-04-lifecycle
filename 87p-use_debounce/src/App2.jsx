import React, { useState, useEffect, useRef } from 'react';

function Country({ name, url }) {
  return (
    <div>
      <h3>{name}</h3>
      <img src={url} alt={name} />
    </div>
  );
}

function App() {
  const [text, setText] = useState('');
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const timer = setTimeout(() => {
      console.log('데이터 호출');
      fetch(`https://restcountries.com/v3.1/name/${text}`)
        .then((res) => {
          if (!res.ok) throw new Error('데이터가 없습니다.');
          return res.json();
        })
        .then(setCountries)
        .catch(() => setCountries([]));
    }, 300);

    return () => clearTimeout(timer);
  }, [text]);

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
