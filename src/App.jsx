import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/Home";
import SearchByIngredients from "./pages/Home/SearchByIngredients";
import SearchByName from "./pages/Home/SearchByName";
import SearchByNutrients from "./pages/Home/SearchByNutrients";
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
    ],
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
