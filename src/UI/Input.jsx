import React, { useState, useRef } from "react";
import Card from "./Card";
import { capitalize } from "../utilities/capitalize";

const Input = ({
  id,
  placeholder,
  children,
  className,
  type,
  tagHandler = () => {},
  suggestions = [],
  autocomplete = false,
}) => {
  const [newSuggestions, setSuggestions] = useState(suggestions || []);
  const inputRef = useRef(null);

  const handleSuggestions = () => {
    if (!autocomplete) return;
    if (inputRef.current.value === "") {
      setSuggestions([]);
      return;
    }
    setSuggestions(
      suggestions.filter((e) =>
        e.startsWith(capitalize(inputRef.current.value))
      )
    );
  };

  return (
    <span
      className={`bg-white shadow-lg border border-opacity-30 border-neutral-500 rounded-lg w-full relative ${className}`}
    >
      <label
        htmlFor={id}
        className={`absolute top-1/2 -translate-y-1/2 left-3 text-neutral-400 pointer-events-none `}
      >
        {children}
      </label>
      <input
        autoComplete="off"
        onChange={handleSuggestions}
        type={type || "text"}
        id={id}
        name={id}
        ref={inputRef}
        placeholder={placeholder}
        className="bg-white text-neutral-500 px-4 py-2 rounded-lg pl-12 w-full outline-none focus:ring-2 focus:ring-accent peer"
      />

      {
        <Card
          className={
            "absolute top-full z-10 max-h-28 overflow-auto mt-1 left-0 w-full text-black rounded p-0 hidden peer-focus:block test"
          }
        >
          {newSuggestions.map((e, index) => (
            <button
              key={index}
              onMouseDown={(e) => {
                tagHandler(e, id);
                setSuggestions(suggestions);
                // toggleSuggestions(false);
                inputRef.current.value = "";
              }}
              className="flex px-4 hover:bg-sky-100 w-full"
            >
              {e}
            </button>
          ))}
        </Card>
      }
    </span>
  );
};

export default Input;
