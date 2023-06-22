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

/* const App = () => {
  const value = 'david';
  const value2 = 0;

    const result1 = value && value2;
  // první je true  = se vrací druhá hodnota
  // první je false = vrací se první hodnota
  console.log(result1);

  const result2 = value || 'tomas';
  // první je true  = vrací první hodnotu
  // první je false = vrací druhou hodnotu
  console.log(result2)

  return (
    <div>
      {<h1>{value2 || 'Default text'}</h1>}
      {value2 && <h1>Secret</h1>}
    </div>
  );
};

export default App; */

//! Ternary operator

const App = () => {
  const error = false;

  return (
    <div>
      {error ? (
        <p>chyba</p>
      ) : (
        <div>
          <h2>obsah stranky</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum
            enim reiciendis eligendi dolorem natus nesciunt? Quae mollitia
            aliquam, aliquid sequi, totam quod obcaecati accusamus asperiores
            enim reprehenderit beatae corporis nobis!
          </p>
        </div>
      )}
    </div>
  );
};

export default App;
