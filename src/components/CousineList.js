// import React, { useEffect, useState } from "react";
// import { fetchMealCategoriesFromCustomURL } from "../api/apis";

// function CustomCategoriesComponent() {
//   const [categories, setCategories] = useState([]);

//   useEffect(() => {
//     // Fetch custom meal categories when the component mounts
//     fetchMealCategoriesFromCustomURL()
//       .then((data) => {
//         setCategories(data);
//       })
//       .catch((error) => {
//         console.error("Error fetching custom categories:", error);
//       });
//   }, []);

//   return (
//     <div>
//       <h2>Custom Meal Categories</h2>
//       <ul>
//         {categories.map((category) => (
//           <li key={category.idCategory}>
//             <div>
//               <img
//                 src={category.strCategoryThumb}
//                 alt={category.strCategory}
//                 style={{ width: "100px", height: "100px" }} // Adjust image size as needed
//               />
//             </div>
//             <div>{category.strCategory}</div>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default CustomCategoriesComponent;
