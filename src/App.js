/* import Iss from './API/Iss';
import West from './API/West';

const App = () => {
  return (
    <div>
      <p>
        <Iss />
      </p>
      <p>
        <West />
      </p>
    </div>
  );
};

export default App; */

//! new training - multiple returns

import { useState, useEffect } from 'react';
const url = 'http://api.open-notify.org/iss-now.json';

const App = () => {
  const [loading, setLoading] = useState(true);
  const [longitude, setLongitude] = useState('');
  const [latitude, setLatitude] = useState('');

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => data['iss_position'])
      .then((position) => {
        setLatitude(position['latitude']);
        setLongitude(position['longitude']);
      });
    setLoading(false);
  }, []);

  if (loading) {
    return <h2>Loading screen</h2>;
  }

  return (
    <>
      <h2>Longitude</h2>
      <p>{longitude}</p>
      <h2>Latitude</h2>
      <p>{latitude}</p>
    </>
  );
};

export default App;
