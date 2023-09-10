import React from "react";

import classes from "./FavoriteItem.module.css";
// import Triangle from "../../asset/triangle.png";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToFavorites, removeFromFavorites } from "../../store/actions/meal";

const FavoriteItem = ({ idMeal, strMeal, strMealThumb }) => {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites);

  const isMealInFavorites = favorites.some(
    (favMeal) => favMeal.idMeal === idMeal.idMeal
  );

  const handleToggleFavorites = () => {
    if (isMealInFavorites) {
      dispatch(removeFromFavorites(idMeal.idMeal));
    } else {
      dispatch(addToFavorites(idMeal));
    }
  };
  return (
    <div className={classes.card}>
      <li key={idMeal} className={classes.list}>
        <Link to={`/movie/${idMeal}`}>
          <img src={strMealThumb} alt={strMeal} />
        </Link>
        <div>
          <div className={classes.overview}>
            {/* <div className={classes.btn1}>
              <button>
                <img src={Triangle} alt="triangle" />
              </button>
            </div> */}
            <div className={classes.btn2}>
              <button onClick={handleToggleFavorites}>
                {isMealInFavorites ? "-" : "+"}
              </button>
            </div>
          </div>
        </div>
      </li>
    </div>
  );
};

export default FavoriteItem;
