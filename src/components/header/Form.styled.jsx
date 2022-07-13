import styled from "styled-components";
export const Section1 = styled.section`
  background: rgb(255, 255, 255);
  background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 1) 0%,
    rgba(152, 221, 209, 1) 41%
  );
  padding: 15px;
`;
const Form1 = styled.form`
  background: rgb(255, 255, 255);
  background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 1) 0%,
    rgba(152, 221, 209, 1) 41%
  );
  width: 60%;
  margin: auto;
  -webkit-box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.75);
  box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.75);
  border-radius: 5px;
  padding: 10px;
  margin-bottom: 20px;
  text-align: center;
  gap: 3px;
`;
export const Input = styled.input`
  width: 40%;
  margin-right: 3px;
`;

export const Select = styled.select`
  width: 30%;
  margin-right: 3px;
  padding: 3px;
`;
export const Button = styled.button`
  height: 30px;
  width: 20%;
  font-size: 1rem;
  transition: all 0.5s ease-in-out;

  &:hover {
    transform: scale(0.97);
  }
`;
export default Form1;
