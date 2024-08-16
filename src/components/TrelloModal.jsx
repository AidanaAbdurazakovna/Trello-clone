import { useDispatch } from "react-redux";
import styled from "styled-components";
import { deleteTodo } from "../slice/slice";
import { HiOutlineDotsHorizontal } from "react-icons/hi";


export const TrelloModal =({ id, handleIcon })=> {
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteTodo(id));
  };

  return (
    <StyledDiv>
      <StyledItem>
        <div>
          <h4>Действия</h4>
          <HiOutlineDotsHorizontal onClick={handleIcon} />
        </div>
        <section>
          <p>Добавить ...</p>
          <p onClick={() => handleDelete(id)}>Архив</p>
        </section>
      </StyledItem>
    </StyledDiv>
  );
};
 export default TrelloModal;

const StyledDiv = styled.div`
  position: relative;
  display: inline-block;
  section {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
`;
const StyledItem = styled.div`
  position: absolute;
  background-color: #79c9e2;
  width: 250px;
  height: 220px;
  border-radius: 12px;
  z-index: 1;
  display: flex;
  flex-direction: column;
  padding-left: 10px;
  gap: 20px;
  font-size: 14px;
  cursor: pointer;
  div {
    display: flex;
    gap: 40px;
    padding-top: 30px;
  }
`;
