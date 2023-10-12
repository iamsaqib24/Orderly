import React, { useEffect, useState } from "react";
import { SWIGGY_LIVE_API } from "../utils/constants";
import RestaurantCard from "./RestaurantCard";

function Body() {
  const [listOfRestaurants, setListOfRestraunt] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    const data = await fetch(SWIGGY_LIVE_API);
    const json = await data.json();
    // console.log(json);

    setListOfRestraunt(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  }

  return (
    <div className="flex flex-wrap align-middle justify-center self-stretch">
      {listOfRestaurants.map((restaurant) => (
        <RestaurantCard key={restaurant.info.id} {...restaurant.info} />
      ))}
    </div>
  );
}

export default Body;
