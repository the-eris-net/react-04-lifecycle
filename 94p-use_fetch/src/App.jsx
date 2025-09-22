import React, { useState, useEffect, useRef } from 'react';

function Country({ name, url }) {
  return (
    <div>
      <h3>{name}</h3>
      <img src={url} alt={name} />
    </div>
  );
}

function useDebounce(delay = 300) {
  const [value, setValue] = useState('');
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => setDebouncedValue(value), delay);
    return () => clearTimeout(handler);
  }, [value, delay]);

  return [value, debouncedValue, setValue];
}

function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!url) return;
    setLoading(true);
    fetch(url)
      .then((res) => {
        if (!res.ok) throw new Error('데이터가 없습니다.');
        return res.json();
      })
      .then((data) => setData(data))
      .catch(() => setData(null))
      .finally(() => setLoading(false));
  }, [url]);

  return [data, loading];
}

function App() {
  const [text, debouncedText, setDebouncedText] = useDebounce();
  const url = debouncedText
    ? `https://restcountries.com/v3.1/name/${debouncedText}`
    : null;
  const [countries, loading] = useFetch(url);

  if (loading) return <p>로딩중...</p>;

  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={(e) => setDebouncedText(e.target.value)}
        placeholder="검색어 입력"
      />
      {countries &&
        countries.map((country) => (
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
