import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useMediaQuery } from "react-responsive";
import { Link, NavLink } from "react-router-dom";
import { CloseIcon, HamburgerIcon } from "../assets/icons.jsx";
import { Logo } from "../assets/logo.jsx";
import DesktopNavbar from "./DesktopNavbar";
import MobileNavbar from "./MobileNavbar";

const Navbar = () => {
  const [hideNavbar, setHideNavbar] = useState(true);

  const desktopScreen = useMediaQuery({ query: `(min-width: 640px)` });

  useEffect(() => {
    if (!hideNavbar) {
      setHideNavbar(true);
    }
  }, [desktopScreen]);

  const navbarHandler = () => {
    setHideNavbar(true);
  };

  return (
    <header id="navbar" className="flex relative -top-20">
      <Link to="/">
        <Logo />
      </Link>
      {/* <nav className="flex items-center justify-between p-4">
        <Link
          to="/"
          className="uppercase font-semibold text-blue-950"
          role="button"
        >
          <Logo />
        </Link>
        <div className="hidden sm:block">
          <DesktopNavbar />
        </div>
        <button
          className="transition-all sm:hidden"
          onClick={() => {
            setHideNavbar((prev) => !prev);
          }}
        >
          {hideNavbar ? <HamburgerIcon /> : <CloseIcon />}
        </button>
      </nav> */}
      {/* <div className="sm:hidden">
        <MobileNavbar hidden={hideNavbar} nav={navbarHandler} />
      </div> */}
    </header>
  );
};

export default Navbar;
