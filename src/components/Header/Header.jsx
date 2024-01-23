import React from "react";
import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { BsSearchHeart } from "react-icons/bs";
import { HiOutlineBarsArrowDown } from "react-icons/hi2";
import { FaFacebookF } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";

function Header() {
  let [isBarOpen, setIsBarOpen] = useState(false);

  const ActiveNav = () => {
    setIsBarOpen(!isBarOpen);
    const body = document.querySelector("body");
  

  };
  return ( 
    <div className="w-full min-h-20  flex justify-center items-center bg-white shadow-md sticky top-0 left-0 z-50">
      <div className="w-[80%] flex justify-between flex-wrap items-center">

        <div className="w-[17rem] rounded-full px-5 py-2  flex items-center gap-3 text-bold">
          <BsSearchHeart className=" cursor-pointer hover:text-orange-500 hover:scale-110" />
          <input
            className="focus:outline-none "
            type="text"
            placeholder="Search Blogs"
          />
        </div>

        <h1 className="text-3xl font-bold text-gray-800 font-serif cursor-pointer hover:scale-105 hover:text-orange-500 duration-500">
          <Link to="/">InfoBlogs</Link>
        </h1>

        <ul
          className={`font-thin text-md bg-white shadow-xl w-[300px] h-[80vh] p-4 absolute top-[10vh] right-0
           flex flex-col gap-6 transition-transform transform  
         ${
           isBarOpen
             ? "translate-x-[0] duration-1000 "
             : "translate-x-[150%] duration-1000"
         }
        `}
        >
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `block py-2 pr-4 pl-3 duration-200 ${
                  isActive ? "text-orange-700" : "text-gray-700"
                } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/Blog/1"
              className={({ isActive }) =>
                `block py-2 pr-4 pl-3 duration-200 ${
                  isActive ? "text-orange-700" : "text-gray-700"
                } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
              }
            >
              Blogs
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/Lecture"
              className={({ isActive }) =>
                `block py-2 pr-4 pl-3 duration-200 ${
                  isActive ? "text-orange-700" : "text-gray-700"
                } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
              }
            >
              Lecture
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/About"
              className={({ isActive }) =>
                `block py-2 pr-4 pl-3 duration-200 ${
                  isActive ? "text-orange-700" : "text-gray-700"
                } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
              }
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/Contact"
              className={({ isActive }) =>
                `block py-2 pr-4 pl-3 duration-200 ${
                  isActive ? "text-orange-700" : "text-gray-700"
                } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
              }
            >
              Contact us
            </NavLink>
          </li>
        </ul>

        <div className="sm:flex gap-6 text-[14px] hidden ">
         
          <Link to="https://github.com/NoorNazar123" target="_blank">
            <FaTwitter className="cursor-pointer hover:scale-150 duration-1000 hover:text-orange-500" />
          </Link>
          <Link to="#" target="_blank">
            <FaFacebookF className="cursor-pointer hover:scale-150 duration-1000 hover:text-orange-500" />
          </Link>
          <Link to="#" target="_blank">
            <FaInstagram className=" cursor-pointer hover:scale-150 duration-1000 hover:text-orange-500" />
          </Link>
        </div>

        <div onClick={ActiveNav}>
          <HiOutlineBarsArrowDown className={` 
             ${
           isBarOpen
             ? " text-3xl  rotate-90 duration-1000 hover:text-orange-500 "
             : " text-3xl duration-1000 hover:text-orange-500"
         }`}
          />
        </div>

      </div>
    </div>
  );
}

export default Header;
