import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getFullName } from '../../../reducers/authReducer';
import { singOutAuth } from '../../../actions/authActions';
import { Dropdown, IconButton, IconMenu, MenuItems, Welcome } from './MenuStundentStyles'
import menu from '../../../images/other/menu.png'
import { FaFolder, FaShieldAlt, FaUserCircle, FaUserFriends, FaWrench } from 'react-icons/fa';
import { VscColorMode } from "react-icons/vsc";
import { Button3 } from '../../../globalStyles';

export const MenuStudent = (props) => {

    const [open, setOpen] = useState(false)

    return (
        <>
            <IconMenu src={menu} onClick={() => setOpen(!open)} />
            {open && props.children}
        </>

    )
}

export const StudentDropdown = () => {
    const dispatch = useDispatch();
    const fullName = useSelector(getFullName);
    const handleCerrarSesion = () => {
        dispatch(singOutAuth());
    };
    const StudentDropdownItem = (props) => {
        return (
            <>
                <MenuItems>
                    <IconButton>{props.leftIcon}</IconButton>
                    {props.children}
                </MenuItems>
            </>
        )

    }

    return (
        <Dropdown>
            <Welcome>
                Bienvenido
                {' '}
                {fullName}
            </Welcome>
            <StudentDropdownItem leftIcon={<FaUserCircle />}>Mi perfil</StudentDropdownItem>
            <StudentDropdownItem leftIcon={<FaFolder />}>Recursos</StudentDropdownItem>
            <StudentDropdownItem leftIcon={<FaUserFriends />}>Salones</StudentDropdownItem>
            <StudentDropdownItem leftIcon={<FaWrench />}>Configuración</StudentDropdownItem>
            <StudentDropdownItem leftIcon={<VscColorMode />}>Darkmode</StudentDropdownItem>
            <Button3 type='button' onClick={handleCerrarSesion} primary>Cerrar sesión</Button3>
        </Dropdown>
    )
}


