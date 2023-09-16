import React, { useState } from "react";
import { useQuery } from "react-query";
import { fetchRandomMeal } from "../api/apis";
import styled from "styled-components"; // Import styled from 'styled-components'
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";

// Create styled components for your elements
const StyledContainer = styled.div`
  text-align: center;
  margin: 12px 20px;
  padding-bottom: 4rem;
`;

const CloseContainer = styled.div`
  text-align: left;
  padding-top: 0px;
`;

const StyledHeading = styled.h1`
  font-size: 24px;
  color: #333;

  @media (max-width: 576px) {
    font-size: 18px;
  }
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
  }
`;

const ButtonStyled = styled.button`
  background-color: transparent;
  border: 1px solid #00b14f;
  padding: 0.4rem 1rem;
  border-radius: 20px;
  font-weight: 600;
  width: 100%; /* Set button width to 100% */
  margin-top: 0.5rem;
  color: black;

  ${(props) =>
    props.active &&
    `
      background-color: #00b14f;
      color: #fff;
    `}
`;

const ListStyled = styled.ul`
  margin-top: 1rem;
`;

const Content = styled.p`
  width: 100%;
`;

function RandomMeal() {
  const [activeTab, setActiveTab] = useState("");
  const {
    data: randomMeal,
    isLoading,
    error,
  } = useQuery("randomMeal", fetchRandomMeal);

  const handleTabChange = (tabName) => {
    setActiveTab(tabName);
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <StyledContainer>
      <CloseContainer>
        <Link to="/">
          <FontAwesomeIcon
            icon={faClose}
            style={{
              fontSize: "18px",
              color: "black",
            }}
          />
        </Link>
      </CloseContainer>
      <StyledHeading>
        Here's the <span>random</span> meal for you!
      </StyledHeading>
      {randomMeal ? (
        <div>
          <StyledImage src={randomMeal.strMealThumb} alt={randomMeal.strMeal} />
          <StyledMealName>{randomMeal.strMeal}</StyledMealName>
          <div>
            <ButtonStyled
              onClick={() => handleTabChange("Country")}
              active={activeTab === "Country" ? "activeTab" : ""}
            >
              Area
            </ButtonStyled>
            {activeTab === "Country" && <p>{randomMeal.strArea}</p>}
          </div>
          <div>
            <ButtonStyled
              onClick={() => handleTabChange("Ingredients")}
              active={activeTab === "Ingredients" ? "activeTab" : ""}
            >
              Ingredients
            </ButtonStyled>
            {activeTab === "Ingredients" && (
              <ListStyled>
                {Object.keys(randomMeal)
                  .filter(
                    (key) => key.startsWith("strIngredient") && randomMeal[key]
                  )
                  .map((key) => (
                    <li key={key}>{randomMeal[key]}</li>
                  ))}
              </ListStyled>
            )}
          </div>
          <div>
            <ButtonStyled
              onClick={() => handleTabChange("Instructions")}
              active={activeTab === "Instructions" ? "activeTab" : ""}
            >
              Instructions
            </ButtonStyled>
            {activeTab === "Instructions" && (
              <Content>{randomMeal.strInstructions}</Content>
            )}
          </div>
        </div>
      ) : (
        <p>No random meal available</p>
      )}
    </StyledContainer>
  );
}

export default RandomMeal;
