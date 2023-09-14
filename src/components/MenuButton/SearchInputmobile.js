// import React, { useState, useEffect } from "react";
// import styled from "styled-components";
// import { useNavigate, useParams } from "react-router-dom";
// import SearchHistory from "../Header/SearchHistory";
// import SearchResults from "../../pages/SearchResult";

// const Form = styled.form`
//   display: flex;
//   align-items: center;
//   margin: 0;
//   padding: 0;

//   @media (max-width: 700px) {
//     /* Show the menu button when screen width is 700px or less */
//   }
// `;

// const SearchButton = styled.button`
//   color: black;
//   background-color: transparent;
//   border: none;
//   // Add other styles here
// `;

// const Input = styled.input`
//   height: 45px;
//   width: 350px;
//   border: 1px solid #ccc;
//   background-color: white;
//   padding: 0.5rem 2.5rem;
//   transition: width 0.3s ease-in-out;
//   color: black;
//   font-size: 16px;
//   border-radius: 24px;
//   // Add other styles here

//   @media (max-width: 576px) {
//     width: 100%;
//     height: 35px;
//     border-radius: 18px;
//     font-size: 13px;
//     padding-right: 1.5rem;
//   }
//   &:focus {
//     width: 350px;
//     outline: #00b14f;
//     border: 1px solid #00b14f;
//     box-shadow: 0 1px 5px #00b14f;

//     @media (max-width: 576px) {
//       width: 82%;
//       height: 32px;
//   }
// `;

// const MobileInput = ({ closeModal }) => {
//   const [searchTerm, setSearchTerm] = useState("");
//   const [searchResults, setSearchResults] = useState(null);
//   const [searchPerformed, setSearchPerformed] = useState(false); // Track if search has been performed
//   const navigate = useNavigate();
//   const { query } = useParams();
//   const [searchHistory, setSearchHistory] = useState([]);
//   const [showSearchHistory, setShowSearchHistory] = useState(false);

//   useEffect(() => {
//     if (query) {
//       setSearchTerm(decodeURIComponent(query));
//     }
//   }, [query]);

//   useEffect(() => {
//     const storedHistory = localStorage.getItem("searchHistory");
//     if (storedHistory) {
//       setSearchHistory(JSON.parse(storedHistory));
//     }
//   }, []);

//   // Function to handle search and update search history
//   const handleSearch = async (e) => {
//     e.preventDefault();

//     if (searchTerm.trim() === "") {
//       return;
//     }

//     try {
//       const response = await fetch(
//         `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`
//       );
//       const data = await response.json();

//       // Update search results in the state
//       setSearchResults(data);

//       // Mark that search has been performed
//       setSearchPerformed(true);

//       navigate(`/search/${encodeURIComponent(searchTerm)}`);
//     } catch (error) {
//       console.error("Error fetching data:", error);
//     }
//   };

//   const handleRemoveItem = (index) => {
//     const updatedHistory = [...searchHistory];
//     updatedHistory.splice(index, 1);
//     setSearchHistory(updatedHistory);
//     localStorage.setItem("searchHistory", JSON.stringify(updatedHistory));
//   };
//   const handleLinkClick = () => {
//     closeModal();
//   };

//   return (
//     <>
//       <Form onSubmit={handleSearch}>
//         <SearchButton onClick={handleLinkClick} type="submit">
//           Close
//         </SearchButton>
//         <Input
//           type="text"
//           placeholder="Enter meal name"
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//           onFocus={() => setShowSearchHistory(true)}
//           onBlur={() => setShowSearchHistory(false)}
//         />
//         <SearchHistory
//           show={showSearchHistory}
//           searchHistory={searchHistory}
//           onRemoveItem={handleRemoveItem}
//         />
//         <SearchButton onClick={handleSearch} type="submit">
//           Search
//         </SearchButton>
//       </Form>
//       {searchPerformed && <SearchResults searchResults={searchResults} />}
//     </>
//   );
// };

// export default MobileInput;
