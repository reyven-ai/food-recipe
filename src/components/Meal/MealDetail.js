import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { fetchMealById } from "../../api/apis";
import Close from "../../assests/close.png";

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
    <>
      <div className="block p-2 md:p-8 gap-30 justify-center items-center pb-20">
        <h2 className="text-center text-2xl md:text-3xl font-medium mb-[0.5rem]">
          {mealDetail.strMeal}
        </h2>
        <div>
          <div className="w-[35%] h-auto rounded-md shadow-md m-[auto]">
            <div className="text-left pt-0 absolute m-3">
              <Link to="/cuisine">
                <img className="w-[35px] h-[35px]" src={Close} alt=""></img>
              </Link>
            </div>
            <img
              className="rounded-md"
              src={mealDetail.strMealThumb}
              alt={mealDetail.strMeal}
            />
          </div>
        </div>
        <div className="text-center p-2 w-[35%] m-[auto] mt-[0.5rem]">
          <div>
            <button
              onClick={() => handleTabChange("Country")}
              className={`border border-green-500 w-[70%]  px-4 py-2 rounded-[24px] font-semibold ${
                activeTab === "Country"
                  ? "bg-green-500 text-white"
                  : "text-black"
              }`}
            >
              Area
            </button>
            {activeTab === "Country" && <p>{mealDetail.strArea}</p>}
          </div>
          <div className="mt-2">
            <button
              onClick={() => handleTabChange("Ingredients")}
              className={`border border-green-500 px-4 w-[70%] py-2 rounded-[24px] font-semibold ${
                activeTab === "Ingredients"
                  ? "bg-green-500 text-white"
                  : "text-black"
              }`}
            >
              Ingredients
            </button>
            {activeTab === "Ingredients" && (
              <ul className="list-disc pl-6 mt-2">
                {Object.keys(mealDetail)
                  .filter(
                    (key) => key.startsWith("strIngredient") && mealDetail[key]
                  )
                  .map((key) => (
                    <li key={key}>{mealDetail[key]}</li>
                  ))}
              </ul>
            )}
          </div>
          <div className="mt-2">
            <button
              onClick={() => handleTabChange("Instructions")}
              className={`border border-green-500 px-4 py-2 w-[70%] rounded-[24px] font-semibold ${
                activeTab === "Instructions"
                  ? "bg-green-500 text-white"
                  : "text-black"
              }`}
            >
              Instructions
            </button>
            {activeTab === "Instructions" && (
              <p className="mt-2">{mealDetail.strInstructions}</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default MealDetailPage;
