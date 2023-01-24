import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useRestaurant from "../utils/useRestaurant";
import { IMG_CDN_URL } from "./constants";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
  // to read dynamical URL useParams
  const params = useParams();
  const { resId } = params; // destructuring

  const restaurant = useRestaurant(resId); // This is custom hook

  return !restaurantMenu ? (
    <Shimmer />
  ) : (
    <div className="menu">
      <div>
        {restaurantMenu.length}
        <h1>Restaurant menu id :{resId}</h1>
        <h3>{restaurantMenu?.name}</h3>
        <h3>{restaurantMenu?.city}</h3>
        <h3>{restaurantMenu?.costForTwo / 100}</h3>
        <h3>{restaurantMenu?.avgRating} stars</h3>
        <h3>{restaurantMenu?.area}</h3>
        <img src={IMG_CDN_URL + restaurantMenu?.cloudinaryImageId} />
      </div>
      <div>
        <h3>Menu</h3>
        <ul>
          {Object.values(restaurantMenu?.menu?.items).map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default RestaurantMenu;
