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

  return !restaurant ? (
    <Shimmer />
  ) : (
    <div className="menu">
      <div className="restaurant-menu">
        <div>
          <img
            className="restaurant-img"
            src={IMG_CDN_URL + restaurant?.cloudinaryImageId}
          />
        </div>
        <div className="restaurant-details">
          <h3>{restaurant?.name}</h3>
          <h3>{restaurant?.city}</h3>
          <h3>{restaurant?.costForTwo / 100}</h3>
          <h3>{restaurant?.avgRating} stars</h3>
          <h3>{restaurant?.area + ""}</h3>
        </div>
        <div className="restaurant-offers">
          <p className="offers">Offers:</p>
          <p>{restaurant?.aggregatedDiscountInfo?.descriptionList[0]?.meta}</p>
          <p>{restaurant?.aggregatedDiscountInfo?.descriptionList[1]?.meta}</p>
        </div>
      </div>
      <div>
        <h3>Menu</h3>
        <ul>
          {Object.values(restaurant?.menu?.items).map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default RestaurantMenu;
