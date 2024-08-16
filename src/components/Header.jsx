import React from "react";
import { BiChevronDown, BiSolidBellRing, BiSolidUserCircle } from "react-icons/bi";
import { BsFillGrid3X3GapFill, BsFillKanbanFill, BsFillQuestionCircleFill } from "react-icons/bs";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { openModal } from "../slice/slice";

export const Header = () => {
  const dispatch=useDispatch()


  const openModalHandler = () => {
    dispatch(openModal());
  };
  return (
    <StyledDiv>
      <div className="first">
        <BsFillGrid3X3GapFill size={50} />
        <BsFillKanbanFill size={30} />
        <h1>Trello</h1>

        <p>Рабочие пространства</p>
        <BiChevronDown color="white" />
        <p>Недавние</p>
        <BiChevronDown color="white" />
        <p>В избранном</p>
        <BiChevronDown color="white"/>
       
        <p>Шаблоны</p>
        <BiChevronDown color="white"/>
        <p>Создать</p>
      </div>
      <div className="second">
        <input type="text" placeholder="🔍 Найти" />
        <BiSolidBellRing  size={20}  color="white"/>
        <BsFillQuestionCircleFill  size={20} color="white"/>
        <BiSolidUserCircle onClick={openModalHandler}
         style={{ width: "30px", height: "30px", cursor: "pointer" }}
         size={20} color="white"/>
      </div>

    </StyledDiv>
  );
};

const StyledDiv = styled.div`
  height: 50px;
  background-color: black;
  align-items: center;
  display: flex;
  color: white;
  gap: 30px;
  justify-content: space-between;
  

  .first {
    gap: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    p {
      color: white;
    }
  }
  .second {
    display: flex;
    justify-content: center;
    gap: 20px;
  }
`;
