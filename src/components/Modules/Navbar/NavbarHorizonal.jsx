import {
  Navbar,
  Button,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import NavItem from "../../../constants/NavItem";
import Logo from "../../../assets/Image/logo3.png";
import ThemeToggle from "../Theme/ThemeToggle";
import PopOver from "../PopOver/PopOver";
import Menu from "../../../assets/icons/Menu";

export default function NavbarHorizonal({ sidebarTrigger }) {
  return (
    <Navbar
      classNames={{
        wrapper: ["max-w-[90%]"],
      }}
      className="bg-gradient-to-t from-white/40 to-black/50 dark:from-white/70 dark:to-black/20 backdrop-blur-sm text-white py-3 fixed"
    >
      <NavbarBrand>
        <img className="w-14 h-14 rounded-lg" src={Logo} alt="" />
      </NavbarBrand>
      <NavbarContent className="flex gap-4" justify="center">
        {NavItem.map((item, index) => (
          <NavbarItem
            key={index}
            className={`hidden md:inline-block text-lg text-gray-800 hover:font-bold  pt-1${
              window.location.pathname === item.route
                ? " text-gray-900 text-xl font-bold"
                : ""
            }`}
          >
            <Link to={item.route} aria-current="page">
              {item.title}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>
      <NavbarContent justify="end" className="flex items-center gap-3">
        <NavbarItem>
          <PopOver />
        </NavbarItem>
        <NavbarItem>
          <div className="hidden md:inline-block">
            <ThemeToggle />
          </div>
          <div
            onClick={sidebarTrigger}
            className="md:hidden cursor-pointer bg-gray-800 w-10 h-10 rounded-lg flex items-center justify-center border-2 border-gray-500"
          >
            <Menu />
          </div>
        </NavbarItem>
        <NavbarItem>
          <Button className="hidden md:flex bg-gray-800 hover:bg-gray-300 hover:text-gray-900 hover:shadow-normal text-gray-300 text-base rounded-3xl">
            <Link href="#">ورود / ثبت نام</Link>
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
