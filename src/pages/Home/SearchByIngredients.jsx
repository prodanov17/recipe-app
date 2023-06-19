import React from "react";
import { EmptyFridge } from "../../assets/illustrations";
import { FridgeIcon, SearchIcon } from "../../assets/searchIcons";
import Input from "../../UI/Input";
import SearchTabs from "./components/SearchTabs";

const SearchByIngredients = () => {
  return (
    <>
      <SearchTabs active="ingredients" />
      <section className=" text-neutral-700 mt-4">
        <span className="relative left-10">
          <EmptyFridge />
        </span>
        <p>Looks like your fridge is empty.</p>
      </section>
      <button className="bg-accent text-accent-text font-medium flex items-center justify-center gap-3 text-lg shadow-lg mb-8 py-1.5 px-16 mt-4 rounded-lg">
        <FridgeIcon />
        My fridge
      </button>
    </>
  );
};

export default SearchByIngredients;
