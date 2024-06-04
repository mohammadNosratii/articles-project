import React, { useState } from "react";
import NavbarHorizonal from "./NavbarHorizonal";
import Sidebar from "./Sidebar";

export default function Navbar() {
  const [showSidebar, setShowSidebar] = useState(false);

  const sidebarTrigger = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <div>
      <NavbarHorizonal sidebarTrigger={sidebarTrigger} />
      <Sidebar showSidebar={showSidebar} sidebarTrigger={sidebarTrigger} />
    </div>
  );
}
