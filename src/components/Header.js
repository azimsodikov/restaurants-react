import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Header.scss";
import map from "../assets/img/icon_map@2x.png";
import back from "../assets/img/ic_webBack@2x.png";

const Header = () => {
  let location = useLocation();
  return (
    <React.Fragment>
      <div className="header">
        <Link to={{ pathname: "/" }}>
          <img
            src={back}
            alt="Go back"
            className={`navigation back ${
              location.pathname === "/" ? "hidden" : ""
            }`}
          ></img>
        </Link>
        <Link to={{ pathname: "/" }}>
          <h3 className="title">Lunch Tyme</h3>
        </Link>
        <Link to={{ pathname: "/locations" }}>
          <img
            alt="All locations in the map"
            src={map}
            className="navigation locations"
          ></img>
        </Link>
      </div>
      <div className="helper"></div>
    </React.Fragment>
  );
};

export default Header;
