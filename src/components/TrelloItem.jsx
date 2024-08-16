import { useState } from "react";
import { useDispatch } from "react-redux";
import TrelloModal from "./TrelloModal";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import TrelloColumn from "./TrelloColumn";
import styled from "styled-components";
import Button from "./Button";
import { GoX } from "react-icons/go";
import { addCard } from "../slice/slice";


export default function TrelloItem({ id, title, newTrello }) {
  const [state, setState] = useState(false);
  const [trelloItem, setTrelloItem] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const dispatch = useDispatch();


  const handleIcon = () => {
    setOpenModal(!openModal);
  };


  const handleButton = (id) => {
    if (trelloItem.trim().length > 0) {
      const newItem = {
        cardTitle: trelloItem,
        id: Date.now(id),
      };
      dispatch(addCard({  newItem, id }));
      setTrelloItem("");
    }
  };

  return (
    <div>
      <StyledDiv>
        <div>
          <h2>{title}</h2>

          <div>
            {openModal ? <TrelloModal handleIcon={handleIcon} id={id} /> : null}
            <HiOutlineDotsHorizontal
              style={{ fontSize: "20px" }}
              onClick={handleIcon}
            />
          </div>
        </div>
        <section>
          {newTrello.map((item) => (
            <TrelloColumn key={item.id} {...item} />
          ))}
        </section>
        {state ? (
          <StyledForm onSubmit={(e) => e.preventDefault()}>
            <input
              type="text"
              value={trelloItem}
              onChange={(e) => setTrelloItem(e.target.value)}
              placeholder="Заголовок для карточки "
            />
            <div>
              <Button onClick={() => handleButton(id)}>
                Добавить карточку
              </Button>
              <StyledIcon fontSize="20" onClick={() => setState(false)} />
            </div>
          </StyledForm>
        ) : (
          <Button onClick={() => setState(!state)}>Добавить карточку</Button>
        )}
      </StyledDiv>
    </div>
  );
}

const StyledDiv = styled.div`
  width: 250px;
  height: fit-content;
  background-color: white;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 10px;
  & > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;
const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  input {
    padding-left: 10px;
    padding-bottom: 10px;
    width: 230px;
    height: 60px;
    border-style: hidden;
    outline: none;
    background: white;
    border-radius: 12px;
    box-shadow: 0px 0px 3px 1px rgba(0, 0, 0, 0.04);
    overflow-wrap: auto;
    cursor: pointer;

    &::placeholder {
      white-space: pre-wrap;
    }
  }

  div {
    display: flex;
    align-items: center;
    gap: 10px;
  }
`;

const StyledIcon = styled(GoX)`
  width: 26px;
  height: 26px;
  color: black;
  cursor: pointer;

  &:hover {
    background-color: #bab8b8;
  }
`;
