import styled from "styled-components";

export const ContainerMainCorte = styled.div`
 margin: 30px 30px 0px 160px;

  /* @media screen and (max-width: 991px) {
    padding-left: 30px;
    padding-right: 30px;
  } */
`;


export const ContainerWrapCorte = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0px -15px;
`;

export const ContainerClassrooms = styled.div`
  width: 50%;
  padding: 0 15px;
`;

export const ClassroomContent = styled.div`
  padding: 30px;
  display: flex;
  align-items: center;
  background-color: #ffffff; //agregar luego dark theme.
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  border-radius: 15px;
  position: relative;
  overflow: hidden;
  z-index: 1;
  transition: color 0.5s ease 0s;
  margin-bottom: 30px;
`;

export const ContentImg = styled.div`
  width: 30%;
  height: 100%;
  font-size: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
`;

export const ContentTitle = styled.div`
  flex-grow: 1;
  text-align: center;
  z-index: 1;
  text-transform: capitalize;

  h2 {
    color: #333333;
  }
`;

// export const ContainerMainClass = styled.div`
//   width: 440px;
//   height: auto;
//   display: flex;
//   flex-wrap: wrap;
// `;

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

export const ContainerWrap2Corte = styled.div`
  position: relative;
  height: calc(100% - 30px);
  padding: 30px;
  margin-bottom: 30px;
  background-color: #ffffff;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  border-radius: 15px;
`;

export const ContainerMainTitleCorte = styled.div`
  display: flex;
  flex-direction: row;
  width: auto;
  height: auto;
  margin: 50px 400px 10px 400px;

  h1 {
    color: #333333;
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

export const ContainerTitleCorte = styled.div`
  display: flex;
  flex-direction: column;
  width: auto;
  height: auto;
  /* align-items: flex-start; */

  h1 {
    color: #333333;
    padding-left: 0px;
    padding-right: 0px;
    padding-bottom: 5px;
    font-size: 48px;
    text-align: center;
  }

  p {
    color: #4b4b4b;
    padding-right: 45px;
    font-size: 18px;
    text-align: justify;
    padding-bottom: 8px;
  }
`;

export const ContainerIconsCorte = styled.div`
  display: flex;
  flex-direction: row;
  align-content: space-between;
  align-self: center;

  img {
    padding: 10px 25px 10px 10px;
  }
`;

export const ContainerImgCorte = styled.div`
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
  background-color: #0e172c;
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
