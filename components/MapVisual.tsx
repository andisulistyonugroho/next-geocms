"use client";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import { MapContainer, TileLayer, GeoJSON } from "react-leaflet";

const MapVisual = () => {
  const onEachFeature = (feature: any, layer: L.Layer) => {
    if (feature.properties) {
      const { popupContent } = feature.properties;
      layer.bindPopup(popupContent);
    }
  };

  const GData = () => {
    const geodata: GeoJSON.Feature = {
      type: "Feature",
      properties: {
        name: "Gedung Sate",
        amenity: "Goverment Building",
        popupContent: "This is where the governor of West Java work",
      },
      geometry: {
        type: "Point",
        coordinates: [107.61873, -6.902459],
      },
    };
    // note: geojson uses lat,lang while leafletjs use lang,lat
    return <GeoJSON data={geodata} onEachFeature={onEachFeature} />;
  };

  const center = { lat: -6.902459, lng: 107.61873 };
  const key = center.lat + center.lng;

  return (
    <div>
      <MapContainer
        key={key}
        center={center}
        style={{ height: "70vh", width: "100%" }}
        zoom={8}
        scrollWheelZoom={false}
        data-testid="mapcontainer"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          data-testid="tilelayer"
        />
        <GData />
      </MapContainer>
    </div>
  );
};

export default MapVisual;
