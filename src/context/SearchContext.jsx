import React from "react";
import { useState } from "react";

const SearchContext = React.createContext({
  // tags: new Set(),
  cuisineTags: new Set(),
  dietTags: new Set(),
  intoleranceTags: new Set(),
  removeTag: (name) => {},
  tagHandler: (e) => {},
});

export const SearchProvider = (props) => {
  // const [tags, setTags] = useState(new Set());
  const [cuisineTags, setCuisineTags] = useState(new Set());
  const [dietTags, setDietTags] = useState(new Set());
  const [intoleranceTags, setIntoleranceTags] = useState(new Set());

  const tagHandler = (e, type) => {
    if (type === "cuisine") {
      setCuisineTags(
        (prev) => new Set([...prev, e.target.textContent.toLowerCase()])
      );
    }
    if (type === "diets") {
      setDietTags(
        (prev) => new Set([...prev, e.target.textContent.toLowerCase()])
      );
    }
    if (type === "intolerances") {
      setIntoleranceTags(
        (prev) => new Set([...prev, e.target.textContent.toLowerCase()])
      );
    }
    // setTags((prev) => new Set([...prev, e.target.textContent.toLowerCase()]));
  };
  const removeTag = (text, type) => {
    if (type === "cuisine") {
      setCuisineTags((prev) => new Set([...prev].filter((el) => el !== text)));
    }
    if (type === "diets") {
      setDietTags((prev) => new Set([...prev].filter((el) => el !== text)));
    }
    if (type === "intolerances") {
      setIntoleranceTags(
        (prev) => new Set([...prev].filter((el) => el !== text))
      );
    }
  };

  return (
    <SearchContext.Provider
      value={{
        // tags: tags,
        cuisineTags: cuisineTags,
        dietTags: dietTags,
        intoleranceTags: intoleranceTags,
        removeTag: removeTag,
        tagHandler: tagHandler,
      }}
    >
      {props.children}
    </SearchContext.Provider>
  );
};

export default SearchContext;
