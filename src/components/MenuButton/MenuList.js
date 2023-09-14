import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import Close from "../../assests/close.png";
const MenuListContainer = styled.ul`
  list-style: none;
  padding: 0;
  text-align: left;
  margin-top: 2rem;
`;

const MenuItem = styled.li`
  font-size: 16px;
  margin-bottom: 20px;
  cursor: pointer;
  transition: color 0.3s;
  color: black;

  &:hover {
    color: #ff6600; /* Change the color on hover */
  }
`;

const MenuLink = styled(NavLink)`
  font-size: 16px;
  color: black;
  font-weight: 700;
  text-decoration: none;

  &:hover {
    color: #ff6600; /* Change the color on hover */
  }

  &.active {
    color: #00b14f;
    font-weight: 600;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 7px;
  background: transparent;
  border: none;
  font-size: 16px;
  cursor: pointer;
  margin-bottom: 3rem;
`;

const CloseImg = styled.img`
  width: 24px;
  height: 24px;
`;

const MenuList = ({ closeModal }) => {
  const handleLinkClick = () => {
    closeModal();
  };

  return (
    <>
      <CloseButton onClick={closeModal}>
        <CloseImg src={Close}></CloseImg>
      </CloseButton>
      <MenuListContainer>
        <MenuItem>
          <MenuLink to="/cuisine" onClick={handleLinkClick}>
            Cuisine
          </MenuLink>
        </MenuItem>
        <MenuItem>
          <MenuLink to="/favorites" onClick={handleLinkClick}>
            Favorites
          </MenuLink>
        </MenuItem>
        <MenuItem>
          <MenuLink to="/area" onClick={handleLinkClick}>
            Browse by Country
          </MenuLink>
        </MenuItem>
      </MenuListContainer>
    </>
  );
};

export default MenuList;
