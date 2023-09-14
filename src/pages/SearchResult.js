import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import MealList from "../components/Meal/MealList";
import styled from "styled-components";
import { fetchMealsBySearchQuery } from "../api/apis";

const CousineContainer = styled.div`
  @media (max-width: 576px) {
    // display: none;
  }
`;

const Heading = styled.h2`
  padding: 1rem;
  display: flex;
  width: 80%;
  margin-left: 10rem;

  @media (max-width: 576px) {
    padding: 0rem;
    margin-left: 1.2rem;
    font-size: 17px;
  }
`;

const Message = styled.p`
  padding: 1rem;
  text-align: center;
`;

const SearchResults = () => {
  const { query } = useParams();
  const [searchedMeals, setSearchedMeals] = useState([]);
  const [isNoResults, setIsNoResults] = useState(false);

  useEffect(() => {
    const fetchSearchResults = async () => {
      try {
        const meals = await fetchMealsBySearchQuery(query);
        setSearchedMeals(meals);

        // Check if there are no search results
        setIsNoResults(meals.length === 0);
      } catch (error) {
        console.error("Error fetching search results:", error);
      }
    };

    fetchSearchResults();
  }, [query]);

  return (
    <CousineContainer>
      <Heading>
        Search results for "<span>{decodeURIComponent(query)}</span>"
      </Heading>
      {isNoResults ? (
        <Message>No results found for "{decodeURIComponent(query)}"</Message>
      ) : (
        <MealList meals={searchedMeals} title="" />
      )}
    </CousineContainer>
  );
};

export default SearchResults;
