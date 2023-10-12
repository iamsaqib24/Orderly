export default function filterDataUsingRestaurantName(searchText, restaurants) {
  //   console.log(restaurants);
  const filterData = restaurants.filter((restaurant) =>
    restaurant?.info?.name?.toLowerCase()?.includes(searchText.toLowerCase())
  );
  //console.log(filterData);
  return filterData;
}
