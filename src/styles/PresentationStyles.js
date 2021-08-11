import { motion } from "framer-motion";
import styled from "styled-components";

const PresentationSec = styled.div`
  color: #fff;
  padding: 160px 0;
  background: ${({ lightBg }) => (lightBg ? "#fff" : "#101522")};
`;

const InfoRow = styled.div`
  display: flex;
  margin: 0 -15px -15px -15px;
  flex-wrap: wrap;
  align-items: center;
  flex-direction: ${({ imgStart }) => (imgStart ? "row-reverse" : "row")};
`;

const InfoColumn = styled.div`
  margin-bottom: 15px;
  padding-right: 15px;
  padding-left: 15px;
  flex: 1;
  max-width: 50%;
  flex-basis: 50%;

  @media (max-width: 768 px) {
    max-width: 100%;
    flex-basis: 100%;
    display: flex;
    justify-content: center;
  }
`;

const FooterBtnLink = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  text-decoration: none;
  padding: 1px 1px 10px 1px;
  height: 100%;
  width: 100%;
  border: none;
  outline: none;
`;

const TextWrapper = styled.div`
  max-width: 540px;
  padding-top: 0;
  padding-bottom: 60px;

  @media (max-width: 768px) {
    padding-bottom: 65px;
  }
`;

const TopLine = styled(motion.div)`
  color: ${({ lightTopLine }) => (lightTopLine ? "#4B4B4B" : "#101011")};
  font-size: 10px;
  line-height: 16px;
  letter-spacing: 0.8px;
  margin-bottom: 16px;
`;

const Heading = styled(motion.h1)`
  margin-bottom: 24px;
  font-size: 74px;
  line-height: 1.1;
  color: ${({ lightText }) => (lightText ? "#fff" : "#662E9B")};
`;

const Subtitle = styled(motion.p)`
  max-width: 440px;
  margin-bottom: 15px;
  font-size: 24px;
  line-height: 32px;
  color: ${({ lightTextDesc }) => (lightTextDesc ? "#4B4B4B" : "#101011")};
`;

const ImgWrapper = styled(motion.div)`
  max-width: 555px;
  display: flex;
  justify-content: ${({ start }) => (start ? "flex-start" : "flex-end")};
`;

const Img = styled.img`
  padding-right: 0;
  border: 0;
  max-width: 100%;
  vertical-align: middle;
  display: inline-block;
  max-height: 500px;
`;

export {
  PresentationSec,
  InfoColumn,
  TextWrapper,
  InfoRow,
  TopLine,
  Heading,
  FooterBtnLink,
  Subtitle,
  ImgWrapper,
  Img,
};
