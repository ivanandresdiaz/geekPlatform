import styled from "styled-components";
import { FaUserPlus } from "react-icons/fa";

export const ContainerList = styled.div`
  display: flex;
  z-index: 1;
  width: 100%;
  max-width: 1300px;
  margin-right: auto;
  margin-left: auto;
  padding-left: 50px;
  padding-right: 50px;

  @media screen and (max-width: 991px) {
    padding-left: 30px;
    padding-right: 30px;
  }
`;

export const ContainerTitle = styled.div`
  display: flex;
  z-index: 1;
  width: 100%;
  max-width: 1300px;
  margin-right: auto;
  margin-left: auto;
  padding-left: 50px;
  padding-right: 50px;
  
  @media screen and (max-width: 991px) {
    padding-left: 30px;
    padding-right: 30px;
  }

  h2 {
    font-size: 20px;
  }
`;

export const ButtonAdd = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 4px;
  border: none;
  background: #b25327;
  color: #fff;
  cursor: pointer;
`;

export const ButtonImgAdd = styled(FaUserPlus)`
  width: 25px;
  height: 25px;
`;
