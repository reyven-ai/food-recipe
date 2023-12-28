import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

export const useSearch = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();
  const { query } = useParams();

  useEffect(() => {
    if (query) {
      setSearchTerm(decodeURIComponent(query));
    }
  }, [query]);

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

  return {
    handleSearch,
    searchTerm,
    setSearchTerm,
  };
};
