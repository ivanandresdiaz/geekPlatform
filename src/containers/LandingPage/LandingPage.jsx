import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../components/Structure/Footer';
import PresentationHome from '../../components/Structure/HomeLandingPage/PresentationHome';
import Navbar from '../../components/Structure/Navbar';

const LandingPage = () => {
  return (
    <>
      <Navbar />
      <PresentationHome />
      <Link to='/acercaDeProgramadores'>Acerca de Programadores</Link>
      <Footer />
    </>
  );
};

export default LandingPage;
