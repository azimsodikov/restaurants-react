import React, { useEffect, useState } from "react";
import axios from "axios";
import { HashRouter as Router, Route, Link, Switch } from "react-router-dom";
import ListItem from "./ListItem";
import { id } from "../helpers/functions";
import Detail from "./Detail";
import Locations from "./Locations";
import Header from "./Header";
import "./List.scss";

const URL = "https://s3.amazonaws.com/br-codingexams/restaurants.json";

const List = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [selectedRestaurant, setSelectedRestaurant] = useState(null);
  useEffect(() => {
    const search = async () => {
      const { data } = await axios.get(URL);
      const mappedData = data.restaurants.map((r) => {
        r.id = id(6);
        return r;
      });
      setRestaurants(mappedData);
    };
    search();
  }, []);

  const mappedRestaurants = restaurants.map((restaurant) => {
    return (
      <Link
        className="fade-in"
        onClick={() => setSelectedRestaurant(restaurant)}
        key={restaurant.id}
        to={{ pathname: `/detail/${restaurant.id}` }}
      >
        <ListItem className="list-item" item={restaurant} />
      </Link>
    );
  });

  return (
    <div className="list">
      <Router>
        <Header />
        <div className="list-wrapper">
          <Switch>
            <Route exact path="/">
              {mappedRestaurants}
            </Route>
            <Route path="/detail/:id">
              <div className="slide-right">
                <Detail data={selectedRestaurant} />
              </div>
            </Route>
            <Route path="/locations">
              <Locations data={restaurants} />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default List;
