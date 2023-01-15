import 'leaflet/dist/leaflet.css';
import { Polygons} from '../types/polygon';
import { MapContainer, TileLayer} from "react-leaflet";
import { MapConsumer } from './mapconsumer';

type Mapprops = {
  polygons: Polygons
}

export function Map({polygons}: Mapprops) : JSX.Element{

  return (
    <div className="map__container" style={{height:'500px'}}>
      <MapContainer attributionControl={false}>
        <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <MapConsumer polygons={polygons}/>  
      </MapContainer>
    </div>
  );
}

