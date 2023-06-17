import React, { useState } from "react";
import {
  DietIcon,
  IntoleranceIcon,
  RecipesIcon,
  SearchIcon,
} from "../../assets/searchIcons";
import Input from "../../UI/Input";
import SearchTabs from "./components/SearchTabs";
import { Cuisines } from "../../constants/Cuisines";
import Tag from "../../UI/Tag";
import { Diets } from "../../constants/diets";
import { Intolerances } from "../../constants/intolerances";
import { useOutletContext } from "react-router";

const SearchByName = () => {
  const [advancedSearch, setAdvancedSearch] = useState(false);
  const tagContext = useOutletContext();

  const advancedSearchHandler = () => {
    setAdvancedSearch((prev) => !prev);
  };

  const cuisineHandler = () => {};
  return (
    <>
      <SearchTabs active="name" />
      <div className="flex gap-1 items-center self-start max-w-[500px] flex-wrap">
        {[...tagContext.tags].map((e, index) => {
          return (
            <Tag key={index} removeTag={tagContext.removeTag}>
              {e}
            </Tag>
          );
        })}
      </div>

      <Input
        id="searchBar"
        placeholder="Search recipes"
        type="search"
        className="mt-4"
      >
        <SearchIcon />
      </Input>

      {advancedSearch && (
        <>
          <Input
            onChange={cuisineHandler}
            id="searchBar"
            placeholder="Select cuisines"
            type="text"
            suggestions={Cuisines}
            autocomplete={true}
            tagHandler={tagContext.tagHandler}
          >
            <RecipesIcon />
          </Input>
          <Input
            id="searchBar"
            placeholder="Select diets"
            type="text"
            suggestions={Diets}
            autocomplete={true}
            tagHandler={tagContext.tagHandler}
          >
            <DietIcon />
          </Input>
          <Input
            id="searchBar"
            placeholder="Select intolerances"
            type="text"
            suggestions={Intolerances}
            autocomplete={true}
            tagHandler={tagContext.tagHandler}
          >
            <IntoleranceIcon />
          </Input>
        </>
      )}

      <button
        onClick={advancedSearchHandler}
        className="text-primary self-start pl-4 font-medium underline "
      >
        {!advancedSearch ? "Advanced search..." : "Basic search..."}
      </button>
      <button className="bg-primary text-white font-medium text-lg w-full shadow-lg mb-8 py-1.5 px-4 rounded-lg">
        Search
      </button>
    </>
  );
};

export default SearchByName;
