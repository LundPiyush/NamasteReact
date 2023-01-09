import React from "react";
import ReactDOM from "react-dom/client";

import HeaderComponent from "./src/components/HeaderComponent";

const root = ReactDOM.createRoot(document.getElementById("root"));

const obj = {
  img: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/zg5wf1kmlqccfcat1bht",
  title: "Burger King",
  cuisines: ["American", "Burger"],
  rating: "4.2",
};
const RestaurantCard = () => {
  return (
    <div className="card">
      <img src={obj.img}></img>
      <h2 className="card-title">{obj.title}</h2>
      <h3 className="card-cuisine">{obj.cuisines.join(",")}</h3>
      <h4>{obj.rating} stars </h4>
    </div>
  );
};
const BodyComponent = () => {
  return (
    <div className="restaurant-list">
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
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
