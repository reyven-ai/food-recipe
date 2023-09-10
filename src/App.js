//
import { RouterProvider, createBrowserRouter, Route } from "react-router-dom";
import React from "react";
import HomePage from "./pages/Home";
import RootLayout from "./pages/Root";
import ErrorPage from "./pages/Error";
import Cousine from "./components/Cousine";
import RandomPage from "./pages/Random";
import BrowseByArea from "./pages/BrowseByArea";
import FavoritesPage from "./pages/Favorites";
import CategoryList from "./components/CousineList";
import SearchResults from "./pages/SearchResult";
//
// imp
// import CategoryMeals from "./pages/CategoryList";
// import Favorites from "./components/FoodList/Favorites";
// import Cousine from "./pages/Cousine";
// import BrowseByCountry from "./pages/BrowseByCountry";

const routes = [
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "/cousine", exact: true, element: <Cousine /> },
      { path: "/cousine/:category", element: <Cousine /> },
      { path: "/discover", element: <RandomPage /> },
      { path: "/favorites", element: <FavoritesPage /> },
      { path: "/search/:query", element: <SearchResults /> },
      { path: "/area", element: <BrowseByArea /> },
      { path: "*", element: <ErrorPage /> },

      // {
      //   path: "/cousine/:category",
      //   element: <CategoryList />,
      // },

      // { path: "/category/:category", element: <CategoryMeals /> },
    ],
  },
];

const router = createBrowserRouter(routes);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
