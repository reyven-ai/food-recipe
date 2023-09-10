import React from "react";
import classes from "./MealList.module.css"; // Define your CSS classes here
import MealItem from "./MealItem";

function useMealList({ meals }) {
  return (
    <div className={classes.meals}>
      {meals.map((meal) => (
        <MealItem key={meal.idMeal} meal={meal} />
      ))}
    </div>
  );
}

export default useMealList;
