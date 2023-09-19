import React, { useState } from "react";
import { useRef } from "react";
import { useLoaderData } from "react-router-dom";
import { GuideIcon, ShareIcon } from "../../assets/icons";
import RecipeHero from "./components/RecipeHero";
import RecipeInfo from "./components/RecipeInfo";
import RecipeInstructions from "./components/RecipeInstructions";

const Recipe = () => {
  const recipeItem = useLoaderData();
  const [isCopied, setIsCopied] = useState(false); // State to control "Copied!" visibility

  const handleClickScroll = () => {
    const element = document.getElementById("recipeInstructions");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setIsCopied(true); // Show "Copied!" when link is copied
    setTimeout(() => {
      setIsCopied(false); // Hide "Copied!" after a few seconds
    }, 2000); // Adjust the duration as needed (2 seconds in this example)
  };

  return (
    <main className="w-[90vw] flex flex-col gap-12 px-8">
      <div className={`fixed left-1/2 -translate-x-1/2 -translate-y-1/2 px-12 py-2 rounded-lg text-green-500 shadow-lg bg-white border-b-green-500 border-b-4 transform ${isCopied ? 'opacity-100 scale-100' : 'opacity-0 scale-0'}  transition-all duration-100`}>&#10003; Copied to clipboard!</div>
      <RecipeHero item={recipeItem.data} />
      <div className="w-full flex flex-col gap-2 sm:flex-row justify-center items-center sm:justify-start lg:justify-center">
        <button
          onClick={handleCopyLink} // Call handleCopyLink to copy link and show "Copied!"
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
        description={recipeItem.data?.summary}
        ingredients={recipeItem.data?.extendedIngredients}
      />
      {recipeItem.data.analyzedInstructions[0]?.steps.length > 0 ? (
        <RecipeInstructions
          id="recipeInstructions"
          totalSteps={recipeItem.data.analyzedInstructions[0]?.steps?.length || 0}
          steps={recipeItem.data.analyzedInstructions[0]?.steps || []}
        />
      ) : (
        <p className="text-neutral-500 mb-8 text-sm text-center">
          No instructions were found for this recipe.
        </p>
      )}
    </main>
  );
};

export default Recipe;

