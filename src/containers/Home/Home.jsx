import React from 'react';
import { useSelector } from 'react-redux';
import { getRole } from '../../reducers/authReducer';
import Footer from '../../components/Structure/Footer';
import PanelAdmin from '../../components/PanelAdmin/PanelAdmin';
import PanelStudent from '../../components/PanelStudent/PanelStudent';
import PanelTeacher from '../../components/PanelTeacher/PanelTeacher';
import Error from '../../uiComponents/Error/Error';

const Home = () => {

  const role = useSelector(getRole);
  const handleRender = () => {
    switch (role) {
      case 'admin':
        return <PanelAdmin />;
      case 'student':
        return <PanelStudent />;
      case 'teacher':
        return <PanelTeacher />;
      default:
        return <Error />;
    }
  };
  return (
    <div>
      {handleRender()}
      <Footer />
    </div>
  );
};

export default Home;
