import React from "react";
import MealItem from "./MealItem";

function MealList({ meals }) {
  return (
    <div className="grid grid-cols-5 gap-[15px] mt-[1rem] mx-auto justify-center xs:grid-cols-2 xs:w-[90%]  sm:grid-cols-3 sm:w-90 sm:margin-0.5rem sm:pb-4 md:grid-cols-3 lg:w-[90%] lg:grid-cols-4 xl:grid-cols-5 xl:w-[90%] 2xl:grid-cols-5 2xl:w-[80%]">
      {meals.map((meal) => (
        <MealItem key={meal.idMeal} meal={meal} />
      ))}
    </div>
  );
}

export default MealList;
