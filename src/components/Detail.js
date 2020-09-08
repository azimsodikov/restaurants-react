import React from "react";
import { Redirect } from "react-router-dom";
import MapContainer from "./MapContainer";
import './Detail.scss';


const Detail = ({ data }) => {
  if (!data) {
    return <Redirect to="/" />;
  }
  const { location, name, category, contact } = data;
  return (
    <div className="detail">
      <div className="detail-map">
        <MapContainer
          data={[data]}
          zoomLevel={10}
          size="small"
        />
      </div>
      <div className="label">
        <div className="title">{name}</div>
        <div className="subtitle">{category}</div>
      </div>
      <div className="contact">
        <div className="address">{location && location.address}</div>
        <div className="phone">{contact && contact.formattedPhone}</div>
        <div className="social">@{contact && contact.twitter}</div>
      </div>
    </div>
  );
};

export default Detail;
