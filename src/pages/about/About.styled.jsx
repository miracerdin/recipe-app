import styled from "styled-components";

const Section = styled.section`
  color: ${({ clr }) => clr || "black"};
  text-align: justify;
  margin: 0 20px;
  font-size: 1.5rem;
`;

export const H2 = styled.h2`
  text-align: center;
  margin-top: 30px;
`;
export default Section;
