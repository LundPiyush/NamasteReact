import React from "react";
import ReactDOM from "react-dom/client";

import HeaderComponent from "./src/components/HeaderComponent";
import { restaurantList } from "./src/components/constants";
import { IMG_CDN_URL } from "./src/components/constants";

const root = ReactDOM.createRoot(document.getElementById("root"));

// Confif Driven UI
const RestaurantCard = (props) => {
  console.log(props);
  return (
    <div className="card">
      <img src={IMG_CDN_URL + props.restaurant.data?.cloudinaryImageId}></img>
      <h2 className="card-title">{props.restaurant.data?.name}</h2>
      <h4 className="card-cuisine">
        {props.restaurant.data?.cuisines.join(", ")}
      </h4>
      <div className="card-rating">
        <span>{props.restaurant.data?.avgRating} stars</span>
        <span>{props.restaurant.data?.slaString}</span>
        <span>{props.restaurant.data?.costForTwoString}</span>
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
