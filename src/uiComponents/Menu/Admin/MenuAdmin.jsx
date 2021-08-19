import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FaFolder, FaShieldAlt, FaUserCircle, FaWrench } from 'react-icons/fa';
import { VscColorMode } from 'react-icons/vsc';
import { Link } from 'react-router-dom';
import { getFullName } from '../../../reducers/authReducer';
import { singOutAuth } from '../../../actions/authActions';
import { Dropdown, IconButton, IconMenu, MenuItems, Welcome } from './MenuAdminStyles';
import menu from '../../../images/other/menu.png';
import { Button3 } from '../../../globalStyles';

export const MenuAdmin = (props) => {

  const [open, setOpen] = useState(false);

  return (
    <>
      <IconMenu src={menu} onClick={() => setOpen(!open)} />
      {open && props.children}
    </>

  );
};

export const AdminDropdown = () => {
  const dispatch = useDispatch();
  const fullName = useSelector(getFullName);
  const handleCerrarSesion = () => {
    dispatch(singOutAuth());
  };
  const AdminDropdownItem = (props) => {
    return (
      <>
        <MenuItems>
          <IconButton>{props.leftIcon}</IconButton>
          {props.children}
        </MenuItems>
      </>
    );

  };

  return (
    <Dropdown>
      <Welcome>
        Bienvenido
        {' '}
        {fullName}
      </Welcome>
      <AdminDropdownItem leftIcon={<FaUserCircle />}>Mi perfil</AdminDropdownItem>
      <Link to='/'>
        <AdminDropdownItem leftIcon={<FaShieldAlt />}>Panel Admin</AdminDropdownItem>
      </Link>
      <AdminDropdownItem leftIcon={<FaWrench />}>Configuración</AdminDropdownItem>
      <AdminDropdownItem leftIcon={<VscColorMode />}>Darkmode</AdminDropdownItem>
      <Link to='/bancoRecursosAcademicos'>
        <AdminDropdownItem leftIcon={<FaFolder />}>Recursos</AdminDropdownItem>
      </Link>

      <Button3 type='button' onClick={handleCerrarSesion} primary>Cerrar sesión</Button3>
    </Dropdown>

  );

};

