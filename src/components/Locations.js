import React from "react";
import MapContainer from "./MapContainer";

const Locations = ({ data }) => {
  return (
    <MapContainer
      data={data}
      zoomLevel={15}
      size="large"
    />
  );
};

export default Locations;
