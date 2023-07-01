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
import { useNavigate, useOutletContext } from "react-router";

const SearchByName = () => {
  const [advancedSearch, setAdvancedSearch] = useState(false);
  const navigate = useNavigate();
  const tagContext = useOutletContext();

  const advancedSearchHandler = () => {
    setAdvancedSearch((prev) => !prev);
  };

  const submitHandler = async (e) => {
    let endUrl = `/search/name?query=${e.target.searchBar.value}`;
    e.preventDefault();
    if (e.target.searchBar.value.trim().length === 0) {
      return;
    }
    const cuisineTags = [...tagContext.cuisineTags].join(",");
    const dietTags = [...tagContext.dietTags].join(",");
    const intoleranceTags = [...tagContext.intoleranceTags].join(",");
    if (cuisineTags.length > 0) endUrl += `&cuisine=${cuisineTags}`;
    if (dietTags.length > 0) endUrl += `&diet=${dietTags}`;
    if (intoleranceTags.length > 0) endUrl += `&intolerance=${intoleranceTags}`;
    navigate(endUrl);
  };

  const cuisineHandler = () => {};
  return (
    <form className="flex flex-col gap-4" onSubmit={submitHandler}>
      <SearchTabs active="name" />
      <div className="flex gap-1 items-center self-start max-w-[500px] flex-wrap">
        {[...tagContext.cuisineTags].map((e, index) => {
          return (
            <Tag key={index} removeTag={tagContext.removeTag} type="cuisine">
              {e}
            </Tag>
          );
        })}
        {[...tagContext.dietTags].map((e, index) => {
          return (
            <Tag key={index} removeTag={tagContext.removeTag} type="diets">
              {e}
            </Tag>
          );
        })}
        {[...tagContext.intoleranceTags].map((e, index) => {
          return (
            <Tag
              key={index}
              removeTag={tagContext.removeTag}
              type="intolerances"
            >
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
            id="cuisine"
            placeholder="Select cuisines"
            type="text"
            suggestions={Cuisines}
            autocomplete={true}
            tagHandler={tagContext.tagHandler}
          >
            <RecipesIcon />
          </Input>
          <Input
            id="diets"
            placeholder="Select diets"
            type="text"
            suggestions={Diets}
            autocomplete={true}
            tagHandler={tagContext.tagHandler}
          >
            <DietIcon />
          </Input>
          <Input
            id="intolerances"
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
        type="button"
        onClick={advancedSearchHandler}
        className="text-primary self-start pl-4 font-medium underline "
      >
        {!advancedSearch ? "Advanced search..." : "Basic search..."}
      </button>
      <button
        type="submit"
        className="bg-primary text-white font-medium text-lg w-full shadow-lg mb-8 py-1.5 px-4 rounded-lg"
      >
        Search
      </button>
    </form>
  );
};

export default SearchByName;
