import React, { useEffect } from "react";
import MealsByArea from "../components/Browse/Area";
import { useLocalStorage } from "../useHooks/useLocalStorage";

const BrowseByArea = () => {
  const [selectedArea, setSelectedArea] = useLocalStorage("selectedArea", "");
  const [selectedLetter, setSelectedLetter] = useLocalStorage(
    "selectedLetter",
    ""
  );

  const handleAreaChange = (event) => {
    setSelectedArea(event.target.value);
  };

  const handleLetterChange = (event) => {
    setSelectedLetter(event.target.value);
  };

  useEffect(() => {
    setSelectedArea(selectedArea);
  }, [selectedArea, setSelectedArea]);

  useEffect(() => {
    setSelectedLetter(selectedLetter);
  }, [selectedLetter, setSelectedLetter]);

  return (
    <div className="mt-8 md:mt-8">
      <h1 className="text-2xl md:text-3xl text-left mx-[7%] w-[100%] m-[auto]">
        Browse By <span>Country</span>
      </h1>
      <div className="flex flex-col md:flex-row md:items-center justify-end mb-8 md:mb-0 w-[80%] mx-[auto] mt-[5rem]">
        <div className="flex gap-4 md:gap-8">
          <select
            value={selectedArea}
            onChange={handleAreaChange}
            className="p-3 md:p-3 border border-gray-300 rounded-md w-[200px]"
          >
            <option value="">Select an area</option>
            <option value="Japanese">Japan</option>
            <option value="Canadian">Canada</option>
            <option value="American">America</option>
            <option value="French">France</option>
            <option value="British">united kingdom</option>
            <option value="Jamaican">Jamaica</option>
            <option value="Chinese">China</option>
            <option value="Dutch">Netherlands</option>
            <option value="Egyptian">Egypt</option>{" "}
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
          </select>

          <select
            value={selectedLetter}
            onChange={handleLetterChange}
            className="p-2 md:p-3 border border-gray-300 rounded-md w-[200px]"
          >
            <option value="">Sort by Letter</option>
            <option value="A-Z">A-Z</option>
            <option value="Z-A">Z-A</option>
          </select>
        </div>
      </div>

      {selectedArea && <MealsByArea selectedArea={selectedArea} />}
    </div>
  );
};

export default BrowseByArea;
