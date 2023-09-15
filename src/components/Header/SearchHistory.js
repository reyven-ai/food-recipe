import React from "react";
import styled from "styled-components";
import History from "../../assests/history.png";

const SearchHistoryDropdown = styled.div`
  position: absolute;
  top: 7%;
  right: 170px;
  width: 350px;
  border-radius: 10px;
  background-color: rgba(0, 0, 0, 0.8);
  border: 1px solid #ccc;
  max-height: 265px;
  overflow-y: auto;
  display: ${({ show }) => (show ? "block" : "none")};

  @media (max-width: 576px) {
    width: 100%;
    top: 6.7%;
    right: 0;
    height: 200vh;
    display: none;
  }
`;

const List = styled.ul`
  padding: 0.5rem 0.5rem;

  @media (max-width: 576px) {
    padding: 0.2rem 0rem;
  }
`;

const HistoryHandler = styled.div`
  display: flex;
  align-item: center;
  gap: 15px;
`;

const Item = styled.li`
  font-weight: 600;
  padding: 0.2rem 0rem;
  display: flex;
  justify-content: space-between;
  align-item: center;

  @media (max-width: 576px) {
    font-size: 14px;
    padding: 0;
  }
`;

const HistoryImg = styled.img`
  width: 17px;
  height: 17px;
  text-align: center;
  margin-top: 3px;

  @media (max-width: 576px) {
    // padding: 0.2rem 2.5rem;
  }
`;

const HistoryButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

const SearchHistory = ({ show, searchHistory, onRemoveItem, onItemClick }) => {
  const handleRemoveClick = (index, e) => {
    e.stopPropagation(); // Prevent item click when removing
    onRemoveItem(index);
  };

  return (
    <SearchHistoryDropdown show={show}>
      <List>
        {searchHistory.map((item, index) => (
          <Item key={index} onClick={() => onItemClick(index)}>
            <HistoryHandler>
              <HistoryImg src={History}></HistoryImg>
              {item}
            </HistoryHandler>
            <HistoryButton onClick={(e) => handleRemoveClick(index, e)}>
              Remove
            </HistoryButton>
          </Item>
        ))}
      </List>
    </SearchHistoryDropdown>
  );
};

export default SearchHistory;
