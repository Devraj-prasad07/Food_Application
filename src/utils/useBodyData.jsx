import { SWIGGY_API } from "./constants";
import { useEffect,useState } from "react";
const useBodyData = () => {
  const [listOfRestro, setListOfRestro] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(SWIGGY_API);
      const json = await response.json();
      const restaurants = json?.data?.success?.cards.flatMap(
        (card) =>
          card?.gridWidget?.gridElements?.infoWithStyle?.restaurants || []
      );
      const uniqueRestaurants = Array.from(
        new Set(restaurants.map((restaurant) => restaurant?.info?.id))
      ).map((id) =>
        restaurants.find((restaurant) => restaurant?.info?.id === id)
      );

      setListOfRestro(uniqueRestaurants);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  return listOfRestro;
};

export default useBodyData;
