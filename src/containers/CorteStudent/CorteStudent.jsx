import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import ListarStudentsCorte from '../../uiComponents/ListarStudentsCorte/ListarStudentsCorte';
import ListarSalones from '../../uiComponents/ListarSalones/ListarSalones';
import Calendar from '../../components/Calendar/Calendar';
import { getCorteId, getUserId } from '../../reducers/authReducer';
import ListarStudentsToVote from '../../uiComponents/ListarStudentsToVote/ListarStudentsToVote';

const CorteStudent = (props) => {
  const corteId = useSelector(getCorteId);
  const loggedUserId = useSelector(getUserId);
  const loggedUserVoted = useSelector((state) => state.auth.voted);
  return (
    <div>
      <h1>
        Corte
        {' '}
        {corteId}
      </h1>
      <div>
        <h3>Crear salon</h3>
        <Link to='/bancoRecursosAcademicos'>
          Banco de recursos Academicos LINKKK!!!
        </Link>
        <div>
          <Link to='/socialGeek'>
            Social Geek LINKK!!
          </Link>
        </div>

        <p>Listado de salones</p>
        <ListarSalones corteId={corteId} />
        <h1>Aqui va el calendario grupal(proximamente)</h1>
        <Calendar corteId={corteId} />
        <h1>Aqui va el calendario de clases (proximamente)</h1>
        <ListarStudentsCorte corteId={corteId} />
        {loggedUserVoted && <ListarStudentsToVote />}
      </div>
    </div>
  );
};

export default CorteStudent;
