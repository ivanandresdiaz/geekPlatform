import styled from 'styled-components';

export const DivContainerList = styled.div`
display:grid;
height:auto;
grid-auto-rows: 72px;
width: 90%;
margin: 0 auto;
`;

export const DivRowList = styled.div`
display:grid;
grid-template-columns: 10% 30% 10% 20% 30%;
align-items: center;
:hover{
  background-color:#2f33a7;
  color: white;
}
`;

export const ImgStudent = styled.img`
width: 50px;
height: 50px;
border-radius:50%;
`;
export const ContainerPorcentajeAsistencia = styled.div`
  width: 80%;
  height:15px;
  background-color:grey;
  border-radius:5px;
  box-shadow: 0px 3px 1px -2px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%);
`;
export const PorcentajeAsistencia = styled.div`
  width: ${(props) => (`${props.porcentajeAsistencia}%`)};
  height:15px;
  color: white;
  display: flex;
  justify-content: flex-end;
  p{
    font-size:13px;
    padding-right: 3px;
  }
  background-color:${(props) => {
    if (props.porcentajeAsistencia > 70) {
      return '#3CD4A0';
    } if (props.porcentajeAsistencia > 60) {
      return '#FFC260';
    } if (props.porcentajeAsistencia > 50) {
      return '#FF5C93';
    }
    return '#E21B3C';

  }};
  border-radius:5px;
  
`;

export const ContainerPActivo = styled.div`
display: flex;
justify-content: flex-start;
align-items: center;
p{
  padding: 2px;
  border-radius:5px;
  color: white;
  background-color:#1BE282;
}

`;
export const ContainerPInactivo = styled.div`
display: flex;
justify-content: flex-start;
align-items: center;
p{
  padding: 2px;
  border-radius:5px;
  color: white;
  background-color:#FF3B53;
}
`;
export const DivFullName = styled.div`
display: flex;
align-items: center;
justify-content: flex-start;
p{
  padding-left: 5px;
}
`;
export const DivContainerInputCheckBox = styled.div`
width: 100%;
display: flex;
justify-content: center;
input{
  width: 20px;
  height: 20px;
}
`;
