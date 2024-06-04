import React from "react";
import Logo from "../../../assets/Image/logo3.png";
import CloseIcon from "../../../assets/icons/Close";
import { Button, Divider } from "@nextui-org/react";
import navItem from "../../../constants/NavItem";
import { Link } from "react-router-dom";
import ThemeToggle from "../Theme/ThemeToggle";

export default function Sidebar({ showSidebar, sidebarTrigger }) {
  return (
    <>
      {showSidebar && (
        <div
          onClick={sidebarTrigger}
          className="fixed md:hidden inset-0 bg-black/50 z-40"
        ></div>
      )}
      <div
        className={`md:hidden p-5 bg-gray-300 dark:bg-gray-700 h-[100vh] w-72 fixed top-0 transition-all duration-500 flex flex-col justify-between ${
          showSidebar ? "right-0" : "-right-96"
        } z-50`}
      >
        <div>
          <div className="flex items-center justify-between">
            <img className="w-10 h-10" src={Logo} alt="" />
            <div onClick={sidebarTrigger} className="cursor-pointer ">
              <CloseIcon />
            </div>
          </div>
          <Divider className="my-4" />
          <ul className="flex flex-col gap-3">
            {navItem.map((item, index) => (
              <li
                key={index}
                className={`inline-block md:hidden text-lg dark:text-white text-zinc-700 hover:font-bold pt-1${
                  window.location.pathname === item.route
                    ? " text-gray-900 text-xl font-bold"
                    : ""
                }`}
              >
                <Link
                  onClick={sidebarTrigger}
                  to={item.route}
                  aria-current="page"
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex items-center justify-between">
          <Button className="flex md:hidden bg-gray-800 hover:bg-gray-300 hover:text-gray-900 hover:shadow-normal text-white text-base rounded-3xl">
            <Link href="#">ورود / ثبت نام</Link>
          </Button>
          <div className="inline-block md:hidden ">
            <ThemeToggle />
          </div>
        </div>
      </div>
    </>
  );
}
