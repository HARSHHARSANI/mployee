"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css"; // Import the styles for react-modern-drawer
import { AiOutlineMenu } from "react-icons/ai";

const Header = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setIsDrawerOpen(true);
      } else {
        setIsDrawerOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    // Cleanup function to remove the event listener
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty dependency array to run the effect only once on mount

  return (
    <div className="grid grid-cols-12 text-center justify-center mt-3">
      {/* Conditionally render hamburger icon */}
      <div className="col-span-2 sm:hidden">
        <AiOutlineMenu
          className="text-3xl cursor-pointer"
          onClick={toggleDrawer}
        />
      </div>
      {/* Render the drawer */}
      <Drawer
        open={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        direction="left"
        style={{ zIndex: 1000 }}
      >
        <div className="pt-10">
          <div className="hover:bg-gray-200 px-2 py-1 rounded-xl">
            Resume Scan
          </div>
          <div className="hover:bg-gray-200 px-2 py-1 rounded-xl">
            New Launch
          </div>
          <div className="hover:bg-gray-200 px-2 py-1 rounded-xl">
            Resume Keywords
          </div>
          <div className="hover:bg-gray-200 px-2 py-1 rounded-xl">
            Career Blogs
          </div>
          <div className="hover:bg-gray-200 px-2 py-1 rounded-xl">About Us</div>
        </div>
      </Drawer>
      {/* Rest of your header content */}
      <div className="col-span-8 sm:col-span-10 md:col-span-8 flex flex-row font-bold justify-evenly items-center text-sm">
        <div className="hover:bg-gray-200 px-2 rounded-xl ">Resume Scan</div>
        <div
          className="text-orange-300 bg-orange-100 rounded-full px-2 items-center hover:bg-orange-200 hover:text-orange-400"
          style={{
            marginTop: "-2px",
          }}
        >
          New Launch
        </div>
        <div className="hover:bg-gray-200 px-2 rounded-xl ">
          Resume Keywords
        </div>
        <div className="hover:bg-gray-200 px-2 rounded-xl ">Career Blogs</div>
        <div className="hover:bg-gray-200 px-2 rounded-xl ">About Us</div>
      </div>
      <div className="col-span-2 sm:col-span-2 md:col-span-2 items-center  flex flex-row">
        <Image
          src="https://img.freepik.com/free-photo/fashion-boy-with-yellow-jacket-blue-pants_71767-96.jpg?size=626&ext=jpg&ga=GA1.1.777553369.1715340701&semt=sph"
          alt="Logo"
          className="rounded-full h-10 w-10"
          width={10}
          height={10}
        />
        <span className="text-xs font-semibold ml-2 text-center items-center justify-center">
          Divyanshu
        </span>
      </div>
    </div>
  );
};

export default Header;
