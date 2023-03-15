import React from "react";
import { NavLink } from "react-router-dom";

let Navbar = () => {
  return (
    <nav>
      <div className="navbar-box flex items-center justify-between py-4 text-[var(--primarytext)]">
        <div className="left flex items-center ml-20">
          <div className="name text-[var(--primarytext)] flex flex-col justify-center items-center font-extrabold text-xl cursor-pointer">
            <div>
              <NavLink to="/">Shivam Singh</NavLink>
            </div>
            <div>
              <NavLink to="/">Kushwaha</NavLink>
            </div>
          </div>
          <div className="role font-semibold mx-10">Frontend Developer</div>
        </div>
        <div className="right mr-20">
          <div className="right-box flex font-semibold items-center">
            <div className="cursor-pointer hover:text-purple-800 py-2 transition-colors delay-100 ease-out duration-200">
              <NavLink to="/resume">Resume</NavLink>
            </div>
            <div className="mx-2">|</div>
            <div className="cursor-pointer hover:text-purple-800 py-2 transition-colors delay-100 ease-out duration-200">
              <NavLink to="/projects">Projects</NavLink>
            </div>
            <div className="mx-2">|</div>
            <div className="cursor-pointer hover:text-purple-800 py-2 transition-colors delay-100 ease-out duration-200">
              <NavLink to="/contact">Contact</NavLink>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
