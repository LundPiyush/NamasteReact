import { useState } from "react";
import { restaurantList } from "./constants";
import RestaurantCard from "./RestaurantCard";

function filterData(searchText, restaurants) {
  return restaurants.filter((restaurant) =>
    restaurant.data.name.includes(searchText)
  );
}
// unique key(best practice) >> index as the key(use only if there is no unique key) >>> no key(not acceptable)
const BodyComponent = () => {
  // Use state is a function and Hooks nothing but just a normal function which returns array
  // searchText is local variable and usesearchText is a function which is given to update the local variable (searchText)
  const [searchText, setSearchText] = useState(""); // to create state variable
  const [restaurants, setRestaurants] = useState(restaurantList); // to create state variable

  return (
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
