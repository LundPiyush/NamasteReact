import { useEffect, useState } from "react";
import { restaurantList } from "./constants";
import RestaurantCard from "./RestaurantCard";

function filterData(searchText, restaurants) {
  return restaurantList.filter((restaurant) =>
    restaurant.data.name.includes(searchText)
  );
}
// unique key(best practice) >> index as the key(use only if there is no unique key) >>> no key(not acceptable)
const BodyComponent = () => {
  // Use state is a function and Hooks nothing but just a normal function which returns array
  // searchText is local variable and usesearchText is a function which is given to update the local variable (searchText)
  const [searchText, setSearchText] = useState(""); // to create state variable
  const [restaurants, setRestaurants] = useState([]); // to create state variable
  // useEffect is a Hook called when state changes or props changes.
  // empty dependency array => once after render
  // dep arry [searchText] => once after initial render + everytime after redern (my searchText changes)
  useEffect(() => {
    // API call
    getRestaurants();
  }, []);

  async function getRestaurants() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.0759837&lng=72.8776559&page_type=DESKTOP_WEB_LISTING"
    );
    const result = await data.json();
    setRestaurants(result?.data?.cards[2]?.data?.data?.cards);
  }

  return restaurants.length === 0 ? (
    <h1>Loading</h1>
  ) : (
    <>
      <div className="search-container">
        <input
          placeholder="Enter text"
          type="text"
          className="search-input"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          className="search-btn"
          onClick={() => {
            // need to filter data
            const data = filterData(searchText, restaurants);
            // update the restaurant List
            setRestaurants(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="restaurant-list">
        {restaurants.map((restaurant) => {
          return (
            <RestaurantCard {...restaurant.data} key={restaurant.data.id} />
          );
        })}

        {/* <RestaurantCard {...restaurantList[0].data} />
      <RestaurantCard {...restaurantList[1].data} />
      
      */}
      </div>
    </>
  );
};

export default BodyComponent;
