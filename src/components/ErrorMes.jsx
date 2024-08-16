import styled from "styled-components";

export const ErrorMes=({ children })=>{
  return <StyledErrorMes>{children}</StyledErrorMes>;
}
export default ErrorMes;
const StyledErrorMes= styled.span`
  color: red;
  font-size: 16px;
`;
