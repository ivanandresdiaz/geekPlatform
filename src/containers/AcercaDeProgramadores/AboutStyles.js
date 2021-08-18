import styled from "styled-components";

export const ContainerCardAbout = styled.div`
  position: relative;
  z-index: 10;
  height: auto;
  width: auto;
  margin: 20px 70px;
  background-color: white;
  border-radius: 20px;
  padding: 20px;
  grid-template-rows: 50% 50%;
  align-items: center;
  justify-items: start;
  box-shadow: 0px 3px 1px -2px rgb(0 0 0 / 20%),
    0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%);
`;

export const ContImg = styled.div`
  img {
    width: 300px;
    height: 300px;
    border-radius: 50%;
  }
`;
