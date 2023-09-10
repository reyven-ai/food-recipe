import React from "react";
import { useSelector } from "react-redux";

import FavoriteItem from "../components/Favorites/FavoriteItem";
import classes from "../components/Favorites/FavoriteItem.module.css";
// import Card from "../components/UI/Card";

import styled from "styled-components";

const FavoritesList = styled.ul`
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(5, 1fr);
  width: 100%;
  margin: auto;
  justify-content: center;
  padding: 1rem 2rem;
  align-items: center;
`;

const FavoritesHeading = styled.h2`
  text-align: left;
  padding-left: 2rem;
`;

const Favorites = (props) => {
  const favoriteMeals = useSelector((state) => state.favorites);

  let content = <p className="placeholder">Got no favorites yet!</p>;

  if (favoriteMeals.length > 0) {
    content = (
      <>
        <FavoritesHeading>
          My <span>Favorites</span>
        </FavoritesHeading>
        <FavoritesList>
          {favoriteMeals.map((mea) => (
            <FavoriteItem
              key={mea.idMeal}
              idMeal={mea.idMeal}
              strMeal={mea.strMeal}
              strMealThumb={mea.strMealThumb}
            />
          ))}
        </FavoritesList>
      </>
    );
  }
  return content;
};

export default Favorites;
