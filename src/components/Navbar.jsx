import React, { useRef } from "react";
import { gsap } from "gsap";
import { CiMenuBurger } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";
import { NavLink } from "react-router-dom";
import Headroom from "react-headroom";

const SideBar = ({ isContactPage }) => {
  const navMenuRef = useRef(null);
  const menuItemsRef = useRef([]);
  const timelineRef = useRef(null);

  const openMenu = () => {
    if (!timelineRef.current) {
      timelineRef.current = gsap.timeline({ paused: true });

      timelineRef.current
        .to(navMenuRef.current, {
          x: 0,
          duration: 0.3,
          ease: "power2.out",
        })
        .from(menuItemsRef.current, {
          opacity: 0,
          x: 50,
          stagger: 0.2,
          duration: 0.5,
          ease: "power2.out",
        });
    }

    timelineRef.current.play();
  };

  const closeMenu = () => {
    if (timelineRef.current) {
      timelineRef.current.reverse();
    }
  };

  return (
    <>
      <Headroom>
        <div className="h-[15vh] flex justify-between items-center py-6 md:py-4 px-7 md:px-24 bg-white shadow-md z-50 relative">
          <div className="flex justify-center items-center gap-6">
            <svg
              className="h-14 w-14"
              preserveAspectRatio="xMidYMid meet"
              data-bbox="87 80.1 505 352.7"
              viewBox="87 80.1 505 352.7"
              height="644"
              width="896"
              xmlns="http://www.w3.org/2000/svg"
              data-type="color"
              role="presentation"
              aria-hidden="true"
              aria-label=""
            >
              <g>
                <path
                  d="M211.8 119.3 87 158.5v214.2l16.3 30.1 16.2 30 .5-124.1.5-124.1L228 149.3c59.1-19.5 108.4-35.4 109.5-35.4 1.7-.1 87.5 27.9 198.7 64.7l22.8 7.6.2 122.9.3 122.9 16.3-30 16.2-30.1-.2-106.6-.3-106.7L465 119.3c-69.6-21.6-126.9-39.2-127.5-39.2-.5 0-57.1 17.7-125.7 39.2"
                  fill="#bf1c2c"
                  data-color="1"
                ></path>
                <path
                  d="M256.8 179.3 177 204.5V342l10.3 18.9 10.2 18.9.3-79.2.2-79.2 69.6-22.9c38.3-12.6 70.4-22.8 71.3-22.7.9 0 32.9 10.4 71.1 23l69.5 22.9.5 79.6.5 79.6 10.8-19.8 10.7-19.8v-68.1c0-37.5-.4-68.3-.8-68.6-1.5-.9-162.4-50.6-163.5-50.5-.7.1-37.1 11.4-80.9 25.2"
                  fill="#bf1c2c"
                  data-color="1"
                ></path>
                <path
                  d="m304.5 231.4-32 10.1-.3 28.3-.2 28.2 4.5 8.2 4.5 8.3v-66l28.8-9.6 28.9-9.6 29.4 9.6 29.4 9.7.3 32.4.3 32.5 3.9-7 4-7v-58l-33.2-10.3c-18.3-5.6-34-10.2-34.8-10.1s-15.9 4.7-33.5 10.3"
                  fill="#bf1c2c"
                  data-color="1"
                ></path>
              </g>
            </svg>
            <div className="flex flex-col gap-1">
              <span className="text-sm font-medium w-5 whitespace-nowrap">
                PRANAVI
              </span>
              <span className="text-sm font-medium w-5 whitespace-nowrap">
                PEB CONSTRUCTIONS
              </span>
            </div>
          </div>
          <div className="hidden md:flex justify-center items-center gap-6 font-medium">
            <NavLink
              className={({ isActive }) => (isActive ? "underline" : "")}
              to="/"
            >
              Home
            </NavLink>
            <NavLink
              className={({ isActive }) => (isActive ? "underline" : "")}
              to="/services"
            >
              Services
            </NavLink>
            <NavLink
              className={({ isActive }) => (isActive ? "underline" : "")}
              to="/gallery"
            >
              Gallery
            </NavLink>
            <NavLink
              className={({ isActive }) => (isActive ? "underline" : "")}
              to="/contact"
            >
              Contact
            </NavLink>
          </div>
          {!isContactPage && (
            <div className="hidden md:block">
              <button className="bg-black text-white px-6 py-2 text-sm rounded-md hover:bg-transparent hover:text-black border border-black hover:border-black transition-all duration-300">
                Get a Quote
              </button>
            </div>
          )}
          <div className="block md:hidden">
            <CiMenuBurger
              onClick={openMenu}
              className="text-4xl cursor-pointer text-gray-700 hover:text-gray-900 transition"
            />
          </div>
        </div>
      </Headroom>
      <div
        ref={navMenuRef}
        className="fixed top-0 right-0 w-full h-full bg-black transform translate-x-full z-50"
      >
        <ul className="flex flex-col items-center justify-center h-full text-white text-5xl space-y-6">
          {["Home", "Services", "Gallery", "Contact"].map((item, index) => (
            <NavLink
              to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
              onClick={closeMenu}
              className={({ isActive }) => `${isActive ? "underline" : ""}`}
              key={index}
              ref={(el) => {
                if (el && !menuItemsRef.current.includes(el)) {
                  menuItemsRef.current[index] = el;
                }
              }}
            >
              {item}
            </NavLink>
          ))}
        </ul>
        <IoMdClose
          onClick={closeMenu}
          className="absolute top-5 right-5 text-4xl text-white cursor-pointer hover:text-gray-400 transition"
        />
      </div>
    </>
  );
};

export default SideBar;
