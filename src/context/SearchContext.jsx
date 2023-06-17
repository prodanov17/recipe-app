import React from "react";
import { useState } from "react";

const SearchContext = React.createContext({
  tags: new Set(),
  removeTag: (name) => {},
  tagHandler: (e) => {},
});

export const SearchProvider = (props) => {
  const [tags, setTags] = useState(new Set());

  const tagHandler = (e) => {
    console.log("H");
    setTags((prev) => new Set([...prev, e.target.textContent.toLowerCase()]));
    return tags;
  };
  const removeTag = (text) => {
    setTags((prev) => new Set([...prev].filter((el) => el !== text)));
  };

  return (
    <SearchContext.Provider
      value={{
        tags: tags,
        removeTag: removeTag,
        tagHandler: tagHandler,
      }}
    >
      {props.children}
    </SearchContext.Provider>
  );
};

export default SearchContext;
