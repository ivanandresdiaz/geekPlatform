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
        return (
          <div>
            <PanelAdmin />
            <Footer />
          </div>
        );
      case 'student':
        return (
          <div style={{ backgroundColor: '#F2F2F2' }}>
            <PanelStudent />
            <Footer />
          </div>
        );
      case 'teacher':
        return (
          <div>
            <PanelTeacher />
            <Footer />
          </div>
        );;
      default:
        return <Error />;
    }
  };
  return (
    <div>
      {role && handleRender()}

    </div>
  );
};

export default Home;
