import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CorteStudent from '../../containers/CorteStudent/CorteStudent';
import NavbarStudent from '../Structure/NavbarStudent';

const PanelStudent = () => {

  return (
    <>
      <NavbarStudent />
      <CorteStudent />
    </>
  );
};

export default PanelStudent;
