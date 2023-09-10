import React, { useState, useEffect } from "react";
import { useQuery } from "react-query";
import { fetchMealCategories } from "../api/apis";
import { fetchMealsByCategory } from "../api/apis";
import MealList from "./Meal/MealList"; // Import the MealList component
import classes from "./Cousine.module.css";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

function Category() {
  const {
    data: categories,
    isLoading,
    error,
  } = useQuery("mealCategories", fetchMealCategories);

  // const [activeCategory, setActiveCategory] = useState(null);
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

  // useEffect(() => {
  //   // When the component mounts, set the first category as active by default
  //   if (categories && categories.length > 0) {
  //     handleCategoryClick(categories[0]);
  //   }
  // }, [categories]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  // const handleCategoryClick = async (category) => {
  //   try {
  //     // Fetch meals by the selected category
  //     const categoryMeals = await fetchMealsByCategory(category.strCategory);
  //     setMeals(categoryMeals);
  //     setActiveCategory(category);
  //   } catch (error) {
  //     console.error("Error fetching meals by category:", error);
  //   }
  // };

  async function getCategoryMeals(category) {
    try {
      // Fetch meals by the selected category
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
    <div className={classes.cousine}>
      <h2 className={classes.heading}>
        Discover Delicious <span>Cuisine</span>
      </h2>
      <p className={classes.description}>
        Discover a world of flavors with our wide range of meal categories.
        Click on a category to explore mouthwatering dishes.
      </p>
      <ul className={classes.category}>
        {categories.map((category) => (
          // <li key={category.strCategory}>
          //   <button
          //     onClick={() => handleCategoryClick(category)}
          //     className={
          //       activeCategory &&
          //       category.strCategory === activeCategory.strCategory
          //         ? classes.activeButton
          //         : classes.button
          //     }
          //   >
          //     {category.strCategory}
          //   </button>
          // </li>

          <li
            key={category.strCategory}
            className={
              selectedCategory &&
              category.strCategory.toLowerCase() === selectedCategory
                ? classes.activeButton
                : classes.button
            }
          >
            <Link to={`/cousine/${category.strCategory.toLowerCase()}`}>
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
