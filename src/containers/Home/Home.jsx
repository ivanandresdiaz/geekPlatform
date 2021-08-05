import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ListarTeachers from '../../uiComponents/ListarTeachers/ListarTeachers';
import ListarCortes from '../../uiComponents/ListarCortes/ListarCortes';
import Header from '../../uiComponents/Header/Header';
import { singOutAuth } from '../../actions/authActions';
import AddAdmin from '../../components/AddAdmin/AddAdmin';
import AddTeachers from '../../components/AddTeachers/AddTeachers';
import CreateCorte from '../../components/CreateCorte/CreateCorte';
import { getCortes } from '../../reducers/adminReducer';
import { getRole } from '../../reducers/authReducer';
import Footer from '../../components/Structure/Footer';
import ListarAdmin from '../../uiComponents/ListarAdmin/ListarAdmin';
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
  console.log('role activo', role);
  return (
    <div>
      {handleRender()}
      <Footer />
    </div>
  );
};

export default Home;
