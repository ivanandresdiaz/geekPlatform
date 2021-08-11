import styled from "styled-components";
import { FaUserPlus, FaUsers } from "react-icons/fa";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

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

  height: auto;
  margin: 50px 100px 90px 100px;
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
  border-radius: 10px 10px 0px 0px;
  background: #992332;
  padding-left: 5px;
`;

export const TitleAdd = styled.h2`
  color: #eeeeee;
  padding-left: 10px;
  font-weight: 600;
  font-size: 25px !important;
`;

export const ContainerContent = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 0px !important;
  margin-top: 0px;
  margin-bottom: 8px;
  padding-left: 5px !important;
  padding-top: 5px !important;
  border-radius: 1px 1px 10px 10px;
  background: #ff3b53;

  p {
    font-weight: 500;
    color: #fffffe;
    padding-bottom: 10px;
  }
`;

export const ContainerContentLoading = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 0px !important;
  margin-top: 0px;
  margin-bottom: 8px;
  padding-left: 5px !important;
  padding-top: 5px !important;
  width: auto;
  height: 400px;
  border-radius: 1px 1px 10px 10px;
  background: #ff3b53;
`;

export const LinkCortes = styled(Link)`
  p {
    font-weight: 500;
    color: #fffffe;
  }
`;

export const ButtonAdd = styled(motion.button)`
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
