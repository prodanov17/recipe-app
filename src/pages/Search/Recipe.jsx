import React from "react";
import { useLoaderData } from "react-router-dom";
import { ShareIcon } from "../../assets/icons";
import RecipeHero from "./components/RecipeHero";
import RecipeInfo from "./components/RecipeInfo";
import RecipeInstructions from "./components/RecipeInstructions";

const Recipe = () => {
  const recipeItem = useLoaderData();
  console.log(recipeItem.data);
  return (
    <main className="w-[90vw] flex flex-col gap-12 px-8">
      <RecipeHero item={recipeItem.data} />
      <div className="w-full flex justify-center sm:justify-start lg:justify-center">
        <button className="flex gap-2 items-center px-12 py-1 bg-secondary text-secondary-text rounded-md shadow">
          <ShareIcon /> Share
        </button>
      </div>
      <RecipeInfo
        description={recipeItem.data.summary}
        ingredients={recipeItem.data.extendedIngredients}
      />
      {/* <RecipeInstructions /> */}
    </main>
  );
};

export default Recipe;
