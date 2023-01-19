import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "./constants";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
  // to read dynamical URL useParams
  const params = useParams();
  const { resId } = params; // destructuring
  const [restaurantMenu, setRestaurantMenu] = useState(null);

  useEffect(() => {
    getRestaurantDetails();
  });
  async function getRestaurantDetails() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/v4/full?lat=19.0759837&lng=72.8776559&menuId=" +
        resId
    );
    const json = await data.json();
    setRestaurantMenu(json.data);
  }

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
