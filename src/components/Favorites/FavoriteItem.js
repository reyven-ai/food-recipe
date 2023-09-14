import React from "react";

// import classes from "./FavoriteItem.module.css";
import { Link } from "react-router-dom";
import styled from "styled-components";

const FavoriteImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.1);
  border-radius: 10px;

  @media (max-width: 576px) {
    height: auto;
`;

const FavoriteItem = ({ idMeal, strMeal, strMealThumb }) => {
  return (
    <div>
      <li key={idMeal}>
        <Link to={`/movie/${idMeal}`}>
          <FavoriteImage src={strMealThumb} alt={strMeal} />
        </Link>
      </li>
    </div>
  );
};

export default FavoriteItem;
