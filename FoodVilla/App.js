import React from "react";
import ReactDOM from "react-dom/client";

import HeaderComponent from "./src/components/HeaderComponent";
import { restaurantList } from "./src/components/constants";
import { IMG_CDN_URL } from "./src/components/constants";

const root = ReactDOM.createRoot(document.getElementById("root"));

// Confif Driven UI
const RestaurantCard = ({ restaurant }) => {
  //console.log(props);
  return (
    <div className="card">
      <img src={IMG_CDN_URL + restaurant.data?.cloudinaryImageId}></img>
      <h3 className="card-title">{restaurant.data?.name}</h3>
      <h5 className="card-cuisine">{restaurant.data?.cuisines.join(", ")}</h5>
      <div className="card-rating">
        <span>{restaurant.data?.avgRating} stars</span>
        <span>{restaurant.data?.slaString}</span>
        <span>{restaurant.data?.costForTwoString}</span>
      </div>
    </div>
  );
};
const BodyComponent = () => {
  return (
    <div className="restaurant-list">
      <RestaurantCard restaurant={restaurantList[0]} />
      <RestaurantCard restaurant={restaurantList[1]} />
      <RestaurantCard restaurant={restaurantList[2]} />
      <RestaurantCard restaurant={restaurantList[3]} />
      <RestaurantCard restaurant={restaurantList[4]} />
      <RestaurantCard restaurant={restaurantList[5]} />
    </div>
  );
};

const FooterComponent = () => {
  return (
    <div>
      <h1>Footer Component</h1>
    </div>
  );
};
const AppComponent = () => {
  return (
    <>
      <HeaderComponent />
      <BodyComponent />
      <FooterComponent />
    </>
  );
};
root.render(<AppComponent />);
