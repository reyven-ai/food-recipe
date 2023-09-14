import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchMealById } from "../../api/apis"; // Import the API function
import classes from "./MealDetail.module.css";

function MealDetailPage() {
  const { idMeal } = useParams();
  const [mealDetail, setMealDetail] = useState(null);

  useEffect(() => {
    async function fetchMeal() {
      try {
        const data = await fetchMealById(idMeal); // Use the fetchMealById function to fetch meal details
        console.log("API Response:", data); // Log the API response for debugging

        if (data) {
          // Check if data is not null before setting the state
          setMealDetail(data);
        } else {
          console.error("Meal details not found.");
        }
      } catch (error) {
        console.error("Error fetching meal details:", error);
      }
    }

    fetchMeal();
  }, [idMeal]); // Run the effect whenever the idMeal parameter changes

  // ...
  if (!mealDetail) {
    return <div>Loading...</div>;
  }

  return (
    <div className={classes.detail}>
      <div className={classes.background}>
        <img src={mealDetail.strMealThumb} alt={mealDetail.strMeal} />
        <h2>{mealDetail.strMeal}</h2>
      </div>
      <div className={classes.more}>
        {/* <p>Category: {mealDetail.strCategory}</p>
        <p>Area: {mealDetail.strArea}</p> */}
        <div className={classes.btn}>
          <div>
            <button>Ingredients</button>
            <ul>
              {Object.keys(mealDetail)
                .filter(
                  (key) => key.startsWith("strIngredient") && mealDetail[key]
                )
                .map((key) => (
                  <li key={key}>{mealDetail[key]}</li>
                ))}
            </ul>
          </div>
          <div>
            <button>Instructions</button>
            <p>{mealDetail.strInstructions}</p>
          </div>
          {/* <button>Instructions</button> */}
        </div>
      </div>
    </div>
  );
}

export default MealDetailPage;
