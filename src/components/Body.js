import React, { useEffect, useState } from "react";
import { SWIGGY_LIVE_API } from "../utils/constants";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import filterDataUsingRestaurantName from "../utils/Helper";
import { Link } from "react-router-dom";

export default function Body() {
  const [listOfRestaurants, setListOfRestraunt] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchInput, setSearchInput] = useState("");

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
    setFilteredRestaurants(
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
          <div className="text-center p-8  bg-slate-900">
            <input
              type="text"
              placeholder="Search for restaurant"
              className="border border-gray-400 p-3 h-10 mt-2 mb-2 w-2/5 outline-none"
              value={searchInput}
              onChange={(e) => {
                setSearchInput(e.target.value);
                if (searchInput == "") {
                  setFilteredRestaurants(listOfRestaurants);
                } else {
                  setFilteredRestaurants(
                    filterDataUsingRestaurantName(
                      e.target.value,
                      listOfRestaurants
                    )
                  );
                }
              }}
            />
          </div>

          <div className="flex flex-wrap align-middle justify-center self-stretch">
            {/* {filteredRestaurants.map((restaurant) => (
              <RestaurantCard key={restaurant.info.id} {...restaurant.info} />
            ))} */}
            {filteredRestaurants.map((restaurant) => (
              <Link
                key={restaurant.info.id}
                to={"/restaurant/" + restaurant.info.id}
              >
                {" "}
                <RestaurantCard
                  key={restaurant.info.id}
                  {...restaurant.info}
                />{" "}
              </Link>
            ))}
          </div>
        </>
      )}
    </>
  );
}
