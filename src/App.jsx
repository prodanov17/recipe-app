import axios from "axios";
import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
  useLocation,
} from "react-router-dom";
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
        path: "search/:type",
        element: <SearchResults />,
        loader: async ({ request, params }) => {
          let limit = 10;
          const url = new URL(request.url);
          const queryParams = url.searchParams.get("query");
          const cuisineParams = url.searchParams.get("cuisine");
          const dietParams = url.searchParams.get("diet");
          const intoleranceParams = url.searchParams.get("intolerance");
          const maxCalories = url.searchParams.get("maxCalories");
          const maxCarbs = url.searchParams.get("maxCarbs");
          const maxFat = url.searchParams.get("maxFat");
          const maxProtein = url.searchParams.get("maxProtein");
          const page = url.searchParams.get("page") || 1;

          const offset = limit * (page - 1);

          axios.defaults.headers.common["x-api-key"] =
            import.meta.env.VITE_API_KEY;

          let endUrl = `https://api.spoonacular.com/recipes/complexSearch?query=${queryParams}&addRecipeNutrition=true&cuisine=${cuisineParams}&diet=${dietParams}&intolerance=${intoleranceParams}&number=${limit}&offset=${offset}`;
          if (params.type == "nutrients") {
            endUrl += `&maxCalories=${maxCalories}&maxCarbs=${maxCarbs}&maxFat=${maxFat}&maxProtein=${maxProtein}`;
          }

          const response = await axios.get(endUrl);
          response.data.totalPages = Math.ceil(
            response.data.totalResults / limit
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
