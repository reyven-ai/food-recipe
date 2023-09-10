import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import MealList from "../components/Meal/MealList"; // You'll need to import the appropriate component for displaying meal results.

const SearchResults = () => {
  const { query } = useParams();
  const [searchedMeals, setSearchedMeals] = useState([]);

  useEffect(() => {
    const fetchSearchResults = async () => {
      try {
        // Replace this with the MealDB API URL
        const response = await fetch(
          `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`
        );
        const data = await response.json();
        setSearchedMeals(data.meals || []); // Assuming the MealDB response contains a "meals" property.
      } catch (error) {
        console.error("Error fetching search results:", error);
      }
    };

    fetchSearchResults();
  }, [query]);

  return (
    <div>
      <h2>Search results for: {decodeURIComponent(query)}</h2>
      <MealList meals={searchedMeals} title="" />{" "}
      {/* Replace "MealList" with your actual meal component */}
    </div>
  );
};

export default SearchResults;
