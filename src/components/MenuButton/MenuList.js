import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faHeart,
  faBowlFood,
  faGlobe,
} from "@fortawesome/free-solid-svg-icons";

const NavContainer = styled.div`
display: none;
box-shadow: none;

@media (max-width: 820px) {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: white;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 10px;
  box-shadow: 0px -5px 10px rgba(0, 0, 0, 0.1);
  z-index: 100;
  height: 4rem;
`;

const MenuItem = styled(NavLink)`
@media (max-width: 576px) {
  flex: 1;
  text-align: center;
  text-decoration: none;
  color: black;
  padding: 5px;
  transition: background-color 0.3s;
  font-size: 12px;
  flex-direction: column;
  display: flex;

  &.active {
    color: #00b14f;
  }

  &:hover {
    background-color: #eee;
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

function MenuList() {
  return (
    <>
      <NavContainer>
        <MenuItem to="/">
          <FontAwesomeIcon
            icon={faHome}
            style={{
              fontSize: "15px",
            }}
          />
          Home
        </MenuItem>
        <MenuItem to="/cuisine">
          <FontAwesomeIcon
            icon={faBowlFood}
            style={{
              fontSize: "15px",
            }}
          />
          Cuisine
        </MenuItem>
        <MenuItem to="/favorites">
          <FontAwesomeIcon
            icon={faHeart}
            style={{
              fontSize: "15px",
            }}
          />
          Favorites
        </MenuItem>
        <MenuItem to="/area">
          <FontAwesomeIcon
            icon={faGlobe}
            style={{
              fontSize: "15px",
            }}
          />
          Area
        </MenuItem>
      </NavContainer>
    </>
  );
}

export default MenuList;
