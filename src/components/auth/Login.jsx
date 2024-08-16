import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import ErrorMes from "../ErrorMes";
import sigInUpRequest from "../../slice/thunk/authThunk";

export default function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const submitHandler = (userData) => {
    dispatch(sigInUpRequest({ userData, navigate }));
  };
  return (
    <StyledWrapper>
      
      
        <h1>Trello Clone</h1>
    
      <StyledContainer>
        <form onSubmit={handleSubmit(submitHandler)}>
          <p>LOGIN</p>
          <StyledMessage>
            <input
              {...register("email", {
                required: {
                  value: true,
                  message: "Введите email",
                },
                pattern: {
                  value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                  message: "не правильно введень email",
                },
              })}
              type="email"
              placeholder="Укажите адрес электронный почти"
            />
            <ErrorMes>{errors?.email?.message}</ErrorMes>
          </StyledMessage>
          <StyledMessage>
            <input
              {...register("password", {
                required: {
                  value: true,
                  message: "Введите password",
                },
                minLength: {
                  value: 6,
                  message: "пароль должен быть неменее 6 символов",
                },
                maxLength: {
                  value: 15,
                  message: "слишком много ",
                },
              })}
              type="password"
              placeholder="Введите пароль"
            />
            <ErrorMes>{errors?.password?.message}</ErrorMes>
          </StyledMessage>

          <button>Продолжать</button>
        </form>
        <section>
        
          <Link style={{ color: "blue", fontWeight: "500" }} to={"/"}>
            <p> Не удаеться войти? Зарегистрируйтесь </p>
          </Link>
        </section>
      </StyledContainer>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 30px;
  background-image: url("https://i.artfile.ru/2048x1360_924698_[www.ArtFile.ru].jpg");

  & > div > h1 {
    color: #4b4857;
    font-size: 43px;
  }
`;

const StyledContainer = styled.div`
  width: 400px;
  height: 400px;
  background-color: #62bbeb;
  box-shadow: 0 3px 10px rgb(0 0 0 /0.2);
  display: flex;
  flex-direction: column;
  gap: 20px;

  & > form {
    display: flex;
    flex-direction: column;
    gap: 15px;
    padding: 35px;
    align-items: center;

    & > p {
      color: #0f0f0faa;
      font-size: 18px;
    }
    & > input {
      width:60%;
      height: 38px;
      padding: 5px;
      /* font-weight: 200px; */
      font-size: 16px;
    }
    & > button {
      width: 60%;
      height: 30px;
      border-radius: 5px;
      border: none;
      background-color: #111fdd;
      color: white;
    }
  }
  & > section {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    color: blue;
  }
`;

const StyledMessage = styled.div`
  width: 100%;
  height: 55px;
  display: flex;
  flex-direction: column;
  & > input {
    width: 100%;
    height: 38px;
    font-size: 16px;
    padding-left: 5px;
  }
`;
