import React, { useState, useEffect } from "react";
import { useQuery } from "react-query";
import { fetchMealCategories } from "../api/apis";
import { fetchMealsByCategory } from "../api/apis";
import MealList from "../components/Meal/MealList";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

function Category() {
  const {
    data: categories,
    isLoading,
    error,
  } = useQuery("mealCategories", fetchMealCategories);

  const [meals, setMeals] = useState([]);
  const { category: categoryParam } = useParams();
  const selectedCategory =
    categoryParam ??
    ((categories &&
      categories.length &&
      categories[0].strCategory.toLowerCase()) ||
      null);

  useEffect(() => {
    getCategoryMeals(selectedCategory);
  }, [categoryParam, categories]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  async function getCategoryMeals(category) {
    try {
      if (category === null) {
        return;
      }
      const categoryMeals = await fetchMealsByCategory(category);
      setMeals(categoryMeals);
    } catch (error) {
      console.error("Error fetching meals by category:", error);
    }
  }

  return (
    <div className="mt-8 md:mt-6">
      <h2 className="font-bold text-1xl md:text-2xl lg:text-3xl xl:text-4xl mb-2">
        Discover Delicious <span>Cuisine</span>
      </h2>
      <p className="mx-auto font-medium max-w-screen-sm md:max-w-screen-md w-[550px]">
        Discover a world of flavors with our wide range of meal categories.
        Click on a category to explore mouthwatering dishes.
      </p>
      <ul className="flex gap-5 pt-4 pb-6 md:pt-6 w-11/12 md:w-[59%] overflow-x-auto mx-auto">
        {categories.map((category) => (
          <li
            key={category.strCategory}
            className={`text-black font-semibold border border-green-500 rounded-[24px] py-1.5 px-5 text-[15px] ${
              selectedCategory &&
              category.strCategory.toLowerCase() === selectedCategory
                ? "bg-green-500 border-green-500 text-white"
                : ""
            }`}
          >
            <Link to={`/cuisine/${category.strCategory.toLowerCase()}`}>
              {category.strCategory}
            </Link>
          </li>
        ))}
      </ul>

      {meals && <MealList meals={meals} />}
    </div>
  );
}

export default Category;
