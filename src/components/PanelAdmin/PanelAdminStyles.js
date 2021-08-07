import styled from "styled-components";
import { FaUserPlus, FaUsers } from "react-icons/fa";
import { Link } from "react-router-dom";

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

export const ContainerMain = styled.div`
  display: flex;
  flex-direction: column;
  z-index: 1;
  width: 600px;
  height: auto;
  margin-right: 20px;
  margin-left: 130px;
  margin-top: 50px;
  padding-left: 50px;
  padding-right: 50px;

  @media screen and (max-width: 991px) {
    padding-left: 30px;
    padding-right: 30px;
  }

  h2 {
    font-size: 28px;
    margin: 0px 150px 1px 1px;
  }
`;

export const ContainerTitle = styled.div`
  display: flex;
  flex-direction: row;
  place-content: space-between;
`;

export const ContainerContent = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 0px !important;
  margin-top: 8px;
  margin-bottom: 8px;

  p {
    font-weight: 500;
    color: #c2c2c2;
  }
`;

export const LinkCortes = styled(Link)`
  p {
    font-weight: 500;
    color: #c2c2c2;
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

export const ButtonImgAddCortes = styled(FaUsers)`
  width: 25px;
  height: 25px;
`;
