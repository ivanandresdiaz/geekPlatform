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
    NavLinks
} from '../../styles/NavbarStyles';

import logo from '../../images/brand/logo.png';
import { MenuStudent, StudentDropdown } from '../../uiComponents/Menu/Student/MenuStudent';


const NavbarStudent = () => {

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
                            <NavItem>
                                <NavLinks to='/socialGeek'>
                                    Social Geek
                                </NavLinks>
                            </NavItem>
                            <NavItemBtn>
                                <MenuStudent>
                                    <StudentDropdown />
                                </MenuStudent>
                            </NavItemBtn>
                        </NavMenu>
                    </NavbarContainer>
                </Nav>
            </IconContext.Provider>
        </>
    );
};

export default NavbarStudent;
