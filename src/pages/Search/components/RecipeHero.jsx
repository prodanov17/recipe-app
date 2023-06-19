import React from "react";
import { ClockIcon } from "../../../assets/icons";
import LineFill from "../../../UI/LineFill";
import { unCamelCase } from "../../../utilities/capitalize";
import CaloricBreakdown from "./CaloricBreakdown";

const RecipeHero = ({ item }) => {
  let tags = [];
  for (const key in item) {
    item[key] === true && tags.push(key);
  }
  return (
    <section className="flex flex-col gap-8 lg:flex-row text-black lg:justify-between sm:items-start items-center ">
      <div className="flex gap-2 flex-col lg:flex-row">
        <div className="w-[300px] object-contain overflow-hidden">
          <img src={item.image} alt="" />
        </div>
        <div className="flex flex-col justify-between px-0 lg:px-4">
          <div>
            <h4 className="uppercase tracking-wide text-neutral-400 text-sm">
              {item.cuisines.join(", ")}
            </h4>
            <h3 className="font-semibold text-xl">{item.title}</h3>
          </div>
          <div className="flex gap-1.5 flex-wrap">
            {tags.length === 0 && (
              <p className="text-sm text-neutral-400">no tags for this item</p>
            )}
            {tags.map((e, index) => (
              <p
                className="px-2 text-accent-text bg-accent rounded-md"
                key={index}
              >
                {unCamelCase(e).toLowerCase()}
              </p>
            ))}
          </div>
          <div className="flex gap-2 sm:flex-row pb-2 pt-4">
            <span className="flex items-center gap-2 text-neutral-500">
              <span>
                <ClockIcon />
              </span>
              <span className="flex items-center gap-1">
                {/* <p className="text-sm ">{`${item.readyInMinutes} min`}</p> */}
                <p className="text-sm ">{`${item.readyInMinutes} min`}</p>
                <span className="text-sm text-neutral-500"></span>
              </span>
            </span>
            <span className="flex items-center gap-2 text-neutral-500">
              <span>
                <ClockIcon />
              </span>
              <p href={""} className="text-sm text-neutral-500">
                {item.servings} Servings
              </p>
            </span>
            <span className="flex items-center gap-2 text-neutral-500">
              <span>
                <ClockIcon />
              </span>
              <p className="text-sm text-neutral-500">{item.healthScore} pts</p>
            </span>
          </div>
        </div>
      </div>
      <CaloricBreakdown
        calories={
          item.nutrition.nutrients.filter((e) => e.name === "Calories")[0]
            .amount
        }
        carbs={
          item.nutrition.nutrients.filter((e) => e.name === "Carbohydrates")[0]
            .amount
        }
        protein={
          item.nutrition.nutrients.filter((e) => e.name === "Protein")[0].amount
        }
        fat={item.nutrition.nutrients.filter((e) => e.name === "Fat")[0].amount}
        breakdown={item.nutrition.caloricBreakdown}
      />
    </section>
  );
};

export default RecipeHero;
