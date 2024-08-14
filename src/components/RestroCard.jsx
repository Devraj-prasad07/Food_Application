import React from "react";
import { CDN_URL } from "../utils/constants";

const RestroCard = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, cuisines, avgRating,sla } =
    resData?.info || {};

  return (
    <div className="m-4 rounded-lg shadow-lg p-4 max-w-xs transition-transform duration-300 transform hover:scale-105 hover:bg-slate-200">
      <div className="flex justify-center mb-4">
        {cloudinaryImageId && (
          <img
            className="rounded-2xl h-48 w-full object-cover"
            src={CDN_URL + cloudinaryImageId}
            alt="Restaurant Logo"
          />
        )}
      </div>
      <div className="text-center">
        <h2 className="font-extrabold text-lg mb-1">{name}</h2>
        <div className="flex justify-center">
        <h3 className="text-gray-700 mr-2 font-bold">{avgRating} stars</h3> &#9679;
        <h3 className="text-gray-700 ml-2 font-bold">{sla?.deliveryTime} minutes</h3>
        </div>
        <h4 className="text-sm text-gray-700 mb-1 font-semibold">{cuisines?.join(", ")}</h4>
      </div>
    </div>
  );
};

// Higher Order Component
// Input => RestroCard => Output => RestroCardPromoted

export const RestroCardPromoted = (RestroCard) => {
  return () => {
    return <div>
      <label>Promoted</label>
      <RestroCard/>
    </div>;
  };
};

export default RestroCard;
