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
display:grid;
grid-template-columns: 35% 65%;
align-items: center;
:hover{
  background-color:#2f33a7;
  color: white;
}
`;

export const ImgStudent = styled.img`
margin:5px 5px;
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
display:grid;
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
background-color:#2e318c;
color: white;
margin: 0 0 10px;
:hover{
  background-color:#2f33a7;
  
}

`;
export const ButtonReprobar = styled.button`
width: 120px;
height: 40px;
border-radius: 6px;
color: black;
margin: 0 0 10px;
:hover{
  background-color:grey;
}

`;
export const DivContainerGridDetails = styled.div`
display: grid;
width: 90%;
margin:20px auto;
textarea{
  width: 100%;
  height: 150px;
  font-size: 20px;
  resize: none;
}
div{
  margin:10px 0;
  display: grid;
  height: 100px;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  align-items: center;
  justify-content: center;
  width: 100%;
  a{
    display: flex;
    justify-content: center;
    align-items: center;
    height:40px;
    width:95%;
    border-radius:8px;
    background-color:white;
    box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
  }
  span{
    font-weight:700;

  }
}

`;

export const DivContainerButtons = styled.div`
width: 100%;
display: flex;
justify-content:center;
margin: 0 20px;
button{
  margin: 0 10px;
}
`;
