import React, { useContext } from "react";
import Card from "../../UI/Card";
import { SearchRecipes } from "../../assets/illustrations";
import { Outlet } from "react-router";
import SearchContext from "../../context/SearchContext";

const HomePage = () => {
  const tagContext = useContext(SearchContext);

  return (
    <>
      <Card className="flex items-center flex-col px-8 gap-3 w-11/12 mt-12 sm:w-full mx-auto">
        <div className="relative -top-16">
          <SearchRecipes />
        </div>
        <Outlet context={tagContext} />
      </Card>
    </>
  );
};

export default HomePage;
