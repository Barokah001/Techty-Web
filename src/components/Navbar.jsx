import React from "react";
import Button from './Button'

const Navbar = () => {
  return (
    <div className="flex justify-between items-center px-10 py-3 bg-[#F0F8FF]">
      <div className="flex gap-1 justify-center items-center">
        <img src="/images/Logo..png" />
        <h1 className="text-2xl font-bold">Techty</h1>
      </div>

      <div className="flex justify-betwee gap-5 items-center">
        <a
          href="#"
          className="px-3 gap-4 text-l font-normal text-[#171A1F] hover:text-[#28D08A]"
        >
          <li className="list-none">Home</li>
        </a>
        <a
          href="#"
          className="px-3 gap-4 text-l font-normal text-[#171A1F] hover:text-[#28D08A]"
        >
          <li className="list-none">About</li>
        </a>
        <a
          href="#"
          className="px-3 gap-4 text-l font-normal text-[#171A1F] hover:text-[#28D08A]"
        >
          <li className="list-none">Services</li>
        </a>
        <a
          href="#"
          className="px-3 gap-4 text-l font-normal text-[#171A1F] hover:text-[#28D08A]"
        >
          <li className="list-none">Blog</li>
        </a>
        <a
          href="#"
          className="px-3 gap-4 text-l font-normal text-[#171A1F] hover:text-[#28D08A]"
        >
          <li className="list-none">Contact Us</li>
        </a>
        <Button />
      </div>
    </div>
  );
};

export default Navbar;
