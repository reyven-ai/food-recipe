import React, { useEffect, useState } from "react";
import { fetchMealsByName } from "../../api/apis";
import classes from "./FoodsHeader.module.css";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Search from "../../assests/search.png";

const FoodHeaders = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleSearch = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`
      );
      const data = await response.json();

      // Navigate to the search results page with the search term as a URL parameter
      navigate(`/search/${encodeURIComponent(searchTerm)}`);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <>
      <header
        className={`${classes.header} 
      }`}
      >
        <nav className={classes.navLink}>
          <div className={classes.logo}>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
              end
            >
              Food<span>Mood</span>
            </NavLink>
          </div>
          <ul className={classes.list}>
            <li>
              <NavLink
                to="/cousine"
                className={({ isActive }) =>
                  isActive ? classes.active : undefined
                }
                end
              >
                Cuisine
              </NavLink>
            </li>
            {/* <li>
              <NavLink
                to="/tv-show"
                className={({ isActive }) =>
                  isActive ? classes.active : undefined
                }
              >
                TV Shows
              </NavLink>
            </li> */}
            {/* {/* <li>
            <NavLink
              to="/series"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              Series
            </NavLink>
          </li> */}
            {/* <li>
              <NavLink
                to="/newPopular"
                className={({ isActive }) =>
                  isActive ? classes.active : undefined
                }
              >
                New & Popular
              </NavLink>
            </li> */}
            <li>
              <NavLink
                to="/favorites"
                className={({ isActive }) =>
                  isActive ? classes.active : undefined
                }
              >
                Favorites
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/area"
                className={({ isActive }) =>
                  isActive ? classes.active : undefined
                }
              >
                Browse by Country
              </NavLink>
            </li>
          </ul>
        </nav>
        <div className={classes.handle}>
          <form onSubmit={handleSearch}>
            <button
              onClick={handleSearch}
              className={classes.search}
              type="submit"
            >
              <img src={Search} alt="Search" />
            </button>
            <input
              type="text"
              placeholder="Enter meal name"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </form>
        </div>
      </header>
      {/* ); */}
    </>
  );
};

export default FoodHeaders;
