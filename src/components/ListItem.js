import React from "react";
import './ListItem.scss';

const ListItem = ({ item }) => {
  return (
    <div className="list-item">
      <div className="img">
        <img alt={item.name + 'image'} src={item.backgroundImageURL}></img>
      </div>
      <div className="label">
        <div className="title">{item.name}</div>
        <div className="subtitle">{item.category}</div>
      </div>
    </div>
  );
};

export default ListItem;  
