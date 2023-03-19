import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import "./hamburger.css";

let Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <nav>
      <div className="navbar-box flex items-center justify-between py-4 text-[var(--primarytext)]">
        <div className="left flex items-center ml-10 sm:ml-20 md:ml-20 lg:ml-20">
          <div className="name text-[var(--primarytext)] flex flex-col text-center justify-center items-center font-extrabold text-xl cursor-pointer">
            <div>
              <NavLink to="/">Shivam Singh</NavLink>
            </div>
            <div>
              <NavLink to="/">Kushwaha</NavLink>
            </div>
          </div>
          <div className="role font-semibold mx-10 animate-bounce">
            Frontend Developer
          </div>
        </div>
        <div className="right mr-10 sm:mr-20">
          <div className="right-box hidden lg:flex font-semibold items-center">
            <div className="cursor-pointer hover:text-purple-500 py-2 transition-colors delay-100 ease-out duration-200">
              <NavLink to="/resume">Resume</NavLink>
            </div>
            <div className="mx-2">|</div>
            <div className="cursor-pointer hover:text-purple-500 py-2 transition-colors delay-100 ease-out duration-200">
              <NavLink to="/projects">Projects</NavLink>
            </div>
            <div className="mx-2">|</div>
            <div className="cursor-pointer hover:text-purple-500 py-2 transition-colors delay-100 ease-out duration-200">
              <NavLink to="/contact">Contact</NavLink>
            </div>
          </div>
          <div className="MOBILE-MENU flex lg:hidden mx-auto bg-black">
            <div
              className="HAMBURGER-ICON space-y-2"
              onClick={() => setIsNavOpen((prev) => !prev)}
            >
              <span className="block h-0.5 w-8 animate-pulse bg-white"></span>
              <span className="block h-0.5 w-8 animate-pulse bg-white"></span>
              <span className="block h-0.5 w-8 animate-pulse bg-white"></span>
            </div>

            <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
              <div
                className="absolute top-0 right-0 px-8 py-8"
                onClick={() => setIsNavOpen(false)}
              >
                <svg
                  className="h-8 w-8 text-white"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </div>
              <ul className="flex flex-col items-center justify-between min-h-[250px] bg-black">
                <li className="border-b border-gray-400 my-8 uppercase">
                  <NavLink to="/" onClick={() => setIsNavOpen(false)}>
                    Home
                  </NavLink>
                </li>
                <li className="border-b border-gray-400 my-8 uppercase">
                  <NavLink to="/resume" onClick={() => setIsNavOpen(false)}>
                    Resume
                  </NavLink>
                </li>
                <li className="border-b border-gray-400 my-8 uppercase">
                  <NavLink to="/projects" onClick={() => setIsNavOpen(false)}>
                    Projects
                  </NavLink>
                </li>
                <li className="border-b border-gray-400 my-8 uppercase">
                  <NavLink to="/contact" onClick={() => setIsNavOpen(false)}>
                    Contact
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
