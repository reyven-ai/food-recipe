import styled from "styled-components";
import React, { useState } from "react";
import Modal from "../UI/Modal";
import MenuList from "./MenuList";

const Menu = styled.button`
  display: none; /* Initially hide the menu button */
  background-color: transparent;
  color: black;
  padding: 0px 0px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 30px;
  // margin-right: 3rem;
  align-items: flex-end;
  text-align: right;
  position: relative;
  margin-bottom: 4px;
  @media (max-width: 700px) {
    /* Show the menu button when screen width is 700px or less */
    display: block;
  }
`;

const MenuButton = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Function to open the modal
  const openModal = () => {
    setIsModalOpen(true);
  };

  // Function to close the modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Menu
        onClick={openModal}
        // className={`${classes.menuButton} ${isMenuOpen ? "active" : ""}`}
        aria-label="Menu"
      >
        ☰
      </Menu>
      {isModalOpen && (
        <Modal closeModal={closeModal}>
          <MenuList closeModal={closeModal} /> {/* Pass closeModal function */}
        </Modal>
      )}
    </>
  );
};

export default MenuButton;
