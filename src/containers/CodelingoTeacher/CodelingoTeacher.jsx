import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CreateCodelingoChallenge from '../../components/CreateCodelingoChallenge/CreateCodelingoChallenge';
import ListarCodelingoChallenges from '../../uiComponents/ListarCodelingoChallenges/ListarCodelingoChallenges';
import ListarRetosCodelingoPorCalificar from '../../uiComponents/ListarRetosCodelingoPorCalificar/ListarRetosCodelingoPorCalificar';
import { DivContainerCodelingDashboardTeacher, DivContainerPadre } from './styledCodelingoTeacher';
// import { getCodelingoCategories, getCategoryCodelingo } from '../../reducers/codelinogReducer'; no eliminar

const CodeLingoTeacher = () => {
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
    <DivContainerPadre>
      <DivContainerCodelingDashboardTeacher>
        <div>
          <CreateCodelingoChallenge />
        </div>
        <div>
          <h1>Retos codelingo</h1>
          <ListarCodelingoChallenges />
        </div>
        <div>
          <h1>Retos por calificar</h1>
          <ListarRetosCodelingoPorCalificar />
        </div>
      </DivContainerCodelingDashboardTeacher>
    </DivContainerPadre>

  );
};

export default CodeLingoTeacher;
