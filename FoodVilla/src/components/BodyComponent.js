import { useEffect, useState } from "react";
import { restaurantList } from "./constants";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";

function filterData(searchText, restaurants) {
  return restaurants.filter((restaurant) =>
    restaurant?.data?.name?.toLowerCase().includes(searchText.toLowerCase())
  );
}
// unique key(best practice) >> index as the key(use only if there is no unique key) >>> no key(not acceptable)
const BodyComponent = () => {
  // Use state is a function and Hooks nothing but just a normal function which returns array
  // searchText is local variable and usesearchText is a function which is given to update the local variable (searchText)

  const [searchText, setSearchText] = useState(""); // to create state variable
  const [filteredRestaurants, setFilterRestaurants] = useState([]); // to create state variable
  const [allRestaurants, setAllRestaurants] = useState([]);

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
    setAllRestaurants(result?.data?.cards[2]?.data?.data?.cards);
    setFilterRestaurants(result?.data?.cards[2]?.data?.data?.cards);
  }

  // Not return component (Early return)
  if (!allRestaurants) return null;
  //if (filteredRestaurants.length === 0) return <h3>No match found</h3>;
  return allRestaurants.length === 0 ? (
    <Shimmer />
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
            const data = filterData(searchText, allRestaurants);
            // update the restaurant List
            setFilterRestaurants(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="restaurant-list">
        {filteredRestaurants.map((restaurant) => {
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
