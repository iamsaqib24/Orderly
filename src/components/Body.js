import React, { useEffect, useState } from "react";
import { SWIGGY_LIVE_API } from "../utils/constants";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";

export default function Body() {
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
    <>
      {listOfRestaurants?.length === 0 ? (
        <div className="flex flex-wrap align-middle justify-center self-stretch my-28">
          {Array(20)
            .fill("")
            .map((card, index) => (
              <Shimmer key={index} />
            ))}
        </div>
      ) : (
        <>
          {/* <div className="flex align-middle justify-center">
            <SearchBar
              setFilteredRestaurants={setFilteredRestaurants}
              restaurants={restaurants}
              numberOfRestaurants={restaurantNumber}
            />
          </div> */}
          <div className="flex flex-wrap align-middle justify-center self-stretch">
            {listOfRestaurants.map((restaurant) => (
              <RestaurantCard key={restaurant.info.id} {...restaurant.info} />
            ))}
          </div>
        </>
      )}
    </>
  );
}
