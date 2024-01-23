import React from "react";
import { FaHandHoldingHeart } from "react-icons/fa";
import Icons from "../Icon/Icons";

function Footer() {

  return (
    <div className="w-[98%] mx-auto shadow-lg outline-black flex flex-col justify-center items-center mt-10">
     
        <FaHandHoldingHeart className="text-4xl my-8 text-red-600 hover:scale-150 duration-1000" />
        <h2 className=" text-center px-10 py-16 bg-orange-500">
          Welcome to InfoBlogs! your go-to destination for inspiration and
          knowledge! Immerse yourself in a rich tapestry of articles that cover
          a myriad of topics. We invite you to explore, engage, and become a
          valued part of our growing community. Thank you for choosing
          InfoBlogs.
        </h2>
      
      <div className="w-full h-80 bg-white shadow-lg flex justify-center items-center ">
       
         <Icons /> 
     
      </div>
    </div>
  );
}

export default Footer;
