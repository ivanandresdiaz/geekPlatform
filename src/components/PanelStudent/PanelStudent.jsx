import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getCorteId } from '../../reducers/authReducer';
import CorteStudent from '../../containers/CorteStudent/CorteStudent';
import NavbarStudent from '../Structure/NavbarStudent';

const PanelStudent = () => {
  const corteId = useSelector(getCorteId);
  return (
    <>
      <div style={{ backgroundColor: '#F2F2F2' }}>
        <NavbarStudent />
        {corteId && <CorteStudent />}
      </div>
    </>
  );
};

export default PanelStudent;
