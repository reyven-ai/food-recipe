import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import "font-awesome/css/font-awesome.min.css";

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
  }
`;

const MenuItem = styled(NavLink)`
  @media (max-width: 576px) {
    flex: 1;
    text-align: center;
    text-decoration: none;
    color: rgba(0, 0, 0, 0.6);
    padding: 5px;
    transition: background-color 0.3s;
    font-size: 12px;
    flex-direction: column;
    display: flex;
  }
  &.active {
    color: #00b14f;
  }

  &:hover {
    background-color: #eee;
  }
`;

const Button = styled.button`
  background: transparent;
  border: 1px solid;
  padding: 0.3rem 0.5rem;
  border: 2px solid #00b14f;
  border-radius: 50%;
  margin-bottom: 8px;
  margin-left: 0.5rem;
  margin-right: 0.5rem;
`;

function MenuList() {
  return (
    <>
      <NavContainer>
        <MenuItem to="/">
          <FontAwesomeIcon
            icon={faHome}
            style={{
              fontSize: "18px",
            }}
          />
          Home
        </MenuItem>
        <MenuItem to="/cuisine">
          <FontAwesomeIcon
            // icon={faBowlFood}
            icon={faBowlFood}
            style={{
              fontSize: "18px",
            }}
          />
          Cuisine
        </MenuItem>
        {/* <Button>
          <FontAwesomeIcon
            icon={faArrowRightToBracket}
            style={{
              fontSize: "18px",
              color: "black",
              // padding: "0.5rem, 1rem",
              // backgroundColor: "none",
            }}
          /> */}
        <MenuItem to="/favorites">
          <FontAwesomeIcon
            icon={faHeart}
            style={{
              fontSize: "18px",
            }}
          />
          Favorites
        </MenuItem>
        <MenuItem to="/area">
          <FontAwesomeIcon
            icon={faGlobe}
            style={{
              fontSize: "18px",
            }}
          />
          Area
        </MenuItem>
      </NavContainer>
    </>
  );
}

export default MenuList;
