import React from "react";

const LineFill = ({ fill, color }) => {
  return (
    <div className="w-full relative">
      <div
        className={`h-1 rounded-lg ${color || "bg-accent"}`}
        style={{ width: `${fill}%` }}
      ></div>
      <div
        className={`h-1 absolute -z-10 inset-0 w-full rounded-lg bg-neutral-400`}
      ></div>
    </div>
  );
};

export default LineFill;
