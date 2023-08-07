import { useState } from "react";
import "./Navbar.css";
import Schema from "../Schema/Schema";
import HamburgerIcon from "../../assets/icons/hamburger.png";
import CloseIcon from "../../assets/icons/close.png";

const NavbarMobileOverlay = ({ toggleSidebar }) => {
  return (
    <div className="absolute inset-y-0 z-50 bg-light open-sidebar">
      <div className="flex justify-between items-center m-4">
        <div className="text-xl font-bold">Schema Definition</div>
        <img
          src={CloseIcon}
          alt=""
          className="text-white"
          width="16px"
          height="16px"
          onClick={toggleSidebar}
        />
      </div>
      <div className="my-4">
        <Schema />
      </div>
    </div>
  );
};

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen((prev) => !prev);

  return (
    <>
      <header className="bg-light text-xl p-4 items-center font-bold flex">
        <img
          src={HamburgerIcon}
          alt=""
          className="text-white lg:hidden"
          onClick={toggleSidebar}
        />
        <div className="flex flex-1 justify-center">SQL Playground</div>
      </header>
      {isSidebarOpen && <NavbarMobileOverlay toggleSidebar={toggleSidebar} />}
    </>
  );
};

export default Navbar;
