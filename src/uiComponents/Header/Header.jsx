import React from 'react';
import { useSelector } from 'react-redux';
import Footer from '../../components/Structure/Footer';
import Navbar from '../../components/Structure/Navbar';
import { getFullName } from '../../reducers/authReducer';

const Header = () => {
  const fullName = useSelector(getFullName);
  return (
    <>
      <Navbar />
      <h1>
        Bienvenido
        {' '}
        {fullName}
      </h1>
      
    </>
  );
};

export default Header;
