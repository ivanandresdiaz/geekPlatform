import styled from "styled-components";

export const ContainerMainSalon = styled.div`
  margin: 30px 30px 0px 160px;
`;
export const ContainerSprints = styled.div`
  width: 25%;
  padding: 0 15px;
`;

export const ContainerContentSprint = styled.div`
  padding: 30px;
  display: flex;
  align-items: center;
  background-color: #ffffff; //agregar luego dark theme.
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  border-radius: 15px;
  position: relative;
  overflow: hidden;
  margin-bottom: 30px;
  place-self: center;
  flex-direction: column;
  height: auto;
  h4 {
    color: #ff3b53;
    padding-bottom: 5px;
    font-size: 18px;
    font-weight: 700;
    text-align: center;
  }
  p {
    color: #333333;
    text-align: center;
    font-size: 14px;
  }
`;