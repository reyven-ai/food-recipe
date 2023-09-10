export const addToFavorites = (meal) => ({
  type: "ADD_TO_FAVORITES",
  payload: meal,
});

export const removeFromFavorites = (mealIdMeal) => ({
  type: "REMOVE_FROM_FAVORITES",
  payload: { idMeal: mealIdMeal },
});
