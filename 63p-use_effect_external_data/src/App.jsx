import React, { useState, useEffect } from 'react';

function Country({ name, url }) {
  return (
    <div>
      <h3>{name}</h3>
      <img src={url} alt={name} />
    </div>
  );
}

function Sub() {
  const [countryName, setCountryName] = useState('ko');
  const [countries, setCoutries] = useState([]);

  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/name/${countryName}`)
      .then((res) => {
        if (!res.ok) throw new Error('데이터가 없습니다.');
        return res.json();
      })
      .then(setCoutries)
      .catch(() => setCoutries([]));
  }, [countryName]);

  return (
    <div>
      <input
        type="text"
        value={countryName}
        onChange={(e) => setCountryName(e.target.value)}
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
