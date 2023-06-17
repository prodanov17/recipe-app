import React, { useState } from "react";
import { useOutletContext } from "react-router";
import {
  DietIcon,
  InfoIcon,
  IntoleranceIcon,
  RecipesIcon,
  SearchIcon,
} from "../../assets/searchIcons";
import { Cuisines } from "../../constants/Cuisines";
import { Diets } from "../../constants/diets";
import { Intolerances } from "../../constants/intolerances";
import Input from "../../UI/Input";
import Slider from "../../UI/Slider";
import Tag from "../../UI/Tag";
import SearchTabs from "./components/SearchTabs";

const SearchByNutrients = () => {
  const [advancedSearch, toggleAdvancedSearch] = useState(false);
  const tagContext = useOutletContext();

  const advancedSearchHandler = () => {
    toggleAdvancedSearch((prev) => !prev);
  };
  const cuisineHandler = () => {};
  return (
    <>
      <SearchTabs active="nutrients" />
      <div className="flex gap-1 items-center self-start max-w-[700px] flex-wrap -mb-2 mt-4">
        {[...tagContext.tags].map((e, index) => {
          return (
            <Tag key={index} removeTag={tagContext.removeTag}>
              {e}
            </Tag>
          );
        })}
      </div>
      <section
        className={`flex-col-reverse w-full  md:flex-row-reverse flex items-center gap-4 ${
          advancedSearch ? "md:w-[700px]" : "md:w-full"
        }`}
      >
        <div className="w-full">
          <Slider unit="kcal" maxValue={1200} className="my-4">
            <p className="flex items-center gap-2">
              Calories{" "}
              {
                <span title="Calories are blabla">
                  <InfoIcon />
                </span>
              }
            </p>
          </Slider>
          <Slider unit="g" maxValue={200} className="mb-4">
            <p className="flex items-center gap-2">
              Carbs{" "}
              {
                <span title="Calories are blabla">
                  <InfoIcon />
                </span>
              }
            </p>
          </Slider>
          <Slider unit="g" maxValue={100} className="mb-4">
            <p className="flex items-center gap-2">
              Fats{" "}
              {
                <span title="Calories are blabla">
                  <InfoIcon />
                </span>
              }
            </p>
          </Slider>
          <Slider unit="g" maxValue={100}>
            <p className="flex items-center gap-2">
              Protein{" "}
              {
                <span title="Calories are blabla">
                  <InfoIcon />
                </span>
              }
            </p>
          </Slider>
        </div>
        {advancedSearch && (
          <>
            <div className="hidden md:block w-[1px] h-[250px] relative top-4 opacity-30 flex-none bg-neutral-500 rounded-xl"></div>
            <div className="w-full flex flex-col">
              <Input
                id="searchBar"
                placeholder="Search recipes"
                type="search"
                className="mt-4"
              >
                <SearchIcon />
              </Input>
              <Input
                onChange={cuisineHandler}
                id="searchBar"
                placeholder="Select cuisines"
                type="text"
                suggestions={Cuisines}
                autocomplete={true}
                tagHandler={tagContext.tagHandler}
                className="mt-4"
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
                className="mt-4"
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
                className="mt-4"
              >
                <IntoleranceIcon />
              </Input>
            </div>
          </>
        )}
      </section>
      <button
        onClick={advancedSearchHandler}
        className="text-primary self-start pl-4 font-medium underline "
      >
        {advancedSearch ? "Basic search..." : "Advanced search..."}
      </button>
      <button className="bg-primary text-white font-medium text-lg w-full shadow-lg mb-8 py-1.5 px-4 rounded-lg">
        Search
      </button>
    </>
  );
};

export default SearchByNutrients;
