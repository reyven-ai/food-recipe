const BASE_API_URL = "https://www.themealdb.com/api/json/v1/1";

export const fetchMealCategories = async () => {
  const response = await fetch(`${BASE_API_URL}/list.php?c=list`);
  if (!response.ok) {
    throw new Error("Failed to fetch meal categories");
  }
  const data = await response.json();
  return data.meals || [];
};

export const fetchRandomMeal = async () => {
  const response = await fetch(`${BASE_API_URL}/random.php`);
  if (!response.ok) {
    throw new Error("Failed to fetch random meal");
  }
  const data = await response.json();
  return data.meals ? data.meals[0] : null;
};

export const fetchMealsBySearchQuery = async (query) => {
  try {
    const response = await fetch(`${BASE_API_URL}/search.php?s=${query}`);

    if (!response.ok) {
      throw new Error("Failed to fetch meals by search query");
    }

    const data = await response.json();
    return data.meals || [];
  } catch (error) {
    console.error("Error fetching meals by search query:", error);
    return [];
  }
};

export const fetchMealsByCategory = async (category) => {
  const query = `${BASE_API_URL}/filter.php?c=${category}`;

  const response = await fetch(query);

  if (!response.ok) {
    throw new Error(`Failed to fetch meals for category ${category}`);
  }

  const data = await response.json();
  return data.meals || [];
};

export const fetchMealById = async (idMeal) => {
  const query = `${BASE_API_URL}/lookup.php?i=${idMeal}`;

  const response = await fetch(query);

  if (!response.ok) {
    throw new Error(`Failed to fetch meal details for idMeal ${idMeal}`);
  }

  const data = await response.json();
  return data.meals ? data.meals[0] : null;
};

export const fetchMealsByArea = async (selectedArea, selectedLetter) => {
  const areaQuery = selectedArea ? `a=${selectedArea}` : "";
  const letterQuery = selectedLetter ? `f=${selectedLetter}` : "";
  const query = `${BASE_API_URL}/filter.php?${areaQuery}&${letterQuery}`;

  const response = await fetch(query);

  if (!response.ok) {
    throw new Error("Failed to fetch meals by area");
  }

  const data = await response.json();
  return data.meals || [];
};

export const fetchMealsByName = async (mealName) => {
  const query = `${BASE_API_URL}/search.php?s=${mealName}`;
  console.log(query);

  const response = await fetch(query);

  if (!response.ok) {
    throw new Error(`Failed to fetch meals with name ${mealName}`);
  }

  const data = await response.json();
  return data.meals || [];
};

// const searchMealsByName = async (name) => {
//   const response = await fetch(`${BASE_API_URL}/search.php?s=${value}`);
//   if (!response.ok) {
//     throw new Error('Failed to search meals by name');
//   }
//   const data = await response.json();
//   return data.meals || [];
// };

// List all meals by the first letter
// const listMealsByFirstLetter = async (firstLetter) => {
//   const response = await fetch(`${BASE_API_URL}/search.php?f=${firstLetter}`);
//   if (!response.ok) {
//     throw new Error('Failed to list meals by first letter');
//   }
//   const data = await response.json();
//   return data.meals || [];
// };
// /list.php?c=list
