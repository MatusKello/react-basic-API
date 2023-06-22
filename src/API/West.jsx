import { useState, useEffect } from 'react';

const West = () => {
  const [quote, setQuote] = useState('vychodzi text');

  const url = 'https://api.kanye.rest/';

  const getQuote = async () => {
    const response = await fetch(url);
    const data = await response.json();
    const finalQuote = data['quote']; // spytat sa misa
    setQuote(finalQuote);
  };

  useEffect(() => {
    getQuote();
  }, []);

  return (
    <div>
      <h1>{quote}</h1>
      <button onClick={getQuote}>Refresh</button>
    </div>
  );
};

export default West;
