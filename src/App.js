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

/* import { useState, useEffect } from 'react';
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

export default App; */

//! Short circuit evaluation

const App = () => {
  const value = 'david';
  const value2 = 'harry';

  const result1 = value && value2;
  // první je true a druhé jakékoli = se vrací druhá hodnota
  // první je false a druhé jakékoli = vrací se první hodnota
  console.log(result1);

  const result2 = value || 'tomas';
  // první je true a druhé jakékoli = vrací první
  // první je false, tak vrací druhou
  console.log(result2);

  return <div></div>;
};

export default App;
