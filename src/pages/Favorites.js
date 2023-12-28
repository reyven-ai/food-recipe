import { useSelector } from "react-redux";
import FavoriteItem from "../components/Favorites/FavoriteItem";

const Favorites = (props) => {
  const favoriteMeals = useSelector((state) => state.favorites);

  let content = <p className="placeholder">Got no favorites yet!</p>;

  if (favoriteMeals.length > 0) {
    content = (
      <>
        <div className="text-left pl-8 mt-8">
          <h2 className="text-2xl md:text-3xl text-left">
            Your <span>Favorites</span>
          </h2>
        </div>
        <ul className="grid gap-[20px] grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 w-full mx-auto justify-center p-4 md:p-8 items-center">
          {favoriteMeals.map((meal) => (
            <FavoriteItem
              key={meal.idMeal}
              idMeal={meal.idMeal}
              strMeal={meal.strMeal}
              strMealThumb={meal.strMealThumb}
            />
          ))}
        </ul>
      </>
    );
  }
  return content;
};

export default Favorites;
