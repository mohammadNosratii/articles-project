import { Popover, PopoverContent, PopoverTrigger } from "@nextui-org/react";
import React from "react";
import SerachForm from "../Navbar/SerachForm";
import Search from "../../../assets/icons/Search";

export default function PopOver() {
  return (
    <Popover backdrop="blur" showArrow placement="bottom">
      <PopoverTrigger>
        <div className="bg-gray-800 hover:bg-gray-300 hover:text-gray-900 hover:shadow-normal text-gray-300 rounded-full w-10 h-10 flex items-center justify-center cursor-pointer transition-all duration-300">
          <Search />
        </div>
      </PopoverTrigger>
      <PopoverContent className="py-3 flex flex-col items-start">
        <SerachForm />
      </PopoverContent>
    </Popover>
  );
}
