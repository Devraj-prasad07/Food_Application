import React from "react";
import ShimmerUi from "./ShimmerUI";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RatingLogo from "../assets/RatingLogo";

const RestaurantsCard = () => {
  const { resID } = useParams();
  const resInfo = useRestaurantMenu(resID);

  if (!resInfo) {
    return <ShimmerUi />;
  }

  const cardInfo = resInfo.cards?.[2]?.card?.card?.info || {};
  const menuInfo =
    resInfo.cards?.[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards || [];
  console.log(menuInfo);
  // const categories = menuInfo.filter()
  const MENU1 = menuInfo?.[2]?.card?.card?.itemCards || [];
  const MENU2 = menuInfo?.[3]?.card?.card?.itemCards || [];
  const MENU3 = menuInfo?.[4]?.card?.card?.itemCards || [];
  const MENU4 = menuInfo?.[5]?.card?.card?.itemCards || [];
  const MENU5 = menuInfo?.[6]?.card?.card?.itemCards || [];
  const MENU6 = menuInfo?.[7]?.card?.card?.itemCards || [];
  const MENU7 = menuInfo?.[8]?.card?.card?.itemCards || [];

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
                  <div className="font-bold mr-1 font-lg">{cardInfo?.avgRating || "No rating"}</div>
                  <div className="font-bold mr-1 font-lg">({cardInfo?.totalRatingsString || "No ratings"}) •</div>
                  <div className="font-bold mr-1 font-lg">{cardInfo?.costForTwoMessage ||"Cost information not available"}</div>
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
                Outlet &nbsp;{" "}
                {cardInfo?.areaName || "Area information not available"}
              </ul>
            </div>
            <div className="restroDetails">
              <ul>
                {cardInfo?.sla?.slaString || "SLA information not available"}
              </ul>
              <p>
                {cardInfo?.feeDetails?.message || "Fee details not available"}
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* MENU 1 STARTS HERE */}
      {/* <div className="Menu_1">
        <h1>
          {menuInfo?.[2]?.card?.card?.title}({MENU1.length})
        </h1>
        <div className="Menu_1_info">
          <ul>
            {MENU1.map((item) => (
              <li key={item?.card?.info?.id}>
                {item?.card?.info?.name || "Item name not available"} for{" "}
                {item?.card?.info?.price / 100 ||
                  item?.card?.info?.defaultPrice / 100 ||
                  "Price not available"}
              </li>
            ))}
          </ul>
        </div>
      </div> */}
      {/* MENU 1 ENDS HERE */}

      {/* MENU 2 STARTS HERE */}
      {/* <div className="Menu_2">
        <h1>
          {menuInfo?.[3]?.card?.card?.title} ({MENU2?.length})
        </h1>
        <div className="Menu_2_info">
          <ul>
            {MENU2.map((item) => (
              <li key={item?.card?.info?.id}>
                {item?.card?.info?.name || "Item name not available"} for{" "}
                {item?.card?.info?.price / 100 ||
                  item?.card?.info?.defaultPrice / 100 ||
                  "Price not available"}
              </li>
            ))}
          </ul>
        </div>
      </div> */}
      {/* MENU 2 ENDS HERE */}

      {/* MENU 3 STARTS HERE  */}
      {/* <div className="Menu_3">
        <h1>
          {menuInfo?.[4]?.card?.card?.title} ({MENU3?.length})
        </h1>
        <div className="Menu_3_info">
          <ul>
            {MENU3.map((item) => (
              <li key={item?.card?.info?.id}>
                {item?.card?.info?.name || "Item name not available"} for{" "}
                {item?.card?.info?.price / 100 ||
                  item?.card?.info?.defaultPrice / 100 ||
                  "Price not available"}
              </li>
            ))}
          </ul>
        </div>
      </div> */}
      {/* MENU 3 ENDS HERE */}

      {/* MENU 4 STARTS HERE  */}
      {/* <div className="Menu_4">
        <h1>
          {menuInfo?.[5]?.card?.card?.title} ({MENU4?.length})
        </h1>
        <div className="Menu_4_info">
          <ul>
            {MENU4.map((item) => (
              <li key={item?.card?.info?.id}>
                {item?.card?.info?.name || "Item name not available"} for{" "}
                {item?.card?.info?.price / 100 ||
                  item?.card?.info?.defaultPrice / 100 ||
                  "Price not available"}
              </li>
            ))}
          </ul>
        </div>
      </div> */}
      {/*  MENU 4 ENDS HERE */}

      {/* MENU 5 STARTS HERE  */}
      {/* <div className="Menu_5">
        <h1>
          {menuInfo?.[5]?.card?.card?.title} ({MENU5?.length})
        </h1>
        <div className="Menu_5_info">
          <ul>
            {MENU5.map((item) => (
              <li key={item?.card?.info?.id}>
                {item?.card?.info?.name || "Item name not available"} for{" "}
                {item?.card?.info?.price / 100 ||
                  item?.card?.info?.defaultPrice / 100 ||
                  "Price not available"}
              </li>
            ))}
          </ul>
        </div>
      </div> */}
      {/*  MENU 5 ENDS HERE */}

      {/* MENU 6 STARTS HERE  */}
      {/* <div className="Menu_6">
        <h1>
          {" "}
          {menuInfo?.[5]?.card?.card?.title} ({MENU6?.length})
        </h1>
        <div className="Menu_6_info">
          <ul>
            {MENU4.map((item) => (
              <li key={item?.card?.info?.id}>
                {item?.card?.info?.name || "Item name not available"} for{" "}
                {item?.card?.info?.price / 100 ||
                  item?.card?.info?.defaultPrice / 100 ||
                  "Price not available"}
              </li>
            ))}
          </ul>
        </div>
      </div> */}
      {/*  MENU 6 ENDS HERE */}

      {/* MENU 7 STARTS HERE  */}
      {/* <div className="Menu_7">
        <h1>
          {" "}
          {menuInfo?.[5]?.card?.card?.title} ({MENU7?.length})
        </h1>
        <div className="Menu_7_info">
          <ul>
            {MENU4.map((item) => (
              <li key={item?.card?.info?.id}>
                {item?.card?.info?.name || "Item name not available"} for{" "}
                {item?.card?.info?.price / 100 ||
                  item?.card?.info?.defaultPrice / 100 ||
                  "Price not available"}
              </li>
            ))}
          </ul>
        </div>
      </div> */}
      {/*  MENU 7 ENDS HERE */}
    </div>
  );
};

export default RestaurantsCard;
