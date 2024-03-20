import React, { useState } from "react";
import shopIcon from "./Images/image.png";
import { IoSearchOutline } from "react-icons/io5";
import { FaCartShopping } from "react-icons/fa6";
import { IoReorderThree } from "react-icons/io5";
import { RxCross1 } from "react-icons/rx";
import { NavLink, useNavigate } from "react-router-dom";
import { Myprovider } from "./Context/ProductContext";
import { auth } from "./Firebase/Firebase";
import { signOut } from "firebase/auth";
import { toast } from "react-toastify";
import { FaUserCheck } from "react-icons/fa";

const Navbar = () => {
  const {
    SearchAllProduct,
    cartproduct,
    userprofile,
    isAuthenticate,
    filter: { text },
  } = Myprovider();

  const signout = useNavigate();

  const logout = () => {
    signOut(auth)
      .then(() => {
        toast.warn("Logout Successfully");
        signout("/Login");
      })
      .catch((err) => console.log(err.message));
  };

  const [menu, setMenu] = useState(false);

  return (
    <>
      <nav className="w-full bg-gray-800 flex items-center justify-between z-10 p-4">
        <div className="flex items-center">
          <NavLink to="/">
            <div className="flex items-center space-x-2">
              <img
                src={shopIcon}
                alt="shopLogo"
                className="w-10 h-10 rounded-full"
              />
              <h1 className="text-xl lg:text-3xl text-pink">Fashion</h1>
            </div>
          </NavLink>
        </div>

        <div className="flex items-center space-x-4">
          <div className="relative">
            <IoSearchOutline className="absolute left-2 top-2 text-gray-500" />
            <input
              type="text"
              placeholder="Search"
              className="w-32 sm:w-48 h-10 px-10 text-sm sm:text-base rounded-full bg-gray-200 outline-none"
              onChange={SearchAllProduct}
              value={text}
            />
          </div>

          <NavLink to="/Cart" className="relative">
            <FaCartShopping className="text-xl sm:text-3xl" />
            {cartproduct.length > 0 && (
              <span className="absolute top-0 right-0 inline-block w-4 h-4 bg-red-500 rounded-full text-white text-xs flex items-center justify-center">
                {cartproduct.length}
              </span>
            )}
          </NavLink>

          <div className="relative">
            <IoReorderThree
              className="text-xl sm:text-3xl cursor-pointer"
              onClick={() => setMenu(!menu)}
            />
            {isAuthenticate && <FaUserCheck className="text-xl sm:text-3xl" />}
          </div>
        </div>
      </nav>

      {menu && (
        <div className="fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-50 flex items-center justify-center">
          <div className="w-4/5 bg-white rounded-lg p-4">
            <ul className="flex flex-col gap-4 items-center">
              <li>
                <NavLink
                  to="/"
                  className="text-lg text-gray-800 hover:text-pink"
                  onClick={() => setMenu(false)}
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/AllProduct"
                  className="text-lg text-gray-800 hover:text-pink"
                  onClick={() => setMenu(false)}
                >
                  All Products
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/MenSection"
                  className="text-lg text-gray-800 hover:text-pink"
                  onClick={() => setMenu(false)}
                >
                  Mens
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/WomenSection"
                  className="text-lg text-gray-800 hover:text-pink"
                  onClick={() => setMenu(false)}
                >
                  Womens
                </NavLink>
              </li>
              {isAuthenticate ? (
                <li>
                  <button
                    className="text-lg text-gray-800 hover:text-pink"
                    onClick={() => {
                      logout();
                      setMenu(false);
                    }}
                  >
                    Logout
                  </button>
                </li>
              ) : (
                <li>
                  <NavLink
                    to="/Signup"
                    className="text-lg text-gray-800 hover:text-pink"
                    onClick={() => setMenu(false)}
                  >
                    Login
                  </NavLink>
                </li>
              )}
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
