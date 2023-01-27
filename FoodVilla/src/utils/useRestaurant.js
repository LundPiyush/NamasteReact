import { useState, useEffect } from "react";

const useRestaurant = (resId) => {
  // create state
  const [restaurantMenu, setRestaurantMenu] = useState(null);
  // APi call
  useEffect(() => {
    getRestaurantDetails();
  }, []);
  async function getRestaurantDetails() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/v4/full?lat=19.0759837&lng=72.8776559&menuId=" +
        resId
    );
    const json = await data.json();
    setRestaurantMenu(json.data);
    console.log(json.data);
  }
  // return data
  return restaurantMenu;
};
export default useRestaurant;
