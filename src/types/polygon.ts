import { LatLngExpression } from "leaflet"

export type LocationCoordinates ={
    Center: number[],
    Polygon: LatLngExpression[]
}

export type Polygon = {
    $id:string,
    Id:number,
    Name:string,
    Size:number,
    IsRemoved:boolean,
    SyncId:string,
    Location: LocationCoordinates,
    OrganizationId: number,
    SyncDate: string
}

export type Polygons = Polygon[];