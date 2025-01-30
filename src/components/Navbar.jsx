import React, { useContext } from "react";
import { assets } from "../assets/assets";
import { Link } from "react-router-dom";

import {
  faBars,
  faChevronDown,
  faMultiply,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import MenuOptions from "./MenuOptions";
import { Context } from "../context/Context";

const Navbar = () => {
  const { showMenu, setShowMenu, navigate } = useContext(Context);

  const [sideBar, setSideBar] = useState(false);
  return (
    <div>
      <div className="flex justify-between items-center">
        <div className="w-25">
          <img src={assets.logo} alt="" />
        </div>
        <div className=" hidden sm:flex   ">
          <Link className="px-5" to="/">
            Home
            <hr className="border border-red-900 hidden" />
          </Link>

          <Link className="px-5" to="/about">
            About
          </Link>
          <Link className="px-5" to="/tracking">
            Tracking
          </Link>
          <div
            onClick={() => {
              showMenu ? setShowMenu(false) : setShowMenu(true);
            }}
            className="px-5 cursor-pointer flex  items-center gap-2"
          >
            <p> More Options</p>
            <FontAwesomeIcon icon={faChevronDown} size="xs" />
          </div>
        </div>
        <div className="gap-2 hidden sm:flex ">
          <button className="px-6 py-2 border border-red-900 text-red-900 cursor-pointer">
            Order
          </button>
          <button className="px-6 py-2 border border-red-900 text-white bg-red-900 cursor-pointer mr-1">
            Signin
          </button>
        </div>
        <div
          onClick={() => setSideBar(true)}
          className="sm:hidden cursor-pointer"
        >
          <FontAwesomeIcon icon={faBars} size="lg" />
        </div>
      </div>

      <div
        className={`z-10 absolute right-0 top-0 overflow-hidden transition-all ${
          sideBar ? "w-1/2" : "w-0"
        }`}
      >
        <div className=" flex flex-col bg-red-100 ">
          <div
            onClick={() => setSideBar(false)}
            className="flex   hover:bg-white   items-center gap-4 p-3  cursor-pointer"
          >
            <FontAwesomeIcon icon={faMultiply} size="lg" />
            Back
          </div>
          <div
            onClick={() => {
              navigate(`/`), setSideBar(false);
            }}
            className="items-center   hover:bg-white  gap-4 p-3 cursor-pointer px-8"
          >
            Home
          </div>
          <div
            onClick={() => {
              navigate(`/about`), setSideBar(false);
            }}
            className="items-center px-8  hover:bg-white   gap-4 p-3  cursor-pointer"
          >
            About
          </div>
          <div
            onClick={() => {
              navigate(`/`), setSideBar(false);
            }}
            className="items-center px-8   gap-4 p-3  hover:bg-white  cursor-pointer"
          >
            Real Time Tracking
          </div>
          <div className="gap-5 flex px-8 mt-2 mb-5">
            <button
              onClick={() => {
                navigate(`/Cart`), setSideBar(false);
              }}
              className=" w-full p-1 border border-red-900 text-red-900 cursor-pointer text-xs"
            >
              Cart
            </button>
            <button
              onClick={() => {
                navigate(`/signin`), setSideBar(false);
              }}
              className=" p-1 w-full border border-red-900 text-white bg-red-900 cursor-pointer text-sm"
            >
              Sign-in
            </button>
          </div>
          <div
            onClick={() => setShowMenu(true)}
            className="px-5 cursor-pointer flex  items-center gap-2"
          >
            <button
              onClick={() => {
                navigate(`/signin`), setSideBar(false);
              }}
              className="w-full p-3 border border-red-900 text-white bg-red-900 cursor-pointer mb-5 text-sm"
            >
              More Options
            </button>
          </div>
        </div>
      </div>
      {showMenu ? <MenuOptions /> : ""}
      <hr />
    </div>
  );
};

export default Navbar;
