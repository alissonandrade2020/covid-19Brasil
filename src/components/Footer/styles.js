import styled from "styled-components";

export const Container = styled.div`
  width: 740px;
  margin: 20px auto 50px;
  background: #00004f;
  padding: 30px 0;
  color: #b0a61e;
  border-radius: 2px;
  font-size: 12px;

  p {
    text-align: center;
  }

  a {
    color: rgba(521, 251, 221, 0.9);
    fill: rgba(541, 251, 221, 0.9);

    transition: all 0.2s ease-in-out;
    -webkit-transition: all 0.2s ease-in-out;
    -moz-transition: all 0.2s ease-in-out;
  }

  a:hover {
    color: #ce0005;
    fill: #ce0005;
  }

  @media screen and (max-width: 740px) {
    width: 95%;
  }
`;

export const Icons = styled.div`
  margin-bottom: 25px;
  display: flex;
  flex-direction: row;
  justify-content: center;

  span {
    width: 1px;
    height: 15px;
    display: block;
    background: #050569;
    margin: 1px 10px;
  }
`;
