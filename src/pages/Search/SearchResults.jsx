import React from "react";
import {
  Link,
  useLoaderData,
  useLocation,
  useSearchParams,
} from "react-router-dom";
import { ChevronLeft, ChevronRight } from "../../assets/icons";
import Card from "../../UI/Card";
import RecipeCard from "./components/RecipeCard";

const SearchResults = () => {
  const searchResponse = useLoaderData();
  const [urlParams, setUrlParams] = useSearchParams();
  const location = useLocation();
  const currentRoute = location.pathname.split("/")[2];

  /**
   *
   * @param {-1 > prev, 1 > next} dir
   */
  const pageHandler = (dir) => {
    const obj = Object.fromEntries(urlParams);
    if (obj.page === 1 && dir === -1) return;
    obj.page = parseInt(obj.page || 1);
    if (obj.page === searchResponse.data.totalPages && dir === 1) return;
    obj.page += dir;
    setUrlParams(obj);
  };

  return (
    <>
      <Link to={"/"} className="mb-4 ml-8 text-neutral-700 underline block">
        Go back...
      </Link>
      <Card className={"sm:max-w-[825px] sm:w-[90vw] sm:mx-auto"}>
        <div className="text-neutral-800 flex flex-col sm:flex-row text-lg justify-between p-4">
          {currentRoute == "name" && (
            <h1>
              Showing results for: <b>{urlParams.get("query")}</b>
            </h1>
          )}
          {currentRoute == "nutrients" && (
            <div className="flex gap-4 flex-wrap">
              <p className="text-base">
                Max Calories: <b>{urlParams.get("maxCalories")}</b> kcal
              </p>
              <p className="text-base">
                Max Carbs: <b>{urlParams.get("maxCarbs")}</b> g
              </p>
              <p className="text-base">
                Max Fat: <b>{urlParams.get("maxFat")}</b> g
              </p>
              <p className="text-base">
                Max Protein: <b>{urlParams.get("maxProtein")}</b> g
              </p>
            </div>
          )}
          <p className="self-end text-lg sm:self-auto">
            {searchResponse.data.totalResults} results
          </p>
        </div>
      </Card>
      <div className="mt-4 flex flex-col gap-2 w-full items-center sm:w-[90vw] sm:mx-auto">
        {searchResponse.data.results.map((e) => {
          return (
            <Link to={`../recipes/${e.id}`} className="group w-full ">
              <RecipeCard key={e.id} item={e} />
            </Link>
          );
        })}
      </div>
      <div className="text-primary flex justify-center gap-1 my-4">
        <button
          onClick={() => {
            pageHandler(-1);
          }}
          className="px-1 py-1 bg-primary text-primary-text rounded disabled:text-neutral-500"
          disabled={
            urlParams.get("page") === null || urlParams.get("page") === "1"
          }
        >
          <ChevronLeft />
        </button>
        <p className="px-3  py-1 bg-primary text-primary-text rounded">
          {urlParams.get("page") || 1}
        </p>
        <button
          onClick={() => {
            pageHandler(1);
          }}
          className="px-1  py-1 bg-primary text-primary-text rounded disabled:text-neutral-500"
          disabled={urlParams.get("page") == searchResponse.data.totalPages}
        >
          {console.log(urlParams.get("page"))}
          <ChevronRight />
        </button>
      </div>
    </>
  );
};

export default SearchResults;
