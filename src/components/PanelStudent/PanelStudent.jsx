import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getCorteId } from '../../reducers/authReducer';
import CorteStudent from '../../containers/CorteStudent/CorteStudent';
import NavbarStudent from '../Structure/NavbarStudent';

const PanelStudent = () => {
  const corteId = useSelector(getCorteId);
  return (
    <>
      <NavbarStudent />
      {corteId && <CorteStudent />}
    </>
  );
};

export default PanelStudent;
