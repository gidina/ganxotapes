import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { IGanxoTapa } from "./api";
import { LatLngExpression } from "leaflet";

const Map = ({ points = [] }: { points?: IGanxoTapa[] }) => {
  const center = [41.78760838515345, 3.0277976427724496];
  return (
    <MapContainer
      center={center as LatLngExpression}
      zoom={13}
      scrollWheelZoom={true}
      className="h-72 md:h-96 w-full"
      //   style={{ minHeight: "300px", minWidth: "100%" }} // style={{ minHeight: "100vh", minWidth: "100vw" }}
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {points.map(({ id, coordinates, restaurant, address }) => (
        <Marker key={id} position={coordinates as LatLngExpression}>
          <Popup>
            {restaurant} <br />
            {address}
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default Map;
