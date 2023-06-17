import React from "react";
import { SearchIcon } from "../../assets/searchIcons";
import Input from "../../UI/Input";
import SearchTabs from "./components/SearchTabs";

const SearchByIngredients = () => {
  return (
    <>
      <SearchTabs active="ingredients" />
      <Input id="searchBar" placeholder="Search recipes">
        <SearchIcon />
      </Input>
      <Input id="searchBar" placeholder="Search recipes">
        <SearchIcon />
      </Input>

      <button className="text-primary self-start pl-4 font-medium underline ">
        Advanced search...
      </button>
      <button className="bg-primary text-white font-medium text-lg w-full shadow-lg mb-8 py-1.5 px-4 rounded-lg">
        Search
      </button>
    </>
  );
};

export default SearchByIngredients;
