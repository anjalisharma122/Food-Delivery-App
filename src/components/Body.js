import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();

    const restaurants =
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];

    setListOfRestaurants(restaurants);
    setFilteredRestaurants(restaurants);
  };

  const onlineStatus = useOnlineStatus();

  if (!onlineStatus)
    return <h1 className="text-center text-xl font-semibold text-red-600">🚨 Looks like you're offline! Please check your internet.</h1>;

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body bg-[#FDF7E3] min-h-screen">
      {/* Filters Section */}
      <div className="filter flex flex-col md:flex-row justify-between items-center p-4">
        {/* Search Box */}
        <div className="search flex items-center space-x-2">
          <input
            type="text"
            data-testid="searchInput"
            className="border border-gray-500 rounded-xl h-10 px-3 w-72 focus:outline-none focus:ring-2 focus:ring-[#2F402F]"
            placeholder="Search Restaurants..."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            className="inline-flex items-center px-3 py-1 bg-[#2F402F] text-white font-semibold text-md rounded-lg shadow-md hover:bg-[#253524] "
            onClick={() => {
              const filteredRestaurant = listOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredRestaurants(filteredRestaurant);
            }}
          >
            Search
          </button>
        </div>

        {/* Top Rated Filter */}
        <button
          className="px-4 py-2 bg-[#2F402F] text-white rounded-lg hover:bg-[#253524] transition-all duration-200"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (res) => res.info.avgRating > 4.5
            );
            setFilteredRestaurants(filteredList);
          }}
        >
        Top Rated Restaurants
        </button>
      </div>

      {/* Restaurant Cards Section */}
      <div className="flex flex-wrap justify-center gap-6 p-4">
        {filteredRestaurants.map((card) => (
          <Link key={card.info.id} to={"/restaurants/" + card.info.id}>
            {card.info.avgRating > 4.5 ? (
              <RestaurantCardPromoted resData={card} />
            ) : (
              <RestaurantCard resData={card} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
