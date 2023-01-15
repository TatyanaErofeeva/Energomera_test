import 'leaflet/dist/leaflet.css';
import { useEffect, useState } from 'react';
import {Map} from './components/map';
import { Polygons } from './types/polygon';
import { Spinner } from './components/spinner';

function App() {
  const [polygons, setPolygons] = useState<Polygons | null>(null);

  useEffect(() => {
    const data = 
    fetch('http://agro.energomera.ru:3060/api/field?lastChangeDate=2022-01-01T10:00:00.000&skip=0&take=100') 
      .then(response => response.json())
      .then(json => {
        json.forEach((item:any) => item.Location = JSON.parse(item.Location));
        return json
      })
    data.then(result => setPolygons(result));
  }, []);

  if (!polygons) {
    return <Spinner />
  }
  
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <Map polygons={polygons}/>
        </div>
      </header>
    </div>
  );
}

export default App;
