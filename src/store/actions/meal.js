export const addToFavorites = (meal) => {
  return (dispatch) => {
    // Your existing action logic
    dispatch({
      type: "ADD_TO_FAVORITES",
      payload: meal,
    });

    // Update localStorage
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    if (!favorites.some((m) => m.idMeal === meal.idMeal)) {
      favorites.push(meal);
      localStorage.setItem("favorites", JSON.stringify(favorites));
    }
  };
};

export const removeFromFavorites = (mealId) => {
  return (dispatch) => {
    // Your existing action logic
    dispatch({
      type: "REMOVE_FROM_FAVORITES",
      payload: { idMeal: mealId },
    });

    // Update localStorage
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    const updatedFavorites = favorites.filter((meal) => meal.idMeal !== mealId);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  };
};
