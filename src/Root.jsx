import React from "react";
import { Outlet, useNavigation } from "react-router-dom";
import Navbar from "./layouts/Navbar";

function Root() {
  const { state } = useNavigation();
  return (
    <>
      <Navbar />
      {state === "loading" ? (
        <p className="w-5 h-5 fixed top-1/2 left-1/2 border-[3px] border-primary rounded-full border-r-secondary animate-spin"></p>
      ) : (
        <div className="mt-auto">
          <Outlet />
        </div>
      )}
    </>
  );
}

export default Root;
