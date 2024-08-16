import { useDispatch } from "react-redux";
import { closeModal } from "../slice/slice";
import { createPortal } from "react-dom";
import styled from "styled-components";

const Modal = () => {
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(closeModal());
  };

  const logoutHandler = () => {
    localStorage.removeItem("auth");
    document.location.pathname = '/login'
    handleClose();
  };
  return createPortal(
    <StyledModalContainer onClick={handleClose}>
      <WrapperContent onClick={(e) => e.stopPropagation()}>
        <h2>Точно хотите выйти ?</h2>
        <StyledContainerBtn>
          <StyledButton onClick={logoutHandler}>Да</StyledButton>
          <StyledButton onClick={handleClose}>Нет</StyledButton>
        </StyledContainerBtn>
      </WrapperContent>
    </StyledModalContainer>,
    document.getElementById("modal")
  );
};

export default Modal;

const WrapperContent = styled.div`
  width: 300px;
  height: 300px;
  padding: 50px;
  background-color: #4777f0;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  border-radius: 14px;
  & > h2 {
    text-align: center;
  }
`;

const StyledModalContainer = styled.div`
  width: 100%;
  height: 100vh;
  background: #6666666f;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  margin-top: 0;
  margin-left: 0;
`;

const StyledButton = styled.button`
  width: 120px;
  height: 40px;
  border-radius: 12px;
  border: none;
  background-color: #53a9d7;
  color: white;
  font-weight: 700;
  font-size: 18px;
  border: 2px solid white;
`;

const StyledContainerBtn = styled.div`
  display: flex;
  justify-content: space-evenly;
`;
