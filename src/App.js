import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/Home";
import RootLayout from "./pages/Root";
import ErrorPage from "./pages/Error";
import Cousine from "./pages/Cousine";
import RandomPage from "./pages/Random";
import BrowseByArea from "./pages/BrowseByArea";
import FavoritesPage from "./pages/Favorites";
import MealDetailPage from "./components/Meal/MealDetail";
import { addToFavorites } from "./store/actions/meal";
import SearchResults from "./pages/SearchResult";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

const routes = [
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "/cuisine", exact: true, element: <Cousine /> },
      { path: "/cuisine/:category", element: <Cousine /> },
      { path: "/view/:idMeal", element: <MealDetailPage /> },
      { path: "/discover", element: <RandomPage /> },
      { path: "/favorites", element: <FavoritesPage /> },
      { path: "/search/:query", element: <SearchResults /> },
      { path: "/area", element: <BrowseByArea /> },
      { path: "*", element: <ErrorPage /> },
    ],
  },
];

const router = createBrowserRouter(routes);

function App() {
  const dispatch = useDispatch();

  // Initialize favorites from localStorage when the app loads
  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    if (storedFavorites.length > 0) {
      storedFavorites.forEach((meal) => {
        dispatch(addToFavorites(meal));
      });
    }
  }, [dispatch]);
  return <RouterProvider router={router} />;
}

export default App;
