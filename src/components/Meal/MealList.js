import React from "react";
import MealItem from "./MealItem";
import styled from "styled-components";

const MealContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  width: 80%;
  margin: 1rem auto;
  gap: 15px;
  justify-content: center;

  @media (max-width: 576px) {
    grid-template-columns: repeat(2, 1fr);
    width: 90%;
    margin: 0.5rem auto;
  }

  @media (min-width: 600px) {
    grid-template-columns: repeat(
      3,
      1fr
    ); /* Three columns for screens wider than 768px (tablets) */
  }

  @media (min-width: 992px) {
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

function MealList({ meals }) {
  return (
    <MealContainer>
      {meals.map((meal) => (
        <MealItem key={meal.idMeal} meal={meal} />
      ))}
    </MealContainer>
  );
}

export default MealList;
