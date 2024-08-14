import { useState } from "react";

const useRestaurantFilters = (restaurants) => {
  const [filteredList, setFilteredList] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [isFiltered, setIsFiltered] = useState(false);

  const handleFilter = () => {
    const dataList = restaurants.filter(
      (restaurant) => parseFloat(restaurant?.info?.avgRating) < 4
    );
    setFilteredList(dataList);
    setIsFiltered(true);
  };

  const clearFilters = () => {
    setFilteredList([]);
    setIsFiltered(false);
  };

  const handleSearch = () => {
    const filteredRestro = restaurants.filter((restaurant) =>
      restaurant?.info?.name?.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredList(filteredRestro);
    setIsFiltered(true);
  };

  const handleSearchChange = (e) => {
    setSearchText(e.target.value);
    if (e.target.value === "") {
      clearFilters();
    }
  };

  return {
    filteredList,
    isFiltered,
    searchText,
    setSearchText,
    handleFilter,
    clearFilters,
    handleSearch,
    handleSearchChange,
  };
};

export default useRestaurantFilters;
