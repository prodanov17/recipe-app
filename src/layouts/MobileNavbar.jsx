import React from "react";
import { NavLink } from "react-router-dom";

const MobileNavbar = (props) => {
  return (
    <div className={`h-screen bg-inherit ${props.hidden ? "hidden" : ""}`}>
      <div className="mb-8 mt-4 flex flex-col gap-2">
        <NavLink
          onClick={props.nav}
          to="/"
          className={({ isActive, isPending }) =>
            isActive
              ? "text-sm px-8 hover:bg-sky-200 opacity-75 text-sky-950 font-semibold"
              : "text-sm px-8 hover:bg-sky-200 opacity-75"
          }
        >
          Home
        </NavLink>
        <NavLink
          onClick={props.nav}
          to="/apartments"
          className={({ isActive, isPending }) =>
            isActive
              ? "text-sm px-8 hover:bg-sky-200 opacity-75 text-sky-950 font-semibold"
              : "text-sm px-8 hover:bg-sky-200 opacity-75"
          }
        >
          Apartments
        </NavLink>
        <NavLink
          onClick={props.nav}
          to="/attractions"
          className={({ isActive, isPending }) =>
            isActive
              ? "text-sm px-8 hover:bg-sky-200 opacity-75 text-sky-950 font-semibold"
              : "text-sm px-8 hover:bg-sky-200 opacity-75"
          }
        >
          Attractions
        </NavLink>
        <NavLink
          onClick={props.nav}
          to="/contact"
          className={({ isActive, isPending }) =>
            isActive
              ? "text-sm px-8 hover:bg-sky-200 opacity-75 text-sky-950 font-semibold"
              : "text-sm px-8 hover:bg-sky-200 opacity-75"
          }
        >
          Contact
        </NavLink>
      </div>
    </div>
  );
};

export default MobileNavbar;
