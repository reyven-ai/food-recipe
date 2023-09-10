// import React from "react";
// import { useQuery } from "react-query";
// import { fetchMealsByArea } from "../../api/apis"; // Import the function
// import classes from "./Area.module.css";
// import { Link } from "react-router-dom";

// function MealsByArea({ selectedArea }) {
//   const {
//     data: meals,
//     isLoading,
//     error,
//   } = useQuery(["mealsByArea", selectedArea], () =>
//     fetchMealsByArea(selectedArea)
//   );

//   if (isLoading) {
//     return <div>Loading...</div>;
//   }

//   if (error) {
//     return <div>Error: {error.message}</div>;
//   }

//   return (
//     <div className={classes.country}>
//       <h2>Meals By Area: {selectedArea}</h2>
//       <ul className={classes.browse}>
//         {meals.map((meal) => (
//           <li key={meal.idMeal}>
//             <Link>
//               <img src={meal.strMealThumb} alt={meal.strMeal} />
//               <p>{meal.strMeal}</p>
//             </Link>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default MealsByArea;
import React from "react";
import { useQuery } from "react-query";
import { fetchMealsByArea } from "../../api/apis";
import classes from "./Area.module.css";
import { Link } from "react-router-dom";

function MealsByArea({ selectedArea, selectedLetter }) {
  const queryKey = ["mealsByArea", selectedArea, selectedLetter];

  const {
    data: meals,
    isLoading,
    error,
  } = useQuery(queryKey, () => fetchMealsByArea(selectedArea, selectedLetter)); // can use option as third parameter

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className={classes.country}>
      <h2>Meals By {selectedArea}</h2>
      <ul className={classes.browse}>
        {meals.map((meal) => (
          <li key={meal.idMeal}>
            <Link>
              <img src={meal.strMealThumb} alt={meal.strMeal} />
              <p>{meal.strMeal}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MealsByArea;
