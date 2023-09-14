import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useNavigate, useParams } from "react-router-dom";
import Search from "../../assests/search.png";
import SearchHistory from "./SearchHistory";

import styled from "styled-components";
import MenuButton from "../MenuButton/MenuButton";

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 1% 10%;
  align-items: center;
  height: 5rem;
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.1);

  @media (max-width: 576px) {
    padding: 1% 4%;
`;

const Nav = styled.nav`
  display: flex;

  // Add other styles here
`;

const List = styled.ul`
  display: flex;
  gap: 1rem;
  font-weight: 600;
  font-size: 16px;
  margin-left: 3rem;

  @media (max-width: 576px) {
    display: ${({ isMenuOpen }) => (isMenuOpen ? "flex" : "none")};
    gap: 1rem;
    font-weight: 600;
    font-size: 16px;
    margin-left: 3rem;
  }
`;

const Logo = styled.div`
  a {
    font-size: 27px;
    font-weight: 700;
    text-decoration: none;
    color: black;

    @media (max-width: 576px) {
      font-size: 20px;
      height: auto;
  }
`;

const Handle = styled.div`
  display: flex;
  align-items: center;
  margin-left: 1rem;
  padding: 0;
  justify-content: around-between;
  gap: 5px;
`;

const SearchImage = styled.img`
  width: 24px;
  height: 24px;
  text-align: center;
  margin-top: 3px;
  transform: rotate(5deg);

  @media (max-width: 576px) {
    width: 18px;
    height: auto;
  }
`;

const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: black;
  font-weight: 700;
  // Your default styles here

  &:hover {
    // Styles for hover
  }

  &.active {
    color: #00b14f;
    font-weight: 600;
  }
`;

const Form = styled.form`
  display: flex;
  align-items: center;
  margin: 0;
  padding: 0;

  @media (max-width: 700px) {
    /* Show the menu button when screen width is 700px or less */
    // display: none;
  }
`;

const SearchButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.4rem 0.4rem 0.4rem 0.6rem;
  position: relative;
  left: 40px;
  // Add other styles here
`;

const Input = styled.input`
  height: 45px;
  width: 350px;
  border: 1px solid #ccc;
  background-color: white;
  padding: 0.5rem 2.5rem;
  transition: width 0.3s ease-in-out;
  color: black;
  font-size: 16px;
  border-radius: 24px;
  // Add other styles here

  @media (max-width: 576px) {
    width: 82%;
    height: 35px;
    border-radius: 18px;
    font-size: 13px;
    padding-right: 1.5rem;
    // display: none;
  }
  &:focus {
    width: 350px;
    outline: #00b14f;
    border: 1px solid #00b14f;
    box-shadow: 0 1px 5px #00b14f;

    @media (max-width: 576px) {
      width: 82%;
      height: 32px;
  }
`;

const FoodHeaders = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();
  const { query } = useParams();
  const [searchHistory, setSearchHistory] = useState([]);
  const [showSearchHistory, setShowSearchHistory] = useState(false);

  useEffect(() => {
    if (query) {
      setSearchTerm(decodeURIComponent(query));
    }
  }, [query]);

  useEffect(() => {
    const storedHistory = localStorage.getItem("searchHistory");
    if (storedHistory) {
      setSearchHistory(JSON.parse(storedHistory));
    }
  }, []);

  // Function to handle search and update search history
  const handleSearch = async (e) => {
    e.preventDefault();

    if (searchTerm.trim() === "") {
      return;
    }

    try {
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`
      );
      const data = await response.json();

      navigate(`/search/${encodeURIComponent(searchTerm)}`);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleRemoveItem = (index) => {
    const updatedHistory = [...searchHistory];
    updatedHistory.splice(index, 1);
    setSearchHistory(updatedHistory);
    localStorage.setItem("searchHistory", JSON.stringify(updatedHistory));
  };

  return (
    <HeaderContainer>
      <Nav>
        <Logo>
          <StyledNavLink to="/" end>
            Food<span>Mood</span>
          </StyledNavLink>
        </Logo>
        <List>
          <li>
            <StyledNavLink to="/cuisine">Cuisine</StyledNavLink>
          </li>
          <li>
            <StyledNavLink to="/favorites">Favorites</StyledNavLink>
          </li>
          <li>
            <StyledNavLink to="/area">Browse by Country</StyledNavLink>
          </li>
        </List>
      </Nav>
      <Handle>
        <Form onSubmit={handleSearch}>
          <SearchButton onClick={handleSearch} type="submit">
            <SearchImage src={Search} alt="Search" />
          </SearchButton>
          <Input
            type="text"
            placeholder="Enter meal name"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onFocus={() => setShowSearchHistory(true)}
            onBlur={() => setShowSearchHistory(false)}
          />
          <SearchHistory
            show={showSearchHistory}
            searchHistory={searchHistory}
            onRemoveItem={handleRemoveItem}
          />
        </Form>
        <MenuButton />
      </Handle>
    </HeaderContainer>
  );
};

export default FoodHeaders;
