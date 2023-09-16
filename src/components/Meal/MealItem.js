import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToFavorites, removeFromFavorites } from "../../store/actions/meal";
import styled from "styled-components"; // Import styled-components

const MealContainer = styled.div`
  position: relative;
  &:hover .overview {
    visibility: visible;
    opacity: 1;
  }
`;

const MealImage = styled.img`
  width: 100%;
  border-radius: 10px;
  object-fit: cover;
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.1);
`;

const MealName = styled.p`
  margin-top: 10px;
  overflow: scroll;
  // display: flex;
  height: 21px;

  @media (max-width: 576px) {
    margin-top: 5px;
  }
`;

const MealLink = styled(Link)`
  text-decoration: none;
  font-weight: 600;
  margin-top: 5px;
  color: black;

  @media (max-width: 576px) {
    font-size: 12px;
    padding-top: 0;
  }
`;

const Overview = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  top: 0;
  visibility: hidden;
  opacity: 0;
  background-color: rgba(0, 0, 0, 0.6);
  width: 100%;
  height: 15%;
  transition: opacity 0.8s ease-in-out;
  border-radius: 4px;

  @media (max-width: 576px) {
    // top: 120px;
    background-color: rgba(0, 0, 0, 0.6);
    visibility: visible;
    height: 15%;
  }
`;

const Detail = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem 1rem;
  gap: 50px;

  @media (max-width: 576px) {
    padding: 0.2rem 0.5rem;
    font-size: 16px;
    gap: 10px;
  }
`;

const View = styled.div`
  display: flex;
`;

const ViewLink = styled(Link)`
  border: 1px solid white;
  padding: 0.2rem 1rem;
  color: white;
  border-radius: 24px;
  text-decoration: none;

  @media (max-width: 576px) {
    padding: 0rem 0.6rem;
    font-size: 12px;
  }
`;

const Button = styled.button`
  background-color: transparent;
  color: white;
  padding: 0 0.5rem;
  font-size: 26px;
  border-radius: 50%;
  border: 1px solid white;
  text-align: left;
  align-item: center;

  @media (max-width: 576px) {
    border: 1px solid white;
    align-item: center;
    font-size: 18px;
    padding: 0 0.4rem;
    // display: flex;
  }
`;

const HeartButton = styled(Button)`
  background-color: transparent;
  color: white;
  padding: 0rem 0.3rem;
  font-size: 20px;
  border-radius: 50%;
  // border: 1px solid white;
  margin-left: 10px;
  text-align: left;

  @media (max-width: 576px) {
    border: 1px solid white;
    align-item: center;
    font-size: 14px;
    // display: flex;
  }
`;

const MealItem = ({ meal }) => {
  const { idMeal, strMeal, strMealThumb, strCategory } = meal;
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites);

  const isMealInFavorites = favorites.some(
    (favMeal) => favMeal.idMeal === meal.idMeal
  );

  const handleToggleFavorites = () => {
    if (isMealInFavorites) {
      dispatch(removeFromFavorites(meal.idMeal));
    } else {
      dispatch(addToFavorites(meal));
    }
  };

  return (
    <MealContainer key={meal.idMeal}>
      <MealLink>
        <MealImage src={strMealThumb} alt={strMeal} />
        <MealName>{strMeal}</MealName>
      </MealLink>
      <Overview className="overview">
        <Detail>
          <div>
            <Button onClick={handleToggleFavorites}>
              {isMealInFavorites ? "✓" : "+"}
            </Button>
            <HeartButton onClick={handleToggleFavorites}>♡</HeartButton>
          </div>
          <View>
            <ViewLink to={`/view/${idMeal}`}>View</ViewLink>
          </View>
        </Detail>
      </Overview>
    </MealContainer>
  );
};

export default MealItem;
