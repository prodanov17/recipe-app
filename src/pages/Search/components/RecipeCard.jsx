import React from "react";
import { ClockIcon } from "../../../assets/icons";
import Card from "../../../UI/Card";
import { unCamelCase } from "../../../utilities/capitalize";

const RecipeCard = ({ item }) => {
  let tags = [];
  for (const key in item) {
    if (tags.length > 3) break;
    item[key] === true && tags.push(key);
  }
  // console.log(item);

  return (
    <Card className="max-w-[300px] sm:flex sm:max-w-[825px] sm:w-full bg-white sm:justify-between sm:items-center mx-auto sm:mx-auto">
      <div className="flex flex-col sm:flex-row">
        <div className="relative sm:min-w-[270px] h-min sm:w-min w-max  overflow-hidden">
          <img
            className="h-full object-cover w-[298px] sm:w-[270px] rounded-t-lg sm:rounded-t-none sm:rounded-l-lg sm:rounded-tl-lg "
            src={item.image}
            alt={item.originalName}
          />
          <span className="absolute inset-0 bg-transparent bg-gradient-to-t sm:hidden from-black"></span>
          <span className="absolute left-0 bottom-0 p-2 pl-4 sm:hidden">
            <p className="text-neutral-400 uppercase text-xs tracking-wide truncate">
              {item.cuisines.join(", ")}
            </p>
            <h2 className="text-white font-medium group-hover:underline">
              {item.title}
            </h2>
          </span>
        </div>
        <div className="flex flex-col justify-between">
          <span className="p-2 pb-0 pl-4 hidden sm:block w-min md:min-w-[300px] flex-col">
            <p className="text-neutral-400 uppercase text-xs tracking-wide truncate">
              {item.cuisines.join(", ")}
            </p>
            <h2 className="text-black font-medium text-lg group-hover:underline">
              {item.title}
            </h2>
          </span>
          <div className="text-neutral-600 p-4 pb-0 flex gap-2 flex-wrap">
            {tags.length === 0 && (
              <p className="text-sm text-neutral-400">no tags for this item</p>
            )}
            {tags.map((e) => (
              <p className="px-2 text-accent-text bg-accent rounded-md">
                {unCamelCase(e).toLowerCase()}
              </p>
            ))}
          </div>
          <div className="flex gap-2 sm:flex-row px-4 pb-2 pt-4">
            <span className="flex items-center gap-2 text-neutral-500">
              <span>
                <ClockIcon />
              </span>
              <span className="flex items-center gap-1">
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
              <p className="text-sm text-neutral-500">{item.healthScore}</p>
            </span>
          </div>
        </div>
      </div>
      <div className="sm:justify-normal">
        <div className="hidden sm:w-16 sm:h-16 m-2 ml-2 bg-accent-text text-center rounded-full border-[3px] border-accent text-accent sm:flex items-center justify-center sm:mr-8 self-end text-xs leading-2 sm:text-base sm:leading-4">
          {parseInt(item.nutrition?.nutrients[0]?.amount)} <br />
          kcal
        </div>
      </div>
    </Card>
  );
};

export default RecipeCard;
