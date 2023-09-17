import React, { useState, useEffect } from "react";
import { useQuery } from "react-query";
import { fetchMealCategories } from "../api/apis";
import { fetchMealsByCategory } from "../api/apis";
import MealList from "../components/Meal/MealList";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Heading = styled.h2`
  font-weight: 700;
  font-size: 34px;

  @media (max-width: 576px) {
    font-size: 25px;
    margin-bottom: 15px;
    width: 100%;
  }
`;

const CousineContainer = styled.div`
  margin-top: 3rem;

  @media screen and (max-width: 768px) {
    margin-top: 1rem;
  }
`;

const Description = styled.p`
  width: 500px;
  margin: auto;
  font-weight: 500;

  @media (max-width: 576px) {
    width: 100%;
    font-size: 15px;
    padding: 0 0.5rem;
  }
`;

const CategoryList = styled.ul`
  display: flex;
  gap: 20px;
  padding-top: 2.4rem;
  width: 59%;
  overflow: scroll;
  height: 100px;
  margin: auto;
  list-style: none;
  // box-shadow: 0 1px 5px #00b14f;

  // padding: 0;

  @media (max-width: 576px) {
    width: 80%; /* Make the category list full-width on smaller screens */
    padding-top: 1.2rem;
    height: 70px;
    gap: 13px;
  }
`;

const CategoryItem = styled.li`
  a {
    text-decoration: none;
    padding: 0.5rem 1rem;
    margin: 0;
    color: black;
    font-weight: 600;
    border: 1px solid #00b14f;
    border-radius: 24px;
    font-size: 15px;
    text-decoration: none;

    @media (max-width: 576px) {
      padding: 0.3rem 0.8rem;
      font-size: 13px;
      border-radius: 18px;
    }
  }
  &.active {
    a {
      background-color: #00b14f;
      border: 1px solid #00b14f;
      border-radius: 24px;
      padding: 0.5rem 1rem;
      color: white;
      font-size: 15px;
      font-weight: 600;

      @media (max-width: 576px) {
        padding: 0.3rem 0.7rem;
        font-size: 13px;
        border-radius: 18px;
      }
    }
  }
`;

function Category() {
  const {
    data: categories,
    isLoading,
    error,
  } = useQuery("mealCategories", fetchMealCategories);

  const [meals, setMeals] = useState([]);
  const { category: categoryParam } = useParams();
  const selectedCategory =
    categoryParam ??
    ((categories &&
      categories.length &&
      categories[0].strCategory.toLowerCase()) ||
      null);

  useEffect(() => {
    getCategoryMeals(selectedCategory);
  }, [categoryParam, categories]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  async function getCategoryMeals(category) {
    try {
      if (category === null) {
        return;
      }
      const categoryMeals = await fetchMealsByCategory(category);
      setMeals(categoryMeals);
    } catch (error) {
      console.error("Error fetching meals by category:", error);
    }
  }

  return (
    <CousineContainer>
      <Heading>
        Discover Delicious <span>Cuisine</span>
      </Heading>
      <Description>
        Discover a world of flavors with our wide range of meal categories.
        Click on a category to explore mouthwatering dishes.
      </Description>
      <CategoryList>
        {categories.map((category) => (
          <CategoryItem
            key={category.strCategory}
            className={
              selectedCategory &&
              category.strCategory.toLowerCase() === selectedCategory
                ? "active"
                : ""
            }
          >
            <Link to={`/cuisine/${category.strCategory.toLowerCase()}`}>
              {category.strCategory}
            </Link>
          </CategoryItem>
        ))}
      </CategoryList>

      {meals && <MealList meals={meals} />}
    </CousineContainer>
  );
}

export default Category;
