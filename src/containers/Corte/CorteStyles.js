import styled from "styled-components";

export const ContainerMainCorte = styled.div`
  z-index: 1;
  width: 100%;
  max-width: 1600px;
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
`;

export const ContainerMainClass = styled.div`
  width: auto;
  height: auto;
  display: flex;
  flex-wrap: wrap;
`;
export const ContainerClasses = styled.div`
  width: 150px;
  height: 100px;
  margin: 10px;
  border-radius: 5px;
  border-color: #f2f2f2;
  background-color: #3cc5ff;

  p {
    text-align: center;
    color: #fffffe;
  }
`;

export const ContainerSub2Corte = styled.div`
  display: flex;
  flex-direction: column;
  width: 40%;
  height: auto;
`;

export const ContainerTitleCorte = styled.div`
  display: flex;
  flex-direction: row;
  width: auto;
  height: auto;
  background-color: #028b9e;
  margin: 40px 20px 20px 60px;
  border-radius: 10px;

  h1 {
    color: #fffffe;
    padding-left: 10px;
    padding-right: 25px;
  }

  img {
    padding-right: 0;
    border: 10px;
    max-width: 100%;
    vertical-align: middle;
    display: inline-block;
    max-height: 100%;
  }
`;
