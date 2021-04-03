import './App.css';
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { Icon } from "leaflet";

import LocationFinder from './components/LocationFinder';

function App() {
  return (
    <MapContainer center={[51.758320, 19.462100]} zoom={10}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      <LocationFinder />
    </MapContainer>
  );
}

export default App;
