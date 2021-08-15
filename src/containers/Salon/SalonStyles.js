import styled from "styled-components";

export const ContainerMainSalon = styled.div`
  margin: 30px 30px 0px 160px;
`;

export const ContainerTitleGreet = styled.div`
  width: 100%;

  h1 {
    font-size: 1.5rem;
    line-height: 2.25rem;
    color: #333333;
    font-weight: 700;
    margin-bottom: 0.5rem;
    text-align: center;
  }
`;

export const ContainerRowSprint = styled.div`
  display: flex;
  flex-wrap: wrap-reverse;
  margin: 0px -15px;
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

export const ImagenSprint = styled.img`
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  height: 112px;
  object-fit: cover;
  object-position: center;
  width: 100%;
`;
