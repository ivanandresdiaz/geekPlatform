import styled from "styled-components";
import { Link } from "react-router-dom";
import { Container } from "../globalStyles";

const Nav = styled.nav`
  background: #ffffff;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.9rem;
  position: sticky;
  top: 0;
  z-index: 999;
`;
const NavbarContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  height: 80px;
  ${Container}
`;

const NavLogo = styled(Link)`
  color: #000000;
  justify-self: flex-start;
  cursor: pointer;
  text-decoration: none;
  font-family: "Vibur", cursive;
  font-size: 2.5rem;
  display: flex;
  align-items: center;
`;

const NavIcon = styled.img`
  width: 115px;
  height: 45px;
  border: none;
`;

const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 960px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 2;
    cursor: pointer;
  }
`;

const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;

  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 90vh;
    position: absolute;
    top: 80px;
    left: ${({ click }) => (click ? 0 : "-100%")};
    opacity: 1;
    transition: all 0.5s ease;
    background: #101011;
  }
`;

const NavItem = styled.div`
  height: 80px;
  padding-bottom: 8px;

  &:hover {
    border-bottom: 2px solid #f2ad60;
  }

  @media (max-width: 960px) {
    width: 100%;

    &:hover {
      border: none;
    }
  }
`;

const NavLinks = styled(Link)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0.5rem 1rem;
  height: 100%;

  @media (max-width: 960px) {
    text-align: center;
    padding: 2rem;
    width: 100%;
    display: table;

    &:hover {
      color: #f2ad60;
      transition: all 0.3s ease;
    }
  }
`;

const NavItemBtn = styled.div`
  @media (max-width: 960px) {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 120px;
  }
`;

const NavBtnLink = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  padding: 8px 16px;
  height: 100%;
  width: 100%;
  border: none;
  outline: none;
`;

export {
  Nav,
  NavbarContainer,
  NavLogo,
  NavIcon,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavItemBtn,
  NavBtnLink,
};
