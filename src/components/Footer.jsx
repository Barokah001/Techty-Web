import React from "react";
import Button from "./Button";

const Footer = () => {
  return (
    <div className="flex flex-col items-center h-screen w-full bg-[#495460] text-[#FFFFFF] px-10">
      <div className="flex justify-between items-center h-[90px] w-full mt-10 py-15">
        <div className="font-semibold text-3xl w-[570px]">
          Ready to take your business to the next level?
        </div>
        <Button />
      </div>

      <hr className="border-t border-gray-500 w-[90%] my-25" />

      <div className="flex justify-between items-center w-full px-10">
        <div className="flex flex-col gap-1 justify-start items-start h-[230px]">
          <div className="flex flex-col items-start pb-8">
            <img src="/images/Logo..png" />
            <h1 className="text-2xl font-bold">Techty</h1>
          </div>

          <div className="flex justify-start items-center gap-5 py-4">
            <img src="/images/twitter-x-line (1).png" alt="" />
            <img src="/images/Vector (2).png" alt="" />
            <img src="/images/Vector (3).png" alt="" />
            <img src="/images/Vector (4).png" alt="" />
          </div>

          <div>
            <p className="w-[80%]">
              Copyright © 2023 Techty. All Rights Reserved
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center h-[230px]">
          <h3 className="text-xl font-semibold">Quick links</h3>
          <ul>
            <li className="transition-transform duration-500 ease-in-out hover:translate-x-3 py-3 hover:text-gray-400">
              <a href="">About</a>
            </li>
            <li className="transition-transform duration-500 ease-in-out hover:translate-x-3 py-3 hover:text-gray-400">
              <a href="">Services</a>
            </li>
            <li className="transition-transform duration-500 ease-in-out hover:translate-x-3 py-3 hover:text-gray-400">
              <a href="">Blog</a>
            </li>
            <li className="transition-transform duration-500 ease-in-out hover:translate-x-3 py-3 hover:text-gray-400">
              <a href="">Contact Us</a>
            </li>
          </ul>
        </div>

        <div className="flex flex-col items-center h-[230px]">
          <h3 className="text-xl font-semibold">Socials</h3>
          <ul>
            <li className="transition-transform duration-500 ease-in-out hover:translate-x-3 py-3 hover:text-gray-400">
              <a href="">Twitter</a>
            </li>
            <li className="transition-transform duration-500 ease-in-out hover:translate-x-3 py-3 hover:text-gray-400">
              <a href="">Facebook</a>
            </li>
            <li className="transition-transform duration-500 ease-in-out hover:translate-x-3 py-3 hover:text-gray-400">
              <a href="">LinkedIn</a>
            </li>
          </ul>
        </div>

        <div className="flex flex-col justify-start w-80 items-start gap-10 h-[230px]">
          <h3 className="text-xl font-semibold">Our Newsletter</h3>
          <p className="w-[80%]">
            Subscribe to our newsletter to get our news delivered to you.
          </p>
          <div className="flex relative pr-2">
            <input
              type="email"
              name="email"
              id=""
              placeholder="Email Address"
              className="rounded-md text-white pl-2 pr-24 py-2 border border-white bg-none"
            />
            <button className="absolute cursor-pointer right-2 px-2 py-2 bg-[#28D08A] hover:bg-[#28D08A] text-[#ffffff] text-[17px] font-normal rounded-md">
              Join
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
