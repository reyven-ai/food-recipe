import React from "react";
import { useQuery } from "react-query";
import { fetchMealsByArea } from "../../api/apis";
import MealItem from "../Meal/MealItem";

function MealsByArea({ selectedArea, selectedLetter }) {
  const queryKey = ["mealsByArea", selectedArea, selectedLetter];

  const {
    data: meals,
    isLoading,
    error,
  } = useQuery(queryKey, () => fetchMealsByArea(selectedArea, selectedLetter));

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="mt-8 w-[90%] md:w-[90%] mx-auto">
      <h2 className="text-left pl-[2%] text-2xl md:text-2xl">
        Meals By {selectedArea}
      </h2>
      <ul className="grid gap-[20px] grid-cols-5 w-full mx-auto justify-center p-4 md:p-8 items-center">
        {meals.map((meal) => (
          <MealItem key={meal.idMeal} meal={meal} />
        ))}
      </ul>
    </div>
  );
}

export default MealsByArea;
