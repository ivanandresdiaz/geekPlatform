import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getFullName } from '../../../reducers/authReducer';
import { singOutAuth } from '../../../actions/authActions';
import { Dropdown, IconButton, IconMenu, MenuItems, Welcome } from './MenuTeacherStyles'
import menu from '../../../images/other/menu.png'
import { FaFolder, FaShieldAlt, FaUserCircle, FaUserFriends, FaWrench } from 'react-icons/fa';
import { VscColorMode } from "react-icons/vsc";
import { Button3 } from '../../../globalStyles';

export const MenuTeacher = (props) => {

    const [open, setOpen] = useState(false)

    return (
        <>
            <IconMenu src={menu} onClick={() => setOpen(!open)} />
            {open && props.children}
        </>

    )
}

export const TeacherDropdown = () => {
    const dispatch = useDispatch();
    const fullName = useSelector(getFullName);
    const handleCerrarSesion = () => {
        dispatch(singOutAuth());
    };
    const TeacherDropdownItem = (props) => {
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
            <TeacherDropdownItem leftIcon={<FaUserCircle />}>Mi perfil</TeacherDropdownItem>
            <TeacherDropdownItem leftIcon={<FaFolder />}>Recursos</TeacherDropdownItem>
            <TeacherDropdownItem leftIcon={<FaShieldAlt />}>Panel Teacher</TeacherDropdownItem>
            <TeacherDropdownItem leftIcon={<FaUserFriends />}>Salones</TeacherDropdownItem>
            <TeacherDropdownItem leftIcon={<FaWrench />}>Configuración</TeacherDropdownItem>
            <TeacherDropdownItem leftIcon={<VscColorMode />}>Darkmode</TeacherDropdownItem>
            <Button3 type='button' onClick={handleCerrarSesion} primary>Cerrar sesión</Button3>
        </Dropdown>
    )
}


