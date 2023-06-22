import { useState, useEffect } from 'react';

const Iss = () => {
  const url = 'http://api.open-notify.org/iss-now.json';
  const [longitude, setLongitude] = useState('');
  const [latitude, setLatitude] = useState('');
  const [urlMap, setUrlMap] = useState('');

  const getCoordinates = async () => {
    const response = await fetch(url);
    const data = await response.json();
    //const currentCoordinates = data['iss_position']['latitude']['longitude'];
    setLatitude(data['iss_position']['latitude']);
    setLongitude(data['iss_position']['longitude']);
    setUrlMap(
      `https://sk.mapy.cz/zakladni?x=${data['iss_position']['longitude']}&y=${data['iss_position']['latitude']}&z=8`
    );
  };

  useEffect(() => {
    getCoordinates();
  }, []);

  return (
    <div>
      <h1>Longitude: {longitude}</h1>
      <h2>Latitude: {latitude}</h2>
      <button onClick={getCoordinates}>Refresh</button>
      <a href={urlMap} target='_blank'>
        Position ISS in map
      </a>
    </div>
  );
};

export default Iss;
