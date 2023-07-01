import React from "react";
import { useRef } from "react";
import { useLoaderData } from "react-router-dom";
import { GuideIcon, ShareIcon } from "../../assets/icons";
import RecipeHero from "./components/RecipeHero";
import RecipeInfo from "./components/RecipeInfo";
import RecipeInstructions from "./components/RecipeInstructions";

const Recipe = () => {
  const recipeItem = useLoaderData();

  const handleClickScroll = () => {
    const element = document.getElementById("recipeInstructions");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <main className="w-[90vw] flex flex-col gap-12 px-8">
      <RecipeHero item={recipeItem.data} />
      <div className="w-full flex flex-col gap-2 sm:flex-row justify-center items-center sm:justify-start lg:justify-center">
        <button
          onClick={() => {
            console.log("Copied");
            navigator.clipboard.writeText(window.location.href);
          }}
          className="flex gap-2 w-full sm:w-40  justify-center items-center py-1 bg-secondary text-secondary-text rounded-md shadow"
        >
          <ShareIcon /> Share
        </button>
        <button
          onClick={handleClickScroll}
          className="flex gap-2 w-full sm:w-40 justify-center items-center py-1 bg-accent text-accent-text rounded-md shadow"
        >
          <GuideIcon /> Guide
        </button>
      </div>
      <RecipeInfo
        description={recipeItem.data.summary}
        ingredients={recipeItem.data.extendedIngredients}
      />
      <RecipeInstructions
        id="recipeInstructions"
        totalSteps={recipeItem.data.analyzedInstructions[0].steps.length}
        steps={recipeItem.data.analyzedInstructions[0].steps}
      />
    </main>
  );
};

export default Recipe;
