import React from "react";
import Icons from "../Icon/Icons";
import { MdMarkEmailUnread } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa6";

function Contact() {
  return (
    <div className="w-full ">
    
      <div className="w-[80%] mx-auto mt-8 sm:flex sm:gap-8">

        <aside className="w-[95%] mb-4 bg-white rounded-lg shadow-md flex flex-col  gap-20 px-12 py-8">
          <h1 className="text-4xl font-sans font-bold text-gray-700">
            Social media accounts:
          </h1>
          <main className="font-thin">
            <h4 className="my-4">
              <MdMarkEmailUnread className="text-2xl hover:text-orange-500 hover:duration-500 hover:scale-110" />{" "}
              noor123.uok@gmail.com
            </h4>
            <h4>
              <FaWhatsapp className="text-2xl hover:text-orange-500 hover:duration-500 hover:scale-110 " />
              (92+) 3472904990
            </h4>
          </main>
          <Icons />
        </aside>
        <div className="w-[95%] font-sans bg-gray-100  rounded-lg shadow-md flex flex-col justify-around px-8 py-1">
          <h1 className="text-4xl mb-1 font-bold text-gray-700">Contact Us</h1>
          <form>
            <label className="font-semibold" htmlFor="yourName">
              Your Name:
              <br />
              <input
                type="text"
                name="yourName"
                id="yourName"
                placeholder="Enter your name"
                required
                className="w-full py-3 px-2 rounded-md my-2 outline-none shadow-md"
              />
            </label>
            <br />

            <label className="font-semibold" htmlFor="gmailId">
              Gmail Id:
              <br />
              <input
                type="email"
                name="gmailId"
                id="gmailId"
                placeholder="Enter your email"
                className="w-full py-3 px-2 rounded-md my-2 outline-none shadow-md"
                required
              />
            </label>
            <br />

            <label className="font-semibold" htmlFor="message">
              Message:
              <br />
              <textarea
                name="message"
                id="message"
                placeholder="What's in your mind"
                rows="4"
                maxLength="200"
                className="w-full py-2 px-2 rounded-md my-2 outline-none shadow-md"
                required
              ></textarea>
            </label>

            <br />
            <button
              type="submit"
              className="w-[6rem] py-2 px-4 rounded-md text-white bg-orange-500 hover:bg-orange-600 hover:duration-500"
            >
              Submit
            </button>
          </form>
        </div>

      </div>

    </div>
  );
}

export default Contact;
