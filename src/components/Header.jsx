import React from "react";
import appLogo from '../assets/appLogo.png';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBagShopping, faPhone, faAddressCard, faUser, faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { useSelector } from "react-redux";

const Header = () => {
  // Subscribing to the store using Selectors.
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);
  return (
    <div className="flex bg-[#FFFFFF] mb-1 shadow-xl items-center p-1">
      <div className="w-32 ml-7 cursor-pointer m-4">
        <Link to="/home">
          <img src={appLogo} alt="Logo" />
        </Link>
      </div>
      <div className="nav-items flex-1 mx-5">
        <ul className="flex justify-end space-x-16 font-medium text-lg mr-6">
          <li className="flex items-center hover:text-[#F66E1B] space-x-2">
            <FontAwesomeIcon icon={faBagShopping} className="cursor-pointer" />
            <Link to="/grocery" className="flex items-center">
              <span>Grocery</span>
            </Link>
          </li>
          <li className="flex items-center hover:text-[#F66E1B] space-x-2">
            <FontAwesomeIcon icon={faAddressCard} className="cursor-pointer" />
            <Link to="/about" className="flex items-center">
              <span>About</span>
            </Link>
          </li>
          <li className="flex items-center hover:text-[#F66E1B] space-x-2">
            <FontAwesomeIcon icon={faPhone} className="cursor-pointer" />
            <Link to="/contact" className="flex items-center">
              <span>Contact</span>
            </Link>
          </li>
          <li className="flex items-center hover:text-[#F66E1B] space-x-2">
            <FontAwesomeIcon icon={faUser} className="cursor-pointer" />
            <Link to="/cart" className="flex items-center">
              <span>Sign in</span>
            </Link>
          </li>
          <li className="flex items-center hover:text-[#F66E1B] space-x-2">
            <FontAwesomeIcon icon={faCartShopping} className="cursor-pointer" />
            <Link to="/cart" className="flex items-center">
              <span>Cart {cartItems.length} </span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
