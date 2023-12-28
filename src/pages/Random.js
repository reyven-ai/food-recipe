import React, { useState } from "react";
import { useQuery } from "react-query";
import { fetchRandomMeal } from "../api/apis";
import { Link } from "react-router-dom";
import Close from "../assests/close.png";

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

  return (
    <div className="text-center m-4 md:m-8 pb-16">
      <h2 className="text-2xl md:text-3xl text-left">
        Here's the <span className="text-green-500">random</span> meal for you!
      </h2>
      {randomMeal ? (
        <div>
          <h2 className="text-center text-2xl md:text-3xl font-medium mb-[0.5rem]">
            {randomMeal.strMeal}
          </h2>
          <div className="w-[35%] h-auto  shadow-md m-[auto]">
            <div className="text-left pt-0 absolute m-3">
              <Link to="/">
                <img className="w-[35px] h-[35px]" src={Close} alt=""></img>
              </Link>
            </div>
            <img
              className="rounded-md"
              src={randomMeal.strMealThumb}
              alt={randomMeal.strMeal}
            />
          </div>
          <div className="text-center p-2 w-[35%] m-[auto] mt-[0.5rem] gap-x-[10px]">
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
              {activeTab === "Country" && <p>{randomMeal.strArea}</p>}
            </div>
            <div className="pt-2">
              <button
                onClick={() => handleTabChange("Ingredients")}
                className={`border border-green-500 w-[70%]  px-4 py-2 rounded-[24px] font-semibold ${
                  activeTab === "Country"
                    ? "bg-green-500 text-white"
                    : "text-black"
                }`}
              >
                Ingredients
              </button>
              {activeTab === "Ingredients" && (
                <ul className="mt-2">
                  {Object.keys(randomMeal)
                    .filter(
                      (key) =>
                        key.startsWith("strIngredient") && randomMeal[key]
                    )
                    .map((key) => (
                      <li key={key}>{randomMeal[key]}</li>
                    ))}
                </ul>
              )}
            </div>
            <div className="pt-2">
              <button
                onClick={() => handleTabChange("Instructions")}
                className={`border border-green-500 w-[70%]  px-4 py-2 rounded-[24px] font-semibold ${
                  activeTab === "Country"
                    ? "bg-green-500 text-white"
                    : "text-black"
                }`}
              >
                Instructions
              </button>
              {activeTab === "Instructions" && (
                <p className="w-full mt-2">{randomMeal.strInstructions}</p>
              )}
            </div>
          </div>
        </div>
      ) : (
        <p>No random meal available</p>
      )}
    </div>
  );
}

export default RandomMeal;
