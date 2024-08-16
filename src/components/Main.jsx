import React from "react";
import styled from "styled-components";
import TrelloTodo from "./TrelloTodo";
import { useSelector } from "react-redux";
import Modal from "./Modal";

export const Main = () => {
  const { isOpenCart } = useSelector((store) => store.trello);

  return (
    <StyledDiv>
      <TrelloTodo />
      {isOpenCart && <Modal />}
    </StyledDiv>
  );
};

const StyledDiv = styled.div`
  background-image: url("https://i.artfile.ru/2048x1360_924698_[www.ArtFile.ru].jpg");
  width: 100%;
  height: 100vh;
  background-size: cover;
  background-position: center;
  overflow-x: scroll;
  display: flex;
  gap: 30px;
  flex-wrap: nowrap;
`;
