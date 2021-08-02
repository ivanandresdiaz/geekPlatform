import React from 'react';
import { useSelector } from 'react-redux';
import { getName } from '../../reducers/authReducer';

const Header = () => {
  const name = useSelector(getName);
  return (
    <div>
      <h1>
        Bienvenido
        {' '}
        {name}
      </h1>
    </div>
  );
};

export default Header;
