import React, { useState } from "react";
import RestaurantItems from "./RestaurantItems";

const RestaurantCategory = ({ data,showItems,setShowIndex,showIndex }) => {
  
  const handleClick = () => {
   setShowIndex()
  };

  return (
    <div className="flex flex-col justify-center my-5 bg-slate-200 p-4 shadow-lg rounded-3xl">
      <div
        className="font-bold text-xl w-full flex justify-between items-center mb-4 cursor-pointer"
        onClick={handleClick}
        role="button"
        tabIndex={0}
        aria-expanded={showItems}
      >
        <span>
          {data.title} ({data.itemCards?.length || 0})
        </span>
        <span>{showItems ? "⬆️" : "⬇️"}</span>
      </div>
      {/* Restaurant items */}
      <div>
        {showItems && <RestaurantItems items={data.itemCards} />}
      </div>
    </div>
  );
};

export default RestaurantCategory;
