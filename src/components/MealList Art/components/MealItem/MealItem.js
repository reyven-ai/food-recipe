import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToFavorites, removeFromFavorites } from "../../store/actions/meal";

import classes from "./MealItem.module.css";

function MealItem({ meal }) {
  const { idMeal, strMeal, strMealThumb, strArea } = meal;
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites);

  const isMovieInFavorites = favorites.some(
    (favMovie) => favMovie.idMeal === meal.idMeal
  );

  const handleToggleFavorites = () => {
    if (isMovieInFavorites) {
      dispatch(removeFromFavorites(meal.idMeal));
    } else {
      dispatch(addToFavorites(meal));
    }
  };
  return (
    <>
      <div key={meal.idMeal} className={classes.meal}>
        <Link>
          <img src={strMealThumb} alt={strMeal} className={classes.mealImage} />
          <p className={classes.mealName}>{strMeal}</p>
        </Link>
        <div className={classes.overview}>
          <div className={classes.detail}>
            <div className={classes.view}>
              <Link>View</Link>
            </div>
            <div className={classes.btn}>
              <button onClick={handleToggleFavorites}>
                {isMovieInFavorites ? "-" : "+"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MealItem;
