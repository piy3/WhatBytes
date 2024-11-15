"use client";
import React, { useState } from "react";
import Link from "next/link";
import options from "@/Components/sideMenuOptions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

function SideMenu() {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [toggle, setToggle] = useState(false);

  const toggleMenu = () => {
    setToggle(!toggle);
  };

  const handleMenuClick = (index) => {
    setSelectedIndex(index);
    setToggle(false); // Optional: Close menu on small screens after selection
  };

  return (
    <>
      {/* Sidebar for larger screens */}
      <div className="flex-col hidden sm:flex ">
        {options.map((val, index) => {
          const IconComponent = val.icon;
          return (
            <Link href={val.path} key={index}>
              <button
                onClick={() => handleMenuClick(index)}
                className={`flex p-4 font-serif rounded-r-[15px] w-full hover:bg-slate-100 ${
                  selectedIndex === index ? "bg-slate-200" : "bg-white"
                }`}
              >
                <IconComponent className="text-xl ml-0 mr-4" />
                <span className="text-base">{val.name}</span>
              </button>
            </Link>
          );
        })}
      </div>

      {/* Sidebar for smaller screens */}
      <div className="absolute right-0 top-0 sm:hidden bg-white">
        <button onClick={toggleMenu} >
          <FontAwesomeIcon
            icon={toggle ? faTimes : faBars}
            className={`absolute right-2 transform transition-transform duration-300 ${
              toggle ? "rotate-180" : "rotate-0"
            }`}
          />
        </button>
        {toggle &&
          options.map((val, index) => {
            const IconComponent = val.icon;
            return (
              <Link href={val.path} key={index}>
                <button
                  onClick={() => handleMenuClick(index)}
                  className={`mt-2 flex p-4 font-serif rounded-r-[15px] w-full hover:bg-slate-100 ${
                    selectedIndex === index ? "bg-slate-200" : "bg-white"
                  }`}
                >
                  <IconComponent className="text-xl ml-0 mr-4" />
                  <span className="text-base">{val.name}</span>
                </button>
              </Link>
            );
          })}
      </div>
    </>
  );
}

export default SideMenu;
