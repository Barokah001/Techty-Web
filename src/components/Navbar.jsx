import React from "react";
import Button from './Button'

const Navbar = () => {
  return (
    <div className="flex justify-between items-center px-10 py-3 bg-[#F0F8FF] font-space">
      <div className="flex gap-1 justify-center items-center">
        <img src="/images/Logo..png" />
        <h1 className="text-2xl font-bold">Techty</h1>
      </div>

      <div className="flex justify-betwee gap-5 items-center">
        <Navlink
          to="/"
          className="px-3 gap-4 text-l font-normal text-[#171A1F] hover:text-[#28D08A]"
        >
          Home
        </Navlink>
        <Navlink
          to="/about"
          className="px-3 gap-4 text-l font-normal text-[#171A1F] hover:text-[#28D08A]"
        >
          About
        </Navlink>
        <Navlink
          to="/services"
          className="px-3 gap-4 text-l font-normal text-[#171A1F] hover:text-[#28D08A]"
        >
          Services
        </Navlink>
        <Navlink
          to="/blog"
          className="px-3 gap-4 text-l font-normal text-[#171A1F] hover:text-[#28D08A]"
        >
          Blog
        </Navlink>
        <Navlink
          to="/contact"
          className="px-3 gap-4 text-l font-normal text-[#171A1F] hover:text-[#28D08A]"
        >
          Contact Us
        </Navlink>
        <Button />
      </div>
    </div>
  );
};

export default Navbar;
