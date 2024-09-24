import React from "react";
import { useDispatch, useSelector } from "react-redux";
import RestaurantItems from "./RestaurantItems";
import { clearCart } from "../redux/slices/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  // Clear Cart handler
  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Cart Header */}
      <div className="text-center mt-8 mb-6">
        <div className="font-bold text-3xl text-gray-800">Your Cart</div>
      </div>

      {/* Clear Cart Button */}
      <div className="flex justify-center mb-4">
        {cartItems.length > 0 && (
          <button
            onClick={handleClearCart}
            className="bg-red-500 text-white px-6 py-2 rounded hover:bg-red-600 transition duration-200"
          >
            Clear Cart
          </button>
        )}
      </div>

      {/* Cart Items Section */}
      <div className="container mx-auto max-w-4xl bg-white shadow-lg rounded-lg p-6">
        {cartItems.length > 0 ? (
          <div className="flex flex-col space-y-4">
            <RestaurantItems items={cartItems} />
          </div>
        ) : (
          <div className="text-center text-gray-500 text-xl">
            Your cart is empty.
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
