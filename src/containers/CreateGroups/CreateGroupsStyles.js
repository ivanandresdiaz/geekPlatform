import styled from "styled-components";

export const ContainerNewGroup = styled.div`
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

export const SelectPlantillas = styled.select`
  padding: 10px 20px;
  border-radius: 5px;
  outline: none;
  width: 250px;
  margin-bottom: 20px;
  margin-top: 8px;
  border: none;
  font-size: 14px;
  border: 1px solid #f0f0f0;

  &:focus {
    color: #ff3b53;
  }

  &::placeholder {
    color: #525151;
  }

  @media screen and (max-width: 820px) {
    width: 100%;
    margin: 0 0 16px 0;
  }
`;
