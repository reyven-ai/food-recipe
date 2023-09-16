import styled from "styled-components";
import React, { useState } from "react";
import Modal from "../UI/Modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";

const Menu = styled.button`
  display: none; /* Initially hide the menu button */
  background-color: transparent;
  color: black;
  padding: 0px 0px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 30px;
  align-items: flex-end;
  text-align: right;
  position: relative;
  margin-bottom: 4px;
  @media (max-width: 700px) {
    display: block;
  }
`;

const CloseButton = styled.button`
  background-color: transparent;
  border: none;
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
      <Menu onClick={openModal} aria-label="Menu">
        ☰
      </Menu>
      {isModalOpen && (
        <Modal>
          <CloseButton onClick={closeModal}>
            <FontAwesomeIcon
              icon={faClose}
              style={{
                fontSize: "20px",
                color: "black",
              }}
            />
          </CloseButton>
          {/* <CloseImg onClick={closeModal} src={Close} alt="Close" /> */}
        </Modal>
      )}
    </>
  );
};

export default MenuButton;
