import React from "react";
import Button from "./Button";
import { NavLink } from "react-router-dom";
import { AlignJustify, X } from "lucide-react";

const Navbar = ({style}) => {

  const showSidebar = ()=> {
    const sidebar = document.querySelector('.sidebar');
    const menuToggle = document.querySelector(".menu-toggle");
    sidebar.style.display = "flex";
    menuToggle.style.display = "none";
  }

  const hideSidebar = ()=> {
    const sidebar = document.querySelector(".sidebar");
    sidebar.style.display = "none";
    const menuToggle = document.querySelector(".menu-toggle");
    menuToggle.style.display = "block";
  }
  return (
    <nav
      className={`flex justify-between items-center px-3 md:px-10 py-3 font-space ${style} w-full`}
    >
      <div className="flex gap-1 justify-center items-center">
        <img src="/images/Logo..png" />
        <h1 className="text-2xl font-bold">Techty</h1>
      </div>

      <div className="hidden md:flex justify-between gap-5 items-center">
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
          style={"bg-black hover:bg-[#28D08A]"}
        />
      </div>

      <div
        onClick={showSidebar}
        className="menu-toggle flex md:hidden text-xl justify-center items-center text-black font-bold"
      >
        <AlignJustify />
      </div>
      {/* Mobile View */}

      <div className="sidebar fixed hidden flex-col justify-start items-start w-2/3 right-0 top-0 text-white backdrop-blur-[8px] px-5 ">
        <div
          onClick={hideSidebar}
          className="flex py-5 text-xl justify-center items-center text-black font-bold"
        >
          <X />
        </div>

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
          style={"bg-black hover:bg-[#28D08A]"}
        />
      </div>
    </nav>
  );
};

export default Navbar;
