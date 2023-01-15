import L from "leaflet";
import { LatLngBoundsExpression, LatLngExpression} from "leaflet";
import { useEffect } from "react";
import { Marker, Polyline, useMap } from "react-leaflet";
import { Polygon, Polygons } from "../types/polygon";

type Mapprops = {
    polygons: Polygons
  }
  
export function MapConsumer ({polygons}: Mapprops) : JSX.Element | null {
    const map = useMap();
    const limeOptions = { color: 'black' }

    useEffect(() => {
        if (!polygons) return;

        let allCoordsArr: LatLngExpression[] = [];
        polygons.forEach((polygon: Polygon) => { 
            allCoordsArr.push(...polygon.Location.Polygon);

        })
            map.fitBounds(allCoordsArr as LatLngBoundsExpression);
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }, [polygons]);

        return (
        <>
        {polygons.map((polygon:Polygon) => (
            <>
            <Marker
            key={polygon.Id}
            position={[polygon.Location.Center[0], polygon.Location.Center[1]]}
            icon={L.divIcon({html: polygon.Name, className: 'textPositionClass', iconSize: [25,10]})}
            />
            <Polyline pathOptions={limeOptions} positions={polygon.Location.Polygon} />
            </>
        ))} 
        </>
        );
}