import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Montserrat', sans-serif;
    text-decoration: none;
}

a{
  color: black;
}

`;

export const Container = styled.div`
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

export const Button = styled.button`
  border-radius: 4px;
  background: ${({ primary }) => (primary ? '#FF3B53' : '#9C1D2D')};
  white-space: nowrap;
  padding: ${({ big }) => (big ? '12px 64px' : '10px 20px')};
  color: #fff;
  font-family: 'Montserrat', sans-serif;
  font-size: ${({ fontBig }) => (fontBig ? '18px' : '14px')};
  outline: none;
  border: none;
  cursor: pointer;

  &:hover {
    transition: all 0.3 ease-out;
    background: #fff;
    background: ${({ primary }) => (primary ? '#9C1D2D' : '#FF3B53')};
  }

  @media screen and (max-width: 960px) {
    width: 100%;
  }
`;

export const Button2 = styled.button`
  border-radius: 4px;
  background: ${({ primary }) => (primary ? '#B25327' : '#FFC43B')};
  white-space: nowrap;
  padding: ${({ big }) => (big ? '12px 64px' : '15px 70px')};
  color: #fff;
  font-family: 'Montserrat', sans-serif;
  font-size: ${({ fontBig }) => (fontBig ? '16px' : '14px')};
  font-weight: 700;
  outline: none;
  border: none;
  cursor: pointer;

  &:hover {
    transition: all 0.3 ease-out;
    background: #fff;
    background: ${({ primary }) => (primary ? '#FFC43B' : '#B25327')};
  }

  @media screen and (max-width: 960px) {
    width: 100%;
  }
`;

export const Button3 = styled.button`
  border-radius: 4px;
  background: ${({ primary }) => (primary ? '#FF3B53' : '#9C1D2D')};
  white-space: nowrap;
  padding: ${({ big }) => (big ? '12px 64px' : '10px 20px')};
  margin-top: 20px;
  color: #fff;
  font-family: 'Montserrat', sans-serif;
  font-size: ${({ fontBig }) => (fontBig ? '18px' : '14px')};
  outline: none;
  border: none;
  cursor: pointer;

  &:hover {
    transition: all 0.3 ease-out;
    background: #fff;
    background: ${({ primary }) => (primary ? '#9C1D2D' : '#FF3B53')};
  }

  @media screen and (max-width: 960px) {
    width: 100%;
  }
`;

export default GlobalStyle;
