import React from "react";

const BasicInput = ({ children, id, placeholder, type }) => {
  return (
    <div className="relative">
      <label htmlFor={id} className="absolute top-1/2 -translate-y-1/2 left-4">
        {children}
      </label>
      <input
        className="px-10 py-2 rounded-lg"
        type={type}
        placeholder={placeholder}
        autocomplete="off"
      />
    </div>
  );
};

export default BasicInput;
