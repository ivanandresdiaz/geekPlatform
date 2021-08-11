import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavBtnLink,
  NavItemBtn,
  NavIcon,
} from '../../styles/NavbarStyles';
import { Button } from '../../globalStyles';
import logo from '../../images/brand/logo.png';

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
    return () => {
      window.removeEventListener('resize', showButton);
    };
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <Nav>
          <NavbarContainer>
            <NavLogo to='/inicio' onClick={closeMobileMenu}>
              <NavIcon src={logo} />
              Geek Platform
            </NavLogo>
            <MobileIcon onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </MobileIcon>
            <NavMenu onClick={handleClick} click={click}>
              <NavItemBtn>
                {button ? (
                  <Link to='/auth/login'>
                    <NavBtnLink to='/auth/login'>
                      <Button whileHover={{ scale: 1.1 }} primary>Entrar</Button>
                    </NavBtnLink>
                  </Link>
                ) : (
                  <Link to='/auth/login'>
                    <NavBtnLink to='/auth/login'>
                      <Button onClick={closeMobileMenu} fontBig primary>Entrar</Button>
                    </NavBtnLink>
                  </Link>
                )}
              </NavItemBtn>
            </NavMenu>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
};

export default Navbar;
