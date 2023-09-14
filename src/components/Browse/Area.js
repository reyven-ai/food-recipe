import React from "react";
import { useQuery } from "react-query";
import styled from "styled-components";
import { fetchMealsByArea } from "../../api/apis";
import MealItem from "../Meal/MealItem";

const BrowseContainer = styled.div`
  margin-top: 8rem;
  width: 90%;
  margin: 6rem auto;

  @media (max-width: 576px) {
    margin-top: 2rem;
`;

const CountryHeader = styled.h2`
  text-align: left;
  padding-left: 2.1rem;
  // font-size: px;

  @media (max-width: 576px) {
    font-size: 16px;
    padding-left: 0.2rem;
`;

const BrowseList = styled.ul`
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(5, 1fr);
  width: 100%;
  margin: auto;
  justify-content: center;
  padding: 1rem 2rem;
  align-items: center;

  @media (max-width: 576px) {
    grid-template-columns: repeat(2, 1fr);
    width: 100%;
    // margin: 0.5rem auto;
    padding: 0.5rem 0rem;
  }

  @media (min-width: 600px) {
    grid-template-columns: repeat(
      3,
      1fr
    ); /* Four columns for screens wider than 992px (small desktops) */
  }

  @media (min-width: 900px) {
    grid-template-columns: repeat(
      4,
      1fr
    ); /* Four columns for screens wider than 992px (small desktops) */
  }

  @media (min-width: 1200px) {
    grid-template-columns: repeat(
      5,
      1fr
    ); /* Five columns for screens wider than 1200px (large desktops) */
  }
`;

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
    <BrowseContainer>
      <CountryHeader>Meals By {selectedArea}</CountryHeader>
      <BrowseList>
        {meals.map((meal) => (
          <MealItem key={meal.idMeal} meal={meal} />
        ))}
      </BrowseList>
    </BrowseContainer>
  );
}

export default MealsByArea;
