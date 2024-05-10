import React from "react";
import Sidebar from "./Sidebar";
import Jobs from "./Jobs";
import { MdEdit } from "react-icons/md";

const Hero = () => {
  return (
    <>
      <div className="grid grid-cols-12 gap-4">
        {/* Sidebar */}
        <div className="col-span-12 md:col-span-2">
          <Sidebar />
        </div>
        {/* Main Content */}
        <div className="col-span-12 md:col-span-9 h-80">
          {/* Container */}
          <div className="bg-white mt-6 rounded-xl shadow-xl">
            {/* Properties */}
            <div className="p-10 flex items-center justify-between  px-10 ">
              {/* First div (80%) */}
              <div className="w-full md:w-4/5 md:pr-4">
                <span className="block text-lg font-bold mb-2">Properties</span>
                {/* Properties Details */}
                <div className="flex flex-col md:flex-row md:gap-5 text-sm flex-wrap text-wrap w-full md:w-5/6">
                  <div className="bg-gray-100 px-4 py-2 rounded-lg mb-2 md:mb-0">
                    Job Type: <span className="font-bold">Hybrid</span>
                  </div>
                  <div className="bg-gray-100 px-4 py-2 rounded-lg mb-2 md:mb-0">
                    Date Posted:{" "}
                    <span className="font-bold">24-04-2024 to 30-04-2024</span>
                  </div>
                  <div className="bg-gray-100 px-4 py-2 rounded-lg mb-2 md:mb-0">
                    Job Type: <span className="font-bold">Full Time</span>
                  </div>
                  <div className="bg-gray-100 px-4 py-2 rounded-lg">
                    Salary Range: <span className="font-bold">$1000-$2500</span>
                  </div>
                  <div className="bg-gray-100 px-4 py-2 rounded-lg">
                    Location:{" "}
                    <span className="font-bold">
                      Pune &gt; Delhi &gt; Hydrabad &gt; Tamil Nadu
                    </span>
                  </div>
                  <div className="bg-gray-100 px-4 py-2 rounded-lg">
                    <span className="font-bold">+1</span>
                  </div>
                  <div className="bg-orange-200 px-4 py-2 rounded-lg flex flex-row items-center gap-3">
                    <div className="text-orange-500 text-xl">
                      <MdEdit />
                    </div>
                    <span className="font-bold">Edit Profile</span>
                  </div>
                </div>
              </div>
              {/* Second div (20%) */}
              <div className="bg-slate-600 w-full md:w-2/5 md:pl-1 flex items-center justify-center py-3 md:px-1 rounded-xl md:mr-4">
                {/* Existing content */}
                <div className="flex flex-col md:flex-col md:items-center w-full ">
                  <span className="text-white px-1 py-2 font-thin md:w-6/8 text-center md:text-left">
                    Sunt do deserunt dolor minim ad.
                  </span>
                  <button className="mt-2 px-4 py-2 bg-orange-500 text-white rounded">
                    Refresh Jobs
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-16">
            <Jobs />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
