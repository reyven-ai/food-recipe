// import styled from "styled-components";
// import React, { useState } from "react";
// import Modals from "../UI/Modals";
// import Search from "../../assests/search.png";
// import SearchInputMobile from "./SearchInputmobile";

// const SearchImage = styled.img`
//   width: 24px;
//   height: 24px;
//   text-align: center;
//   margin-top: 3px;
//   transform: rotate(5deg);

//   @media (max-width: 576px) {
//     width: 20px;
//     height: auto;
//   }
// `;

// const MobileButton = styled.div``;

// const SearchButtonMobile = () => {

//   const [isModalOpen, setIsModalOpen] = useState(false);

//   const openModal = () => {
//     setIsModalOpen(true);
//   };

//   // Function to close the modal
//   const closeModal = () => {
//     setIsModalOpen(false);
//   };

//   return (
//     <>
//       <MobileButton
//         onClick={openModal}
//         // className={`${classes.menuButton} ${isMenuOpen ? "active" : ""}`}
//         aria-label="Menu"
//       >
//         <SearchImage src={Search}></SearchImage>
//       </MobileButton>
//       {isModalOpen && (
//         <Modals closeModal={closeModal}>
//           <SearchInputMobile closeModal={closeModal} />{" "}
//           {/* Pass closeModal function */}
//         </Modals>
//       )}
//     </>
//   );
// };

// export default SearchButtonMobile;
