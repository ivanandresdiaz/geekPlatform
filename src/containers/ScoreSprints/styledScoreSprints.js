import styled from 'styled-components';

export const DividirPantalla = styled.div`
  display: grid;
  width: 90%;
  grid-template-columns: 50% 50%;
  gap: 20px;
`;
export const DivContainerList = styled.div`
  display: block;
  height: auto;
  width: 100%;
  margin: 0 auto;
`;

export const DivRowList = styled.summary`
  display: grid;
  grid-template-columns: 38% 15% 10% 27%;
  align-items: center;
  :hover {
    background-color: #3cc5ff;
    color: white;
    border-radius: 5px;
  }
`;

export const ContainerDescSprint = styled.div`
  position: relative;
  z-index: 10;
  height: auto;
  width: auto;
  margin: 20px auto;
  background-color: white;
  border-radius: 20px;
  padding: 20px;
  grid-template-rows: 50% 50%;
  align-items: center;
  justify-items: start;
  box-shadow: 0px 3px 1px -2px rgb(0 0 0 / 20%),
    0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%);
`;

export const ImgStudent = styled.img`
  margin: 5px 5px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;
export const ContainerPorcentajeCalificacion = styled.div`
  width: 80%;
  height: 15px;
  background-color: grey;
  border-radius: 5px;
  box-shadow: 0px 3px 1px -2px rgb(0 0 0 / 20%),
    0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%);
`;
export const PorcentajeCalificacion = styled.div`
  width: ${(props) => `${props.porcentajeCalificacion}%`};
  height: 15px;
  color: white;
  display: flex;
  justify-content: flex-end;
  p {
    font-size: 13px;
    padding-right: 3px;
  }
  background-color: ${(props) => {
    if (props.porcentajeCalificacion > 80) {
      return '#01b41c';
    }

    if (props.porcentajeCalificacion > 70) {
      return '#3CD4A0';
    }
    if (props.porcentajeCalificacion > 60) {
      return '#FFC260';
    }
    if (props.porcentajeCalificacion > 50) {
      return '#FF5C93';
    }
    return '#E21B3C';
  }};
  border-radius: 5px;
`;
export const ContainerGeekyPuntos = styled.div`
  display: flex;
  justify-content: center;
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
    padding: 2px;
    border-radius: 5px;
    color: white;
    background-color: #ff3b53;
  }
`;
export const DivFullName = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  p {
    padding-left: 5px;
  }
`;
export const DivContainerInputCheckBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  input {
    width: 20px;
    height: 20px;
  }
`;
export const DivTopicScore = styled.div`
  display: grid;
  grid-template-columns: 20% 80%;
  align-items: center;
  height: 40px;
  width: 100%;
  margin: 0 auto;
`;
export const ButtonCalificar = styled.button`
  width: 120px;
  height: 40px;
  border-radius: 6px;
  background-color: #3cc5ff;
  color: white;
  margin: 0 0 10px;
  :hover {
    background-color: #36b1e6;
  }
`;
