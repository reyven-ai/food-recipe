import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchMealById } from "../../api/apis";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";

const DetailContainer = styled.div`
  display: block;
  padding: 0.2rem 1.5rem;
  gap: 30px;
  justify-content: center;
  align-items: center;
  padding-bottom: 5rem;
`;

const ImageStyled = styled.img`
  max-width: 100%;
  border: 1px solid #ccc;
  border-radius: 10px;
  object-fit: cover;
  height: auto;
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

const MoreContainer = styled.div`
  text-align: left;
  width: 100%;
  height: 100%;
  padding: 0 1rem;
  box-sizing: border-box;
  overflow-y: auto;
`;

const HeadingStyled = styled.h2`
  text-align: center;
  font-size: 18px;
`;

const CloseContainer = styled.div`
  text-align: left;
  padding-top: 10px;
`;

function MealDetailPage() {
  const { idMeal } = useParams();
  const [mealDetail, setMealDetail] = useState(null);
  const [activeTab, setActiveTab] = useState("");

  useEffect(() => {
    async function fetchMeal() {
      try {
        const data = await fetchMealById(idMeal);
        console.log("API Response:", data);

        if (data) {
          setMealDetail(data);
        } else {
          console.error("Meal details not found.");
        }
      } catch (error) {
        console.error("Error fetching meal details:", error);
      }
    }

    fetchMeal();
  }, [idMeal]);

  const handleTabChange = (tabName) => {
    setActiveTab(tabName);
  };

  if (!mealDetail) {
    return <div>Loading...</div>;
  }

  return (
    <DetailContainer>
      <CloseContainer>
        <Link to="/cuisine">
          <FontAwesomeIcon
            icon={faClose}
            style={{
              fontSize: "18px",
              color: "black",
            }}
          />
        </Link>
      </CloseContainer>
      <div>
        <HeadingStyled>{mealDetail.strMeal}</HeadingStyled>
        <ImageStyled src={mealDetail.strMealThumb} alt={mealDetail.strMeal} />
      </div>
      <MoreContainer>
        <div>
          <ButtonStyled
            onClick={() => handleTabChange("Country")}
            active={activeTab === "Country" ? "activeTab" : ""}
          >
            Area
          </ButtonStyled>
          {activeTab === "Country" && <p>{mealDetail.strArea}</p>}
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
              {Object.keys(mealDetail)
                .filter(
                  (key) => key.startsWith("strIngredient") && mealDetail[key]
                )
                .map((key) => (
                  <li key={key}>{mealDetail[key]}</li>
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
            <Content>{mealDetail.strInstructions}</Content>
          )}
        </div>
        {/* </ButtonContainer> */}
      </MoreContainer>
    </DetailContainer>
  );
}

export default MealDetailPage;
