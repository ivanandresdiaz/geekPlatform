import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CreateCodelingoChallenge from '../../components/CreateCodelingoChallenge/CreateCodelingoChallenge';
import Footer from '../../components/Structure/Footer';
import NavbarAdmin from '../../components/Structure/NavbarAdmin';
import NavbarStudent from '../../components/Structure/NavbarStudent';
import NavbarTeacher from '../../components/Structure/NavbarTeacher';
import { getRole } from '../../reducers/authReducer';
import ListarCodelingoChallenges from '../../uiComponents/ListarCodelingoChallenges/ListarCodelingoChallenges';
import ListarRetosCodelingoPorCalificar from '../../uiComponents/ListarRetosCodelingoPorCalificar/ListarRetosCodelingoPorCalificar';
import { DivContainerCodelingDashboardTeacher, DivContainerPadre } from './styledCodelingoTeacher';
// import { getCodelingoCategories, getCategoryCodelingo } from '../../reducers/codelinogReducer'; no eliminar

const CodeLingoTeacher = () => {
  const role = useSelector(getRole);
  //NO ELIMINAR esto tiene el fin de hacer consultas por las etiquetas html,css, javascript, webpack...
  // const dispatch = useDispatch();
  // const codelingoCategories = useSelector(getCodelingoCategories); no elimniar
  // useEffect(() => {
  //   dispatch(getCategoriesCodelingoChallenges);
  // }, []);
  // const handleGetCategory = (category) => {
  //   dispatch(getCategoryCodelingo(category));
  // };
  return (
    <>
      <DivContainerPadre>
        {role === 'teacher' && (
          <NavbarTeacher />
        )}
        {role === 'admin' && (
          <NavbarAdmin />
        )}
        {role === 'student' && (
          <NavbarStudent />
        )}

        <DivContainerCodelingDashboardTeacher>
          <div>
            <CreateCodelingoChallenge />
          </div>
          <div>
            <h2 style={{ textAlign: 'center', color: '#FF3B53' }}>Retos codelingo</h2>
            <ListarCodelingoChallenges />
          </div>
          <div>
            <h2 style={{ textAlign: 'center', color: '#FF3B53' }}>Retos por calificar</h2>
            <ListarRetosCodelingoPorCalificar />
          </div>
        </DivContainerCodelingDashboardTeacher>

        <Footer />
      </DivContainerPadre>
    </>

  );
};

export default CodeLingoTeacher;
