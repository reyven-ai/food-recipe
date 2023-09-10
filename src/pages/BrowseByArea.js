import React, { useState } from "react";
import MealsByArea from "../components/Browse/Area";
import styled from "styled-components";

const StyledSelect = styled.select`
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 200px;
`;

const FlexContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-top: 2rem;
`;

const OptionsContainer = styled.div`
  display: flex;
  // flex-direction: column;
  gap: 30px;
  align-items: flex-start;
`;

function App() {
  const [selectedArea, setSelectedArea] = useState(""); // Initialize with an empty string
  const [selectedLetter, setSelectedLetter] = useState("");

  const handleAreaChange = (event) => {
    setSelectedArea(event.target.value);
  };

  const handleLetterChange = (event) => {
    setSelectedLetter(event.target.value);
  };

  return (
    <div>
      <FlexContainer>
        <h1>
          Browse By <span>Country</span>
        </h1>
        <OptionsContainer>
          <StyledSelect value={selectedArea} onChange={handleAreaChange}>
            <option value="">Select an area</option>
            <option value="Japanese">Japan</option>
            <option value="Canadian">Canada</option>
            <option value="American">America</option>
            <option value="French">France</option>
            <option value="British">united kingdom</option>
            <option value="Jamaican">Jamaica</option>
            <option value="Chinese">China</option>
            <option value="Dutch">Netherlands</option>
            <option value="Egyptian">Egypt</option>
            <option value="Greek">Greece</option>
            <option value="Indian">India</option>
            <option value="Irish">Iran</option>
            <option value="Italian">Italy</option>
            <option value="Japanese">Japan</option>
            <option value="Kenyan">Kenya</option>
            <option value="Malaysian">Malaysia</option>
            <option value="Mexican">Mexico</option>
            <option value="Maroccan">Morocco</option>
            <option value="Crotian">Crotia</option>
            <option value="Norwegian">Norway</option>
            <option value="Portuguese">Portugal</option>
            <option value="Russian">Russia</option>
            <option value="Argentinian">Argentina</option>
            <option value="Thai">Thailand</option>
            <option value="Vietnamese">Vietnam</option>
            <option value="Turkish">Turkey</option>
            <option value="Tunisian">Tunisia</option>
            <option value="Polish">Poland</option>
            <option value="Filipino">Philippines</option>
          </StyledSelect>

          <StyledSelect value={selectedLetter} onChange={handleLetterChange}>
            <option value="">Sort by Letter</option>
            <option value="A-Z">A-Z</option>
            <option value="Z-A">Z-A</option>
            {/* Add more options for sorting letters as needed */}
          </StyledSelect>
        </OptionsContainer>
      </FlexContainer>

      {selectedArea && <MealsByArea selectedArea={selectedArea} />}
    </div>
  );
}

export default App;
