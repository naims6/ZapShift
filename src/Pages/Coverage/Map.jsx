import React from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
const position = [23.685, 90.3563];
import "leaflet/dist/leaflet.css";

const Map = ({ wareHouseData, mapRef }) => {
  console.log(wareHouseData);

  return (
    <MapContainer
      center={position}
      zoom={7}
      scrollWheelZoom={false}
      className="h-[800px]"
      ref={mapRef}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {wareHouseData.map((d, i) => (
        <Marker key={i} position={[d.latitude, d.longitude]}>
          <Popup>
            <strong>{d.district}</strong> <br /> {d.covered_area.join(" ")}
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default Map;
