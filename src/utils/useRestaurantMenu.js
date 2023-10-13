import { useEffect, useState } from "react";
import { FETCH_MENU_URL } from "../utils/constants";

export default function useRestaurantMenu(resId) {
  const [restaurantInfo, setRestaurantInfo] = useState(null);
  const [restaurantMenu, setRestaurantMenu] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    const data = await fetch(FETCH_MENU_URL + resId);
    const json = await data.json();
    console.log(json);
    setRestaurantInfo(json?.data?.cards[0].card?.card.info);
    setRestaurantMenu(
      json?.data?.cards[2].groupedCard?.cardGroupMap?.REGULAR?.cards
    );
  }
}
