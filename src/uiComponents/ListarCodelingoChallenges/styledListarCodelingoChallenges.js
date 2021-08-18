import styled from "styled-components";

export const DivContainerList = styled.div`
  display: block;
  height: auto;
  width: 100%;
  margin: 0 auto;
`;

export const DivRowList = styled.summary`
  display: grid;
  position: relative;
  z-index: 10;
  height: 150px;
  width: 90%;
  margin: 20px auto;
  background-color: white;
  border-radius: 20px;
  padding: 20px;
  grid-template-rows: 50% 50%;
  align-items: center;
  justify-items: start;
  box-shadow: 0px 3px 1px -2px rgb(0 0 0 / 20%),
    0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%);
  :hover {
    background-color: #3cc5ff;
    color: white;
  }
`;

export const DivDetails = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: 80% 20%;
  align-items: end;
`;

export const ContainerPActivo = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  p {
    padding: 2px;
    border-radius: 5px;
    color: white;
    background-color: #1be282;
  }
`;
export const ContainerPInactivo = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  p {
    margin-left: -20px;
    padding: 2px;
    border-radius: 5px;
    color: white;
    background-color: rgba(255, 166, 16);
  }
`;

export const DivTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  p {
    padding-left: 5px;
    font-size: 18px;
    font-weight: 700;
  }
`;
export const ButtonCalificar = styled.button`
  width: 120px;
  height: 40px;
  border-radius: 6px;
  background-color: #2e318c;
  color: white;
  margin: 0 0 10px;
  :hover {
    background-color: #2f33a7;
  }
`;
export const SpanHtml = styled.span`
  background-color: #ff470f;
  box-shadow: 0px 3px 1px -2px rgb(0 0 0 / 20%),
    0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%);
  margin: 0 3px;
  padding: 3px 5px;
  border-radius: 4px;
  font-weight: 900;
`;

export const SpanCSS = styled.span`
  background-color: rgba(65, 213, 226, 0.9);
  box-shadow: 0px 3px 1px -2px rgb(0 0 0 / 20%),
    0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%);
  margin: 0 3px;
  padding: 3px 5px;
  border-radius: 4px;
  font-weight: 900;
`;
export const SpanJAVASCRIPT = styled.span`
  background-color: rgba(239, 216, 29);
  box-shadow: 0px 3px 1px -2px rgb(0 0 0 / 20%),
    0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%);
  margin: 0 3px;
  padding: 3px 5px;
  border-radius: 4px;
  font-weight: 900;
  color: black;
`;
export const SpanWEBPACK = styled.span`
  background-color: rgba(40, 44, 52);
  box-shadow: 0px 3px 1px -2px rgb(0 0 0 / 20%),
    0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%);
  margin: 0 3px;
  padding: 3px 5px;
  border-radius: 4px;
  font-weight: 900;
`;
export const SpanREACTJS = styled.span`
  background-color: rgba(40, 44, 52);
  box-shadow: 0px 3px 1px -2px rgb(0 0 0 / 20%),
    0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%);
  margin: 0 3px;
  padding: 3px 5px;
  border-radius: 4px;
  font-weight: 900;
  color: rgb(97, 218, 251);
`;
export const SpanREACTHOOKS = styled.span`
  background-color: rgba(40, 44, 52);
  box-shadow: 0px 3px 1px -2px rgb(0 0 0 / 20%),
    0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%);
  margin: 0 3px;
  padding: 3px 5px;
  border-radius: 4px;
  font-weight: 900;
`;
export const SpanREDUX = styled.span`
  background-color: rgba(65, 213, 226, 0.7);
  box-shadow: 0px 3px 1px -2px rgb(0 0 0 / 20%),
    0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%);
  margin: 0 3px;
  padding: 3px 5px;
  border-radius: 4px;
  color: rgb(97, 218, 251);
  font-weight: 900;
`;
export const SpanFIREBASE = styled.span`
  background-color: rgb(3, 155, 229);
  box-shadow: 0px 3px 1px -2px rgb(0 0 0 / 20%),
    0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%);
  margin: 0 3px;
  padding: 3px 5px;
  border-radius: 4px;
  font-weight: 900;
  color: white;
`;
export const SpanTESTING = styled.span`
  background-color: rgba(65, 213, 226, 0.7);
  box-shadow: 0px 3px 1px -2px rgb(0 0 0 / 20%),
    0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%);
  margin: 0 3px;
  padding: 3px 5px;
  border-radius: 4px;
  font-weight: 900;
`;
export const PGeekyPuntos = styled.p`
  span {
    font-weight: 900;
  }
`;
export const DivButtonsActionsRow = styled.div`
  width: 90%;
  margin: 10px auto;
  display: grid;
  grid-template-columns: 50% 50%;
`;
export const DivContent = styled.div`
  width: 90%;
  margin: 0 auto;
  position: relative;
  z-index: 1;
  margin-top: -50px;
  background-color: rgb(40, 44, 52);
  color: white;
  padding: 60px 20px 10px 20px;
  border-radius: 25px;
`;
