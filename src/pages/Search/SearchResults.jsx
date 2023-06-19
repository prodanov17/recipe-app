import React from "react";
import { Link, useLoaderData, useSearchParams } from "react-router-dom";
import Card from "../../UI/Card";
import RecipeCard from "./components/RecipeCard";

const SearchResults = () => {
  const searchResponse = useLoaderData();
  const [urlParams] = useSearchParams();

  return (
    <>
      <Link to={"/"} className="mb-4 ml-8 text-neutral-700 underline block">
        Go back...
      </Link>
      <Card className={"sm:max-w-[825px] sm:w-[90vw] sm:mx-auto"}>
        <div className="text-neutral-800 flex flex-col sm:flex-row text-lg justify-between p-4">
          <h1>
            Showing results for: <b>{urlParams.get("query")}</b>
          </h1>
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
    </>
  );
};

export default SearchResults;
