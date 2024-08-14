import React from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBagShopping, faPhone,faAddressCard,faUser, faCartShopping  } from '@fortawesome/free-solid-svg-icons';


const Header = () => {
  // const [btnNameReact, setBtnNameReact] = useState("LogIn");

  return (
    <div className="flex bg-[#f2eeee] mb-2 shadow-xl items-center p-2 ">
      <div className="w-32 ml-3 cursor-pointer">
        <Link to="/home">
          <img src={LOGO_URL} alt="Logo" />
        </Link>
      </div>
      <div className="nav-items flex-1 mx-20">
        <ul className="flex justify-end space-x-20 font-semibold text-2xl">
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
              <span>Cart</span>
            </Link>
          </li>
          {/* <button
            className="bg-[#F66E1B] text-white py-2 px-4  rounded hover:bg-[#d5590d]"
            onClick={() => {
              setBtnNameReact(btnNameReact === "LogIn" ? "LogOut" : "LogIn");
            }}
          >
            {btnNameReact}
          </button> */}
        </ul>
      </div>
    </div>
  );
};

export default Header;
