import axios from "axios";
import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
  useLocation,
} from "react-router-dom";
import Login from "./pages/Authentication/Login";
import Signup from "./pages/Authentication/Signup";
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
          const minCalories = url.searchParams.get("minCalories");
          const minCarbs = url.searchParams.get("minCarbs");
          const minFat = url.searchParams.get("minFat");
          const minProtein = url.searchParams.get("minProtein");
          const maxCalories = url.searchParams.get("maxCalories");
          const maxCarbs = url.searchParams.get("maxCarbs");
          const maxFat = url.searchParams.get("maxFat");
          const maxProtein = url.searchParams.get("maxProtein");
          const page = url.searchParams.get("page") || 1;

          const offset = limit * (page - 1);

          axios.defaults.headers.common["x-api-key"] =
            import.meta.env.VITE_API_KEY;

          let endUrl = `https://api.spoonacular.com/recipes/complexSearch?addRecipeInformation=true`;
          endUrl +=  queryParams ? '&query=' + queryParams : "&query=";
          endUrl += cuisineParams ? "&cuisine=" + cuisineParams : "";
          endUrl += dietParams ? "&diet=" + dietParams : "";
          endUrl += intoleranceParams
            ? "&intolerance=" + intoleranceParams
            : "";
          if (params.type == "nutrients") {
            endUrl += `&maxCalories=${maxCalories}&maxCarbs=${maxCarbs}&maxFat=${maxFat}&maxProtein=${maxProtein}&minCalories=${minCalories}&minCarbs=${minCarbs}&minFat=${minFat}&minProtein=${minProtein}`;
          }

          endUrl += `&number=${limit}&offset=${offset}`;

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
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Signup />,
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
