import React from "react";
import RestroCard, { RestroCardPromoted } from "./RestroCard";
import ShimmerUi from "./ShimmerUI";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import useBodyData from "../utils/useBodyData";
import useRestaurantFilters from "../utils/useRestaurantFilters";

const Body = () => {
  const BodyData = useBodyData();

  const {
    filteredList,
    isFiltered,
    searchText,
    handleFilter,
    clearFilters,
    handleSearch,
    handleSearchChange,
  } = useRestaurantFilters(BodyData);

  // const PromotedRestaurant = RestroCardPromoted(RestroCard); promoted Restro Code

  const status = useOnlineStatus();
  if (status === false)
    return (
      <h1>
        It seems that you have not connected to the internet. Please connect it
        or try again later.
      </h1>
    );

  return BodyData.length === 0 ? (
    <ShimmerUi />
  ) : (
    <div className="bg-[#f7f1f1ed]">
      <div className="flex items-center bg-slate-200 mb-5 p-4 space-x-4 justify-center">
        {/* Search Button */}
        <input
          type="text"
          className="w-[800px] py-4 px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Search for Restaurants"
          value={searchText}
          onChange={handleSearchChange}
        />
        <button
          className="px-6 py-2 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition duration-300"
          onClick={handleSearch}
        >
          Search
        </button>
        <button
          className="px-4 py-2 bg-green-500 text-white rounded-lg hover:text-[#F66E1B] transition duration-300"
          onClick={handleFilter}
        >
          Filter
        </button>
        <button
          className="px-4 py-2 bg-red-500 text-white rounded-lg hover:text-[#F66E1B] transition duration-300"
          onClick={clearFilters}
        >
          Clear Filter
        </button>
      </div>
      <div className="flex justify-center">
        <div className="grid grid-cols-4 px-24">
          {(isFiltered ? filteredList : BodyData).map((restaurant) => (
            <Link
              key={restaurant?.info?.id}
              to={"/restaurants/" + restaurant?.info?.id}
            >
              {/* If Restro is Promoted Write the promoted code here!! */}
              <RestroCard resData={restaurant} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Body;
