import styled from "styled-components";

export const Container = styled.div`
  width: 740px;
  margin: 20px auto;
  background-color: #003535;
  border-radius: 4px;
  padding: 5px;
  border: 3px solid #8b8b8b;

  @media screen and (max-width: 740px) {
    width: 95%;
  }
`;
