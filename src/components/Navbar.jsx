import React from "react";
import Button from "./Button";
import { NavLink } from "react-router-dom";

const Navbar = ({style}) => {
  return (
    <nav className={`flex justify-between items-center px-10 py-3 font-space ${style}`}>
      <div className="flex gap-1 justify-center items-center">
        <img src="/images/Logo..png" />
        <h1 className="text-2xl font-bold">Techty</h1>
      </div>

      <div className="flex justify-between gap-5 items-center">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "text-[#28D08A] font-semibold underline underline-offset-8"
              : "text-normal text-black"
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive
              ? "text-[#28D08A] font-semibold underline underline-offset-8"
              : "text-normal text-black"
          }
        >
          About
        </NavLink>
        <NavLink
          to="/services"
          className={({ isActive }) =>
            isActive
              ? "text-[#28D08A] font-semibold underline underline-offset-8"
              : "text-normal text-black"
          }
        >
          Services
        </NavLink>
        <NavLink
          to="/blog"
          className={({ isActive }) =>
            isActive
              ? "text-[#28D08A] font-semibold underline underline-offset-8"
              : "text-normal text-black"
          }
        >
          Blog
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive
              ? "text-[#28D08A] font-semibold underline underline-offset-8"
              : "text-normal text-black"
          }
        >
          Contact Us
        </NavLink>

        <Button
          name="Request a Free Demo"
          style={'bg-black hover:bg-[#28D08A]'}
        />
      </div>
    </nav>
  );
};

export default Navbar;
