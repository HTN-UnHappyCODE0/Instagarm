import Image from "next/image";
import React from "react";
import instagram from "../asset/instagram.png";
import arrowdown from "../asset/arrowdown.png";
import search from "../asset/search.png";
import home from "../asset/home.png";
import message from "../asset/message.png";
import upload from "../asset/upload.png";
import discover from "../asset/discover.png";
import hearth from "../asset/hearth.png";
import profile from "../asset/profile.png";

const Header = () => {
  return (
    <div className="border-b shadow-sm bg-white sticky top-0 z-10 ">
      <div className="flex justify-between items-center h-16 px-2 max-w-5xl mx-auto">
        {/* left */}
        <div className="flex">
          <div className="w-28 h-full flex">
            <Image src={instagram} />
          </div>
          <div className="h-3 w-3 mt-1">
            <Image src={arrowdown} />
          </div>
        </div>

        {/* Middle */}
        <div className="hidden w-72 sm:flex relative mx-4 ">
          <div className="absolute flex items-center w-3 h-full ml-2">
            <Image src={search} />
          </div>
          <input
            type="text"
            placeholder="Search"
            className="h-9 w-full rounded-md bg-[#efefef] pl-8 outline-0"
          />
        </div>
        {/* Right */}
        <div className="flex space-x-5">
          <div className="Btn hidden sm:flex">
            <Image src={home} />
          </div>
          <div className="Btn hidden sm:flex relative">
            <Image src={message} />
            <div className="absolute flex -top-1 left-3.5 items-center justify-center bg-red-500 text-white rounded-full w-4 h-4 text-xs">
              1
            </div>
          </div>
          <div className="Btn hidden sm:flex">
            <Image src={upload} />
          </div>
          <div className="Btn hidden sm:flex">
            <Image src={discover} />
          </div>
          <div className="Btn hidden sm:flex">
            <Image src={hearth} />
          </div>
          <div className="flex ">
            <div className="Btn mr-5">
              <Image src={profile} className="rounded-full" />
            </div>
            <button className="cursor-pointer text-[#0095f6] font-semibold whitespace-nowrap">
              Sign out
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
