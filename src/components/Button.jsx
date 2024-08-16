import styled from "styled-components";

const Button = ({ children, onClick, disabled, ...rest }) => {
  return (
    <StyledButton
      className="button"
      {...rest}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </StyledButton>
  );
};

export default Button;

const StyledButton = styled.button`
  width: 165px;
  height: 38px;
  border-radius: 4px;
  border: none;
  background: #6cb6dd;
  color: white;
  cursor: pointer;
`;
