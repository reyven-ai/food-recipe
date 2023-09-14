import { useSelector } from "react-redux";

import FavoriteItem from "../components/Favorites/FavoriteItem";

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

  @media (max-width: 576px) {
    grid-template-columns: repeat(2, 1fr);
    width: 100%;
    margin: 0.5rem auto;
    padding: 0.5rem 1rem;
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

const FavoritesHeading = styled.h2`
  text-align: left;
  padding-left: 2rem;
  font-size: 26px;

  @media (max-width: 576px) {
    font-size: 18px;
    padding-left: 1.5rem;
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
