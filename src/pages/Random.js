import React from "react";
import { useQuery } from "react-query";
import { fetchRandomMeal } from "../api/apis";
import styled from "styled-components"; // Import styled from 'styled-components'

// Create styled components for your elements
const StyledContainer = styled.div`
  text-align: center;
  margin: 20px;
`;

const StyledHeading = styled.h1`
  font-size: 24px;
  color: #333;

  @media (max-width: 576px) {
    font-size: 18px;
`;

const StyledImage = styled.img`
  max-width: 100%;
  border: 1px solid #ccc;
  border-radius: 10px;
  margin-top: 10px;
  object-fit: cover;
  height: auto;
`;

const StyledMealName = styled.h2`
  font-size: 18px;
  color: black;

  @media (max-width: 576px) {
    font-size: 14px;
`;

function RandomMeal() {
  const {
    data: randomMeal,
    isLoading,
    error,
  } = useQuery("randomMeal", fetchRandomMeal);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <StyledContainer>
      <StyledHeading>
        Here's the <span>random</span> meal for you!
      </StyledHeading>
      {randomMeal ? (
        <div>
          <StyledImage src={randomMeal.strMealThumb} alt={randomMeal.strMeal} />
          <StyledMealName>{randomMeal.strMeal}</StyledMealName>
        </div>
      ) : (
        <p>No random meal available</p>
      )}
    </StyledContainer>
  );
}

export default RandomMeal;
