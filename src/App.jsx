import axios from "axios";
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/Home";
import SearchByIngredients from "./pages/Home/SearchByIngredients";
import SearchByName from "./pages/Home/SearchByName";
import SearchByNutrients from "./pages/Home/SearchByNutrients";
import Recipe from "./pages/Search/Recipe";
import SearchResults from "./pages/Search/SearchResults";
import Root from "./Root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <HomePage />,
        children: [
          { path: "/", element: <SearchByName /> },
          { path: "search-by-nutrients", element: <SearchByNutrients /> },
          { path: "search-by-ingredients", element: <SearchByIngredients /> },
        ],
      },
      {
        path: "search",
        element: <SearchResults />,
        loader: async ({ request }) => {
          const url = new URL(request.url);
          const queryParams = url.searchParams.get("query");
          const cuisineParams = url.searchParams.get("cuisine");
          const dietParams = url.searchParams.get("diet");
          const intoleranceParams = url.searchParams.get("intolerance");
          axios.defaults.headers.common["x-api-key"] =
            import.meta.env.VITE_API_KEY;
          const response = await axios.get(
            `https://api.spoonacular.com/recipes/complexSearch?query=${queryParams}&addRecipeNutrition=true&cuisine=${cuisineParams}&diet=${dietParams}&intolerance=${intoleranceParams}`
          );
          return response;
        },
      },
      {
        path: "recipes/:id",
        element: <Recipe />,
        loader: async ({ params }) => {
          axios.defaults.headers.common["x-api-key"] =
            import.meta.env.VITE_API_KEY;
          const response = await axios.get(
            `https://api.spoonacular.com/recipes/${params.id}/information?includeNutrition=true`
          );
          return response;
        },
      },
    ],
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
