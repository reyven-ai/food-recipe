import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToFavorites, removeFromFavorites } from "../../store/actions/meal";
import Add from "../../assests/add.png";

const MealItem = ({ meal }) => {
  const { idMeal, strMeal, strMealThumb } = meal;
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites);

  const isMealInFavorites = favorites.some(
    (favMeal) => favMeal.idMeal === meal.idMeal
  );

  const handleToggleFavorites = () => {
    if (isMealInFavorites) {
      dispatch(removeFromFavorites(meal.idMeal));
    } else {
      dispatch(addToFavorites(meal));
    }
  };

  return (
    <div className="relative group">
      <Link to={`/view/${idMeal}`} className="block">
        <img
          src={strMealThumb}
          alt={strMeal}
          className="w-full h-auto rounded-md shadow-md"
        />
        <p className="mt-2 overflow-x-auto h-21 md:h-14 font-semibold">
          {strMeal}
        </p>
      </Link>
      <div className="absolute bottom-[62px] left-0 right-0 invisible opacity-0 bg-black bg-opacity-60 p-2 rounded-md group-hover:visible group-hover:opacity-100 transition duration-300">
        <div className="flex items-center justify-between px-[0.5rem]">
          <div className="gap-[20px] items-center">
            <button
              onClick={handleToggleFavorites}
              className="text-white text-2xl md:text-2xl mr-2"
            >
              {isMealInFavorites ? (
                "✓"
              ) : (
                <img
                  className="w-[55px] h-[55px] items-center"
                  src={Add}
                  alt=""
                ></img>
              )}
            </button>
            <button
              onClick={handleToggleFavorites}
              className="text-white text-2xl md:text-2xl ml-2"
            >
              ♡
            </button>
          </div>
          <Link
            to={`/view/${idMeal}`}
            className="border-white border px-5 ml-2 py-1 text-white rounded-[20px]"
          >
            View
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MealItem;
