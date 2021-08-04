import React from 'react';
import { useSelector } from 'react-redux';
import { getFullName } from '../../reducers/authReducer';

const Header = () => {
  const fullName = useSelector(getFullName);
  return (
    <div>
      <h1>
        Bienvenido
        {' '}
        {fullName}
      </h1>
    </div>
  );
};

export default Header;
