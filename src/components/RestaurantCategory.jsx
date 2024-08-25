import React from "react";
import RestaurantItems from "./RestaurantItems";

const RestaurantCategory = ({ data }) => {
  return (
    <div className="flex flex-col justify-center my-5 bg-slate-200 p-4 shadow-lg rounded-3xl">
      <div className="font-bold text-xl w-full flex justify-between items-center mb-4">
        <span>
          {data.title} ({data.itemCards.length})
        </span>
        <span>⬇️</span>
      </div>
      {/* Restaurant items */}
      <div>
        <RestaurantItems items={data.itemCards} />
      </div>
    </div>
  );
};

export default RestaurantCategory;
