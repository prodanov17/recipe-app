import { EmptyFridge } from "../../assets/illustrations";
import { FridgeIcon, SearchIcon } from "../../assets/searchIcons";
import SearchTabs from "./components/SearchTabs";
import Input from "../../UI/Input";
import { useEffect, useState } from "react";
import { Ingredients } from "../../constants/Ingredients";
import { CloseIcon } from "../../assets/icons";
import { Link } from "react-router-dom";
const SearchByIngredients = () => {
  const [ingredients, setIngredients] = useState(
    JSON.parse(localStorage.getItem("ingredients")) || []
  );
  const [searchIngredients, setSearchIngredients] = useState([]);

  const handleAdd = (name) => {
    const lowerName = name.toLowerCase();
    if (!ingredients.includes(lowerName)) {
      // Update the state
      setIngredients((prev) => [...prev, lowerName]);
    }
  };

  const handleRemove = (name) => {
    // Update the state
    setIngredients((prev) => prev.filter((e) => e !== name));
  };

  // Use useEffect to save ingredients to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("ingredients", JSON.stringify(ingredients));
  }, [ingredients]);

  //useEffect when ingredients change add to cookie
  return (
    <>
      <SearchTabs active="ingredients"/>
      <section className="w-full mt-4">
        <h1 className="text-neutral-900 font-medium text-xl mb-4">
          Add ingredients
        </h1>
        <div className="flex items-center gap-2">
          <Input
            tagHandler={(e, id) => {
              handleAdd(e.target.innerText);
            }}
            autocomplete={true}
            className="w-full pl-0"
            id="ingredients"
            placeholder={"ex. tomatoes"}
            suggestions={Ingredients}
          >
            <SearchIcon />
          </Input>
          <Link
            to={`/search/ingredients?ingredients=${ingredients.join(",")}`}
            className="px-8 bg-accent text-accent-text py-2 rounded-lg"
          >
            Search
          </Link>
        </div>
      </section>
      <section className=" text-neutral-700 my-4 w-full">
        {ingredients.length === 0 ? (
          <div className="text-center flex flex-col items-center">
            <span className="">
              <EmptyFridge />
            </span>
            <p>Added ingredients will appear here.</p>
          </div>
        ) : (
          ingredients.map((e, index) => (
            <div
              key={index}
              className="w-full flex items-center justify-between border-b border-b-neutral-400 py-2 last:border-none"
            >
              <h2>{e}</h2>
              <button
                className="text-3xl text-red-600"
                onClick={() => {
                  handleRemove(e);
                }}
              >
                &times;
              </button>
            </div>
          ))
        )}
      </section>
    </>
  );
};

export default SearchByIngredients;
