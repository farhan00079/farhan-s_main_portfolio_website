import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import "./Map.css";

const containerStyle = {
  width: "100%",
  height: "400px",
};

const center = {
  lat: 17.385044, // Hyderabad
  lng: 78.486671,
};

const Map = () => {
  return (
    <div className="map-box">
      <h2>📍 Our Current Location</h2>

      <LoadScript googleMapsApiKey="AIzaSyBTXu32cdrOkgrRimL6koK3Mik2_i0YJkA">
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={14}
        >
          <Marker position={center} />
        </GoogleMap>
      </LoadScript>
    </div>
  );
};

export default Map;
