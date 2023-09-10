const initialState = {
  favorites: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_FAVORITES":
      if (
        !state.favorites.some((meal) => meal.idMeal === action.payload.idMeal)
      ) {
        return {
          ...state,
          favorites: [...state.favorites, action.payload],
        };
      }
      return state;

    case "REMOVE_FROM_FAVORITES":
      return {
        ...state,
        favorites: state.favorites.filter(
          (meal) => meal.idMeal !== action.payload.idMeal
        ),
      };
    // ...other case statements for different actions
    default:
      return state;
  }
};

export default reducer;
