import React from "react";

const Tag = ({ children, removeTag }) => {
  return (
    <div className="bg-accent flex gap-2 items-center text-accent-text self-start px-2 rounded-sm -mb-2 mt-2">
      <p>{children}</p>
      <button
        onClick={() => {
          removeTag(children);
        }}
        className="font-medium pb-0.5"
      >
        x
      </button>
    </div>
  );
};

export default Tag;
