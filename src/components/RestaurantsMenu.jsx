import React from "react";
import ShimmerUi from "./ShimmerUI";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RatingLogo from "../assets/RatingLogo";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantsMenu = () => {
  const { resID } = useParams();
  const resInfo = useRestaurantMenu(resID);

  if (!resInfo) {
    return <ShimmerUi />;
  }

  const cardInfo = resInfo.cards?.[2]?.card?.card?.info || {};

  const categories =
    resInfo.cards?.[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  return (
    <div className="flex justify-center mx-4 lg:mx-32">
      <div className="w-full lg:w-3/4">
        <div className="font-bold text-2xl my-7">
          <h2>{cardInfo?.name || "Name not available"}</h2>
        </div>
        <div className="border border-gray-300 rounded-3xl px-6 py-6">
          <div className="flex flex-col space-y-1">
            <div className="flex items-center">
              <RatingLogo />
              <h4 className="ml-1">
                <div className="flex">
                  <div className="font-bold mr-1 font-lg">
                    {cardInfo?.avgRating || "No rating"}
                  </div>
                  <div className="font-bold mr-1 font-lg">
                    ({cardInfo?.totalRatingsString || "No ratings"}) •
                  </div>
                  <div className="font-bold mr-1 font-lg">
                    {cardInfo?.costForTwoMessage ||
                      "Cost information not available"}
                  </div>
                </div>
              </h4>
            </div>
            <div className="restroCuisines">
              <ul className="flex space-x-1">
                {cardInfo?.cuisines?.map((cuisine, index, array) => (
                  <React.Fragment key={index}>
                    <b className="text-orange-500 underline cursor-pointer">
                      {cuisine}
                    </b>
                    {index < array.length - 1 && (
                      <span className="text-orange-500">, </span>
                    )}
                  </React.Fragment>
                ))}
              </ul>
            </div>
            <div className="restroAddress">
              <ul>
                Outlet &nbsp;
                {cardInfo?.areaName || "Area information not available"}
              </ul>
            </div>
            <div className="restroDetails">
              <p>
                {cardInfo?.sla?.slaString || "SLA information not available"}
              </p>
              <p>
                {cardInfo?.feeDetails?.message || "Fee details not available"}
              </p>
            </div>
          </div>
        </div>
        {/* Categories Accordion */}
      <div>
        {categories.map((category,index) => (
          <RestaurantCategory data = {category?.card?.card} key = {index}/>
        ))}
      </div>
      </div>
    </div>
  );
};

export default RestaurantsMenu;
