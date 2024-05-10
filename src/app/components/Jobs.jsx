import Image from "next/image";
import React from "react";
import { LuDot } from "react-icons/lu";
import { IoBagHandleOutline } from "react-icons/io5";
import { LuClock } from "react-icons/lu";
import { IoSaveOutline } from "react-icons/io5";
import graphImage from "../assets/graph.png";

const Jobs = () => {
  return (
    <div className=" border-spacing-1 shadow-xl bg-white border border-r-2 border-gray-300">
      <h1 className="font-bold px-4 pt-3">Jobs (44)</h1>
      <div className="flex flex-row mt-4 mb-8 justify-between border mx-10">
        <div>
          <div className="flex flex-row h-20  pt-4 px-4">
            <div>
              <Image
                src="https://53.fs1.hubspotusercontent-na1.net/hub/53/hubfs/image8-2.jpg?width=893&height=600&name=image8-2.jpg"
                alt="Logo"
                width={80}
                height={80}
                className="h-10 w-20 background-cover rounded-xl"
              />
            </div>
            <div className="font-thin">
              <span className="font-bold">UI/UX Designer</span>
              <br />
              <span className="flex flex-row ">
                <div className="mt-1">Google</div>
                <div className="text-xl mt-1 ">
                  <LuDot />
                </div>
                <span className="bg-orange-300 text-orange-600 px-3 py-0.5 rounded-2xl ml-2">
                  Figma
                </span>{" "}
                <span className="bg-red-300 text-red-600 px-3 py-0.5 rounded-2xl ml-2">
                  Prototyping
                </span>
                <span className="bg-blue-300 text-blue-600 px-3 py-0.5 rounded-2xl ml-2">
                  User Interface
                </span>
              </span>
            </div>
          </div>
          <div className="flex flex-row items-center">
            <div className="flex flex-row gap-4 pl-10 pr-2">
              <div className="text-xl  text-gray-300">
                <IoBagHandleOutline />
              </div>
              <span className="font-bold">0-3 Years |</span>
            </div>
            <div className="flex flex-row gap-4 px-1 items-center">
              <div className="text-xl  text-gray-300">
                <LuClock />
              </div>
              <span className="font-bold">Full Time |</span>
            </div>
            <div className="flex flex-row gap-2 px-1 items-center">
              <div className="text-lg text-gray-300 font-semibold">
                Posted on :
              </div>
              <span className="font-bold">02 April 2024 </span>
            </div>
          </div>
          <div className="flex flex-col px-10">
            <ul className=" list-disc text-gray-500 font-thin  text-sm mt-4 mb-4 pl-4 ">
              <li>
                <span>
                  Consequat fugiat cillum labore nostrud tempor incididunt ad
                  proident nulla aliquip.
                </span>
              </li>
              <li>
                <span>
                  Consequat fugiat cillum labore nostrud tempor incididunt ad
                  proident nulla aliquip.
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className=" px-10 py-1">
          <div className="flex flex-row gap-4">
            <div>
              <button className="bg-orange-400 px-6 py-1 my-2 rounded-xl text-white font-semibold">
                Apply Now
              </button>
            </div>
            <div>
              <button className=" border py-1 my-2 rounded-xl flex flex-row gap-3 items-center px-2">
                <IoSaveOutline />
                Save
              </button>
            </div>
          </div>
          <div className="ml-28">
            <Image
              src="https://www.shutterstock.com/shutterstock/photos/2292261831/display_1500/stock-vector--semicircle-percentage-diagrams-percentage-ready-to-use-for-web-design-infographic-or-2292261831.jpg"
              alt="Graph Image"
              width={100}
              height={100}
              className="h-100 w-200 backdrop-blur-lg rounded-xl "
            />
          </div>
        </div>
      </div>
      <div className="flex flex-row mt-4 mb-8 justify-between border mx-10">
        <div>
          <div className="flex flex-row h-20  pt-4 px-4">
            <div>
              <Image
                src="https://53.fs1.hubspotusercontent-na1.net/hub/53/hubfs/image8-2.jpg?width=893&height=600&name=image8-2.jpg"
                alt="Logo"
                width={80}
                height={80}
                className="h-10 w-20 background-cover rounded-xl"
              />
            </div>
            <div className="font-thin">
              <span className="font-bold">UI/UX Designer</span>
              <br />
              <span className="flex flex-row ">
                <div className="mt-1">Google</div>
                <div className="text-xl mt-1 ">
                  <LuDot />
                </div>
                <span className="bg-orange-300 text-orange-600 px-3 py-0.5 rounded-2xl ml-2">
                  Figma
                </span>{" "}
                <span className="bg-red-300 text-red-600 px-3 py-0.5 rounded-2xl ml-2">
                  Prototyping
                </span>
                <span className="bg-blue-300 text-blue-600 px-3 py-0.5 rounded-2xl ml-2">
                  User Interface
                </span>
              </span>
            </div>
          </div>
          <div className="flex flex-row items-center">
            <div className="flex flex-row gap-4 pl-10 pr-2">
              <div className="text-xl  text-gray-300">
                <IoBagHandleOutline />
              </div>
              <span className="font-bold">0-3 Years |</span>
            </div>
            <div className="flex flex-row gap-4 px-1 items-center">
              <div className="text-xl  text-gray-300">
                <LuClock />
              </div>
              <span className="font-bold">Full Time |</span>
            </div>
            <div className="flex flex-row gap-2 px-1 items-center">
              <div className="text-lg text-gray-300 font-semibold">
                Posted on :
              </div>
              <span className="font-bold">02 April 2024 </span>
            </div>
          </div>
          <div className="flex flex-col px-10">
            <ul className=" list-disc text-gray-500 font-thin  text-sm mt-4 mb-4 pl-4 ">
              <li>
                <span>
                  Consequat fugiat cillum labore nostrud tempor incididunt ad
                  proident nulla aliquip.
                </span>
              </li>
              <li>
                <span>
                  Consequat fugiat cillum labore nostrud tempor incididunt ad
                  proident nulla aliquip.
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className=" px-10 py-1">
          <div className="flex flex-row gap-4">
            <div>
              <button className="bg-orange-400 px-6 py-1 my-2 rounded-xl text-white font-semibold">
                Apply Now
              </button>
            </div>
            <div>
              <button className=" border py-1 my-2 rounded-xl flex flex-row gap-3 items-center px-2">
                <IoSaveOutline />
                Save
              </button>
            </div>
          </div>
          <div className="ml-28">
            <Image
              src="https://www.shutterstock.com/shutterstock/photos/2292261831/display_1500/stock-vector--semicircle-percentage-diagrams-percentage-ready-to-use-for-web-design-infographic-or-2292261831.jpg"
              alt="Graph Image"
              width={100}
              height={100}
              className="h-100 w-200 backdrop-blur-lg rounded-xl "
            />
          </div>
        </div>
      </div>
      <div className="flex flex-row mt-4 mb-8 justify-between border mx-10">
        <div>
          <div className="flex flex-row h-20  pt-4 px-4">
            <div>
              <Image
                src="https://53.fs1.hubspotusercontent-na1.net/hub/53/hubfs/image8-2.jpg?width=893&height=600&name=image8-2.jpg"
                alt="Logo"
                width={80}
                height={80}
                className="h-10 w-20 background-cover rounded-xl"
              />
            </div>
            <div className="font-thin">
              <span className="font-bold">UI/UX Designer</span>
              <br />
              <span className="flex flex-row ">
                <div className="mt-1">Google</div>
                <div className="text-xl mt-1 ">
                  <LuDot />
                </div>
                <span className="bg-orange-300 text-orange-600 px-3 py-0.5 rounded-2xl ml-2">
                  Figma
                </span>{" "}
                <span className="bg-red-300 text-red-600 px-3 py-0.5 rounded-2xl ml-2">
                  Prototyping
                </span>
                <span className="bg-blue-300 text-blue-600 px-3 py-0.5 rounded-2xl ml-2">
                  User Interface
                </span>
              </span>
            </div>
          </div>
          <div className="flex flex-row items-center">
            <div className="flex flex-row gap-4 pl-10 pr-2">
              <div className="text-xl  text-gray-300">
                <IoBagHandleOutline />
              </div>
              <span className="font-bold">0-3 Years |</span>
            </div>
            <div className="flex flex-row gap-4 px-1 items-center">
              <div className="text-xl  text-gray-300">
                <LuClock />
              </div>
              <span className="font-bold">Full Time |</span>
            </div>
            <div className="flex flex-row gap-2 px-1 items-center">
              <div className="text-lg text-gray-300 font-semibold">
                Posted on :
              </div>
              <span className="font-bold">02 April 2024 </span>
            </div>
          </div>
          <div className="flex flex-col px-10">
            <ul className=" list-disc text-gray-500 font-thin  text-sm mt-4 mb-4 pl-4 ">
              <li>
                <span>
                  Consequat fugiat cillum labore nostrud tempor incididunt ad
                  proident nulla aliquip.
                </span>
              </li>
              <li>
                <span>
                  Consequat fugiat cillum labore nostrud tempor incididunt ad
                  proident nulla aliquip.
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className=" px-10 py-1">
          <div className="flex flex-row gap-4">
            <div>
              <button className="bg-orange-400 px-6 py-1 my-2 rounded-xl text-white font-semibold">
                Apply Now
              </button>
            </div>
            <div>
              <button className=" border py-1 my-2 rounded-xl flex flex-row gap-3 items-center px-2">
                <IoSaveOutline />
                Save
              </button>
            </div>
          </div>
          <div className="ml-28">
            <Image
              src="https://www.shutterstock.com/shutterstock/photos/2292261831/display_1500/stock-vector--semicircle-percentage-diagrams-percentage-ready-to-use-for-web-design-infographic-or-2292261831.jpg"
              alt="Graph Image"
              width={100}
              height={100}
              className="h-100 w-200 backdrop-blur-lg rounded-xl "
            />
          </div>
        </div>
      </div>
      <div className="flex flex-row mt-4 mb-8 justify-between border mx-10">
        <div>
          <div className="flex flex-row h-20  pt-4 px-4">
            <div>
              <Image
                src="https://53.fs1.hubspotusercontent-na1.net/hub/53/hubfs/image8-2.jpg?width=893&height=600&name=image8-2.jpg"
                alt="Logo"
                width={80}
                height={80}
                className="h-10 w-20 background-cover rounded-xl"
              />
            </div>
            <div className="font-thin">
              <span className="font-bold">UI/UX Designer</span>
              <br />
              <span className="flex flex-row ">
                <div className="mt-1">Google</div>
                <div className="text-xl mt-1 ">
                  <LuDot />
                </div>
                <span className="bg-orange-300 text-orange-600 px-3 py-0.5 rounded-2xl ml-2">
                  Figma
                </span>{" "}
                <span className="bg-red-300 text-red-600 px-3 py-0.5 rounded-2xl ml-2">
                  Prototyping
                </span>
                <span className="bg-blue-300 text-blue-600 px-3 py-0.5 rounded-2xl ml-2">
                  User Interface
                </span>
              </span>
            </div>
          </div>
          <div className="flex flex-row items-center">
            <div className="flex flex-row gap-4 pl-10 pr-2">
              <div className="text-xl  text-gray-300">
                <IoBagHandleOutline />
              </div>
              <span className="font-bold">0-3 Years |</span>
            </div>
            <div className="flex flex-row gap-4 px-1 items-center">
              <div className="text-xl  text-gray-300">
                <LuClock />
              </div>
              <span className="font-bold">Full Time |</span>
            </div>
            <div className="flex flex-row gap-2 px-1 items-center">
              <div className="text-lg text-gray-300 font-semibold">
                Posted on :
              </div>
              <span className="font-bold">02 April 2024 </span>
            </div>
          </div>
          <div className="flex flex-col px-10">
            <ul className=" list-disc text-gray-500 font-thin  text-sm mt-4 mb-4 pl-4 ">
              <li>
                <span>
                  Consequat fugiat cillum labore nostrud tempor incididunt ad
                  proident nulla aliquip.
                </span>
              </li>
              <li>
                <span>
                  Consequat fugiat cillum labore nostrud tempor incididunt ad
                  proident nulla aliquip.
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className=" px-10 py-1">
          <div className="flex flex-row gap-4">
            <div>
              <button className="bg-orange-400 px-6 py-1 my-2 rounded-xl text-white font-semibold">
                Apply Now
              </button>
            </div>
            <div>
              <button className=" border py-1 my-2 rounded-xl flex flex-row gap-3 items-center px-2">
                <IoSaveOutline />
                Save
              </button>
            </div>
          </div>
          <div className="ml-28">
            <Image
              src="https://www.shutterstock.com/shutterstock/photos/2292261831/display_1500/stock-vector--semicircle-percentage-diagrams-percentage-ready-to-use-for-web-design-infographic-or-2292261831.jpg"
              alt="Graph Image"
              width={100}
              height={100}
              className="h-100 w-200 backdrop-blur-lg rounded-xl "
            />
          </div>
        </div>
      </div>
      <div className="flex flex-row mt-4 mb-8 justify-between border mx-10">
        <div>
          <div className="flex flex-row h-20  pt-4 px-4">
            <div>
              <Image
                src="https://53.fs1.hubspotusercontent-na1.net/hub/53/hubfs/image8-2.jpg?width=893&height=600&name=image8-2.jpg"
                alt="Logo"
                width={80}
                height={80}
                className="h-10 w-20 background-cover rounded-xl"
              />
            </div>
            <div className="font-thin">
              <span className="font-bold">UI/UX Designer</span>
              <br />
              <span className="flex flex-row ">
                <div className="mt-1">Google</div>
                <div className="text-xl mt-1 ">
                  <LuDot />
                </div>
                <span className="bg-orange-300 text-orange-600 px-3 py-0.5 rounded-2xl ml-2">
                  Figma
                </span>{" "}
                <span className="bg-red-300 text-red-600 px-3 py-0.5 rounded-2xl ml-2">
                  Prototyping
                </span>
                <span className="bg-blue-300 text-blue-600 px-3 py-0.5 rounded-2xl ml-2">
                  User Interface
                </span>
              </span>
            </div>
          </div>
          <div className="flex flex-row items-center">
            <div className="flex flex-row gap-4 pl-10 pr-2">
              <div className="text-xl  text-gray-300">
                <IoBagHandleOutline />
              </div>
              <span className="font-bold">0-3 Years |</span>
            </div>
            <div className="flex flex-row gap-4 px-1 items-center">
              <div className="text-xl  text-gray-300">
                <LuClock />
              </div>
              <span className="font-bold">Full Time |</span>
            </div>
            <div className="flex flex-row gap-2 px-1 items-center">
              <div className="text-lg text-gray-300 font-semibold">
                Posted on :
              </div>
              <span className="font-bold">02 April 2024 </span>
            </div>
          </div>
          <div className="flex flex-col px-10">
            <ul className=" list-disc text-gray-500 font-thin  text-sm mt-4 mb-4 pl-4 ">
              <li>
                <span>
                  Consequat fugiat cillum labore nostrud tempor incididunt ad
                  proident nulla aliquip.
                </span>
              </li>
              <li>
                <span>
                  Consequat fugiat cillum labore nostrud tempor incididunt ad
                  proident nulla aliquip.
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className=" px-10 py-1">
          <div className="flex flex-row gap-4">
            <div>
              <button className="bg-orange-400 px-6 py-1 my-2 rounded-xl text-white font-semibold">
                Apply Now
              </button>
            </div>
            <div>
              <button className=" border py-1 my-2 rounded-xl flex flex-row gap-3 items-center px-2">
                <IoSaveOutline />
                Save
              </button>
            </div>
          </div>
          <div className="ml-28">
            <Image
              src="https://www.shutterstock.com/shutterstock/photos/2292261831/display_1500/stock-vector--semicircle-percentage-diagrams-percentage-ready-to-use-for-web-design-infographic-or-2292261831.jpg"
              alt="Graph Image"
              width={100}
              height={100}
              className="h-100 w-200 backdrop-blur-lg rounded-xl "
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Jobs;
