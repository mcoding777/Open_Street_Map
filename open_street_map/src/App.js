import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

function App() {
  const position = [36.9737541905668, 127.932764159959];

  return (
    <MapContainer
      center={position}
      zoom={16}
      scrollWheelZoom={true}
      style={{ width: "100vw", height: "100vh" }}
      minZoom={16}
      maxZoom={17}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="./images/Tiles/{z}/{x}/{y}.png"
      />
      <Marker
        icon={L.icon({
          iconUrl: markerIcon,
          iconRetinaUrl: markerIcon2x,
          shadowUrl: markerShadow,
          iconAnchor: [15, 41],
          iconSize: [30, 40],
        })}
        position={position}
      >
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  );
}

export default App;
