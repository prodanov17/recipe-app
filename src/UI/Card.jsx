import React from "react";

const Card = ({ className, children }) => {
  return (
    <div
      className={`bg-white rounded-xl shadow-xl border border-neutral-400 border-opacity-30 ${className} `}
    >
      {children}
    </div>
  );
};

export default Card;
