import React from 'react';
import { IconContext } from 'react-icons/lib';
import {
  Nav,
  NavbarContainer,
  NavLogo,
  NavMenu,
  NavItemBtn,
  NavIcon,
  NavItem,
  NavLinks,
} from '../../styles/NavbarStyles';

import logo from '../../images/brand/logo.png';
import { MenuTeacher, TeacherDropdown } from '../../uiComponents/Menu/Teacher/MenuTeacher';

const NavbarTeacher = () => {

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <Nav>
          <NavbarContainer>
            <NavLogo to='/inicio'>
              <NavIcon src={logo} />
              Geek Platform
            </NavLogo>
            <NavMenu>
              {/* <NavItem>
                                <NavLinks to='/feed'>
                                    Social Geek
                                </NavLinks>
                            </NavItem> */}
              <NavItemBtn>
                <MenuTeacher>
                  <TeacherDropdown />
                </MenuTeacher>
              </NavItemBtn>
            </NavMenu>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
};

export default NavbarTeacher;
