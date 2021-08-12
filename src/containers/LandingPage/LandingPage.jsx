import React from 'react';
import Footer from '../../components/Structure/Footer';
import PresentationHome from '../../components/Structure/HomeLandingPage/PresentationHome';
import Navbar from '../../components/Structure/Navbar';

const LandingPage = () => {
  return (
    <>
      <Navbar />
      <PresentationHome />
      <Footer />
    </>
  );
};

export default LandingPage;
