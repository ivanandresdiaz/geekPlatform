import React, { useState, useEffect, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getFullName } from '../../../reducers/authReducer';
import { singOutAuth } from '../../../actions/authActions';
import { Dropdown, IconButton, IconMenu, MenuItems, Welcome } from './MenuStundentStyles'
import menu from '../../../images/other/menu.png'
import { FaFolder, FaUserCircle, FaUserFriends, FaWrench } from 'react-icons/fa';
import { VscColorMode } from "react-icons/vsc";
import { Button3 } from '../../../globalStyles';
import { Link } from 'react-router-dom';

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
    const userDataLogged = useSelector((state) => state.auth);
    // useEffect(() => {
    //     if (userDataLogged.corteId) {
    //         const { corteId } = userDataLogged;
    //         dispatch(getFirestoreNewsCategory(corteId, 'blogs'));
    //     } else {
    //         alert('no estas autenticado');
    //     }
    // }, []);
    // const handleGetNews = useCallback(
    //     (category) => {
    //         if (userDataLogged) {
    //             const { corteId } = userDataLogged;
    //             dispatch(getFirestoreNewsCategory(corteId, category));
    //         }
    //     }, [],
    // );
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
            <Link to={`/socialGeek/${userDataLogged.uid}`}>
                <StudentDropdownItem leftIcon={<FaUserCircle />}>Mi perfil</StudentDropdownItem>
            </Link>
            <Link to='/bancoRecursosAcademicos'>
                <StudentDropdownItem leftIcon={<FaFolder />}>Recursos</StudentDropdownItem>
            </Link>
            <Link to='/'>
                <StudentDropdownItem leftIcon={<FaUserFriends />}>Panel</StudentDropdownItem>
            </Link>
            <StudentDropdownItem leftIcon={<FaWrench />}>Configuración</StudentDropdownItem>
            <StudentDropdownItem leftIcon={<VscColorMode />}>Darkmode</StudentDropdownItem>
            <Button3 type='button' onClick={handleCerrarSesion} primary>Cerrar sesión</Button3>
        </Dropdown>
    )
}






