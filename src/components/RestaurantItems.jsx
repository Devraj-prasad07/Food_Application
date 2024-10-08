import React from "react";
import { ITEMS_IMG_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addItem } from "../redux/slices/cartSlice.jsx";

const RestaurantItems = ({ items }) => {
  const dispatch = useDispatch();
  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };
  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="flex justify-between items-start mb-5 p-4"
        >
          {/* Left side: Text content */}
          <div className="w-3/4">
            <div className="font-bold text-gray-700 text-lg">
              {item.card.info.name}
            </div>
            <div className="font-bold text-green-600">
              <span className="font-bold">&#8377; </span>
              {item.card.info.price / 100}
            </div>
            <div className="text-md text-gray-600 cursor-pointer mt-1 font-medium">
              {item.card.info.description}
            </div>
          </div>

          {/* Right side: Image */}
          <div className="w-1/4 flex justify-end mb-4">
            <img
              src={ITEMS_IMG_URL + item.card.info.imageId}
              alt={item.card.info.name}
              className="w-[160px] h-[160px] object-cover rounded-lg"
            />
            <div className="absolute">
              <button
                className="bg-slate-100 font-extrabold text-green-600  px-12 py-2 rounded-lg mt-[138px] mr-[13px] border border-green-600"
                onClick={() => handleAddItem(item)}
              >
                ADD
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RestaurantItems;
