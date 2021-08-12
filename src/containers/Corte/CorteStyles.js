import styled from "styled-components";

export const ContainerMainCorte = styled.div`
  z-index: 1;
  width: 100%;
  max-width: 1200px;
  margin-right: auto;
  margin-left: auto;
  padding-left: 50px;
  padding-right: 50px;
  display: flex;
  flex-direction: row;

  @media screen and (max-width: 991px) {
    padding-left: 30px;
    padding-right: 30px;
  }
`;

export const ContainerSub1Corte = styled.div`
  display: flex;
  flex-direction: column;
  width: 40%;
  height: auto;
  margin: auto;
  align-items: center;
`;

export const ContainerMainClass = styled.div`
  width: 440px;
  height: auto;
  display: flex;
  flex-wrap: wrap;
`;
export const ContainerClasses = styled.div`
  width: 200px;
  height: 100px;
  margin: 10px;
  border-radius: 5px;
  border-color: #f2f2f2;
  background-color: #b25327;
  text-align: center;

  p {
    text-align: center;
    color: #fffffe;
    font-weight: 600;
    padding-top: 5px;
  }
`;

export const ContainerSub2Corte = styled.div`
  display: flex;
  flex-direction: column;
  width: 40%;
  height: auto;
  margin: auto;
  align-items: center;
  z-index: -1;
`;

export const ContainerTitleCorte = styled.div`
  display: flex;
  flex-direction: row;
  width: auto;
  height: auto;
  background-color: #028b9e;
  justify-content: space-evenly;
  margin: auto;
  margin-top: 60px;
  border-radius: 10px;

  h1 {
    color: #fffffe;
    padding-left: 10px;
    padding-right: 25px;
  }

  img {
    padding-right: 10px;
    border: 10px;
    max-width: 100%;
    vertical-align: middle;
    display: inline-block;
    max-height: 100%;
  }
`;

export const ContainerAddStudentCorte = styled.div`
  display: flex;
  flex-direction: column;
  width: auto;
  height: auto;
  background-color: #0E172C;
  justify-content: space-evenly;
  margin: auto;
  margin-top: 60px;
  border-radius: 10px;
  align-items: center;

  h1 {
    color: #fffffe;
    padding-left: 10px;
    padding-right: 25px;
    font-size: 25px;
  }

  img {
    padding-right: 10px;
    border: 10px;
    max-width: 100%;
    vertical-align: middle;
    display: inline-block;
    max-height: 100%;
  }
`;
