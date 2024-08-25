import React from "react";
import { CDN_URL } from "../utils/constants";
import RatingLogo from "../assets/RatingLogo"

const RestroCard = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, cuisines, avgRating, sla,areaName} =
    resData?.info || {};

  return (
    <div className="m-4 rounded-lg shadow-2xl p-4 max-w-xs transition-transform duration-300 transform hover:scale-105 hover:bg-slate-200">
      <div className="flex justify-center mb-1">
        {cloudinaryImageId && (
          <img
            className="rounded-2xl h-48 w-full object-cover"
            src={CDN_URL + cloudinaryImageId}
            alt="Restaurant Logo"
          />
        )}
      </div>
      <div className="justify-start">
  <h3 className="font-bold text-lg truncate w-full">{name}</h3>
  <div className="flex justify-start items-center">
    <RatingLogo/>
    <h3 className="text-gray-700 mr-2 ml-1 font-medium">{avgRating}</h3>{" "}
    &#9679;
    <h3 className="text-gray-700 ml-2 font-bold">
      {sla?.slaString}
    </h3>
  </div>
  <h4 className="text-sm text-gray-700 mb-1 font-semibold truncate w-full">
    {cuisines?.join(", ")}
  </h4>
  <h4 className="text-sm text-gray-700 mb-1 font-semibold truncate w-full">
    {areaName}
  </h4>
</div>
    </div>
  );
};

// Higher Order Component
// Input => RestroCard => Output => RestroCardPromoted

// export const RestroCardPromoted = (RestroCard) => {
//   return () => {
//     return (
//       <div>
//         <label>Promoted</label>
//         <RestroCard />
//       </div>
//     );
//   };
// };

export default RestroCard;
