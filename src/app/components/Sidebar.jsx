"use client";
import React, { useState } from "react";
import { IoAddOutline } from "react-icons/io5";
import { LuDot } from "react-icons/lu";
import { RiStackFill } from "react-icons/ri";
import { TbNotes } from "react-icons/tb";
import { RiMoneyDollarBoxLine } from "react-icons/ri";
import { GiTeamIdea } from "react-icons/gi";

const Sidebar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleDropdownClick = (item) => {
    console.log(`Clicked on ${item}`);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  return (
    <div className="text-black h-screen w-full sm:w-56 flex flex-col mt-5 mx-4">
      <div
        className="p-4 bg-slate-700 rounded-xl flex flex-row items-center cursor-pointer"
        onClick={toggleDropdown}
      >
        <div className="text-orange-400">
          <RiStackFill />
        </div>
        <span className="ml-3 text-white">Job Boards</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`h-5 w-5 ml-auto ${
            isDropdownOpen ? "rotate-90" : ""
          } transition duration-300`}
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M5.293 6.293a1 1 0 0 1 1.414 0L10 9.586l3.293-3.293a1 1 0 1 1 1.414 1.414l-4 4a1 1 0 0 1-1.414 0l-4-4a1 1 0 0 1 0-1.414zM10 3a1 1 0 0 1 1 1v4a1 1 0 0 1-2 0V4a1 1 0 0 1 1-1z"
          />
          <path
            fillRule="evenodd"
            d="M4 10a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2H5a1 1 0 0 1-1-1zM16 10a1 1 0 0 0-1-1h-4a1 1 0 0 0 0 2h4a1 1 0 0 0 1-1z"
          />
        </svg>
      </div>
      {isDropdownOpen && (
        <>
          <div
            className="p-4 cursor-pointer hover:bg-gray-700 text-orange-400 flex flex-row gap-3 items-center"
            onClick={() => handleDropdownClick("ui/ux designer")}
          >
            <LuDot />
            UI/UX Designer
          </div>
          <div
            className="p-4 cursor-pointer hover:bg-gray-700 flex flex-row gap-3 items-center"
            onClick={() => handleDropdownClick("web developer")}
          >
            <LuDot />
            Web Developer
          </div>
          <div
            className="p-4 cursor-pointer hover:bg-gray-700 flex flex-row gap-3 items-center"
            onClick={() => handleDropdownClick("analyst")}
          >
            <LuDot />
            Analyst
          </div>
          <div className="p-4 cursor-pointer hover:bg-gray-700">
            <div className="relative group">
              <div className="flex items-center justify-between">
                <div className="text-orange-400 flex flex-row items-center gap-3">
                  <IoAddOutline />
                  Create a new Profile
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 transform group-hover:rotate-90 transition duration-300"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 6.293a1 1 0 0 1 1.414 0L10 9.586l3.293-3.293a1 1 0 1 1 1.414 1.414l-4 4a1 1 0 0 1-1.414 0l-4-4a1 1 0 0 1 0-1.414zM10 3a1 1 0 0 1 1 1v4a1 1 0 0 1-2 0V4a1 1 0 0 1 1-1z"
                  />
                  <path
                    fillRule="evenodd"
                    d="M4 10a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2H5a1 1 0 0 1-1-1zM16 10a1 1 0 0 0-1-1h-4a1 1 0 0 0 0 2h4a1 1 0 0 0 1-1z"
                  />
                </svg>
              </div>
              <div className="relative bg-gray-700 text-white rounded-lg mt-2 w-48 py-2 hidden group-hover:block transition duration-300">
                <div
                  className="p-2 cursor-pointer hover:bg-gray-600"
                  onClick={() => handleDropdownClick("create a new Profile")}
                >
                  Create a new Profile
                </div>
              </div>
            </div>
          </div>
        </>
      )}
      <div className="mx-4 mt-3">
        <div className="flex flex-row text-lg my-4 items-center gap-2">
          <div>
            <TbNotes />
          </div>
          <span> History</span>
        </div>
        <div className="flex flex-row text-lg my-4 items-center gap-2">
          <TbNotes />
          <span>Saved Jobs</span>
        </div>
        <div className="flex flex-row text-lg my-4 items-center gap-2">
          <RiMoneyDollarBoxLine />
          <span> Plans</span>
        </div>
        <div className="flex flex-row text-lg my-4 items-center gap-2">
          <GiTeamIdea />
          <span className="text-lg">Manage Profiles</span>
        </div>
      </div>
      <div className="mt-80 sm:static md:fixed md:bottom-0">
        <span className="text-gray-400">Help and Support</span>
        <div className="mx-4 mt-3">
          <div className="flex flex-row text-lg my-4 items-center gap-2">
            <div>
              <TbNotes />
            </div>
            <span> Settings</span>
          </div>
          <div className="flex flex-row text-lg my-4 items-center gap-2">
            <TbNotes />
            <span>Help Center</span>
          </div>
          <div className="flex flex-row text-lg my-4 items-center gap-2">
            <RiMoneyDollarBoxLine />
            <span>
              {" "}
              Current Plan : <span className="text-orange-400">Free</span>
            </span>
          </div>
          <div className="flex flex-row text-lg my-4 items-center gap-2">
            <GiTeamIdea />
            <span className="text-lg">Manage Profiles</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
