import React, { useState } from "react";
import { GoogleApiWrapper, InfoWindow, Marker, Map } from "google-maps-react";
import "./MapContainer.scss";

const API_KEY = "AIzaSyDVtajZA3eJMHLEFVoZsKez8dxDkncQaFQ";

const MapContainer = ({ data, zoomLevel, size }) => {
  const [showMarker, setShowMarker] = useState(false);
  const [activeMarker, setActiveMarker] = useState(null);
  const [selectedPlace, setSelectedPlace] = useState(null);
  const { lat, lng } = data[0].location;

  const onMarkerClick = (props, marker) => {
    setShowMarker(true);
    setActiveMarker(marker);
    setSelectedPlace(props);
  };

  const onClose = (props) => {
    setShowMarker(false);
    setActiveMarker(null);
  };

  const mappedPins = data.map((item) => {
    const { location, name } = item;
    const { lat, lng } = location;
    return (
      <Marker
        key={item.id}
        onClick={onMarkerClick}
        position={{ lat, lng }}
        name={name}
      />
    );
  });
  return (
    <div className={'map-container'}>
      <Map
        google={window.google}
        zoom={zoomLevel}
        className={size}
        scrollwheel={showMarker}
        initialCenter={{ lat, lng }}
      >
        {mappedPins}
        <InfoWindow marker={activeMarker} visible={showMarker} onClose={onClose}>
          <div>
            <h4>{selectedPlace && selectedPlace.name}</h4>
          </div>
        </InfoWindow>
      </Map>
    </div>
  );
};

export default GoogleApiWrapper(() => ({
  apiKey: API_KEY,
}))(MapContainer);
