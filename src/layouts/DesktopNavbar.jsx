import React from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

const DesktopNavbar = () => {
  const activeRoute = useLocation();
  return (
    <div className="flex gap-8 items-center">
      <NavLink
        to="/"
        className={({ isActive, isPending }) =>
          isActive ||
          activeRoute.pathname === "/search-by-nutrients" ||
          activeRoute.pathname === "/search-by-ingredients"
            ? "text-lg hover:text-primary transition-all opacity-75 text-primary border-b-4 border-primary pb-5 relative top-3 font-semibold"
            : "text-lg hover:text-primary transition-all opacity-75 text-neutral-800"
        }
      >
        Recipes
      </NavLink>
      <NavLink
        to="/apartments"
        className={({ isActive, isPending }) =>
          isActive
            ? "text-lg hover:text-primary transition-all opacity-75 text-primary border-b font-semibold"
            : "text-lg hover:text-primary transition-all opacity-75 text-neutral-800"
        }
      >
        My fridge
      </NavLink>
      <NavLink
        to="/attractions"
        className={({ isActive, isPending }) =>
          isActive
            ? "text-lg hover:text-primary transition-all opacity-75 text-primary border-b font-semibold"
            : "text-lg hover:text-primary transition-all opacity-75 text-neutral-800"
        }
      >
        My foods
      </NavLink>
      <NavLink
        to="/contact"
        className={({ isActive, isPending }) =>
          isActive
            ? "text-lg hover:text-primary transition-all opacity-75 text-primary border-b font-semibold"
            : "text-lg hover:text-primary transition-all opacity-75 text-neutral-800"
        }
      >
        John Doe
      </NavLink>
    </div>
  );
};

export default DesktopNavbar;
