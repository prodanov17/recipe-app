import React from "react";
import { Link } from "react-router-dom";

const SearchTabs = ({ active }) => {
  return (
    <div className="flex -mt-10 p-[2px] text-secondary-text bg-secondary  rounded-lg shadow-sm font-medium">
      <Link
        to="/"
        className={`px-4 py-2 rounded-lg hover:bg-secondary-hover ${
          active === "name" &&
          "bg-primary text-primary-text hover:bg-secondary-text cursor-default"
        }`}
      >
        Search by name
      </Link>

      <Link
        to="/search-by-nutrients"
        className={`px-4 py-2 hover:bg-secondary-hover rounded-lg transition-colors ${
          active === "nutrients" &&
          "bg-primary text-primary-text hover:bg-secondary-text cursor-default"
        }`}
      >
        Search by nutrients
      </Link>

      <Link
        to="/search-by-ingredients"
        className={`px-4 py-2 hover:bg-secondary-hover rounded-lg transition-colors ${
          active === "ingredients" &&
          "bg-primary text-primary-text hover:bg-secondary-text cursor-default"
        }`}
      >
        Search by ingredients
      </Link>
    </div>
  );
};

export default SearchTabs;
