import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getFirestoreStudentsCorte } from '../../actions/studentsActions';
import { getStudentsCorte } from '../../reducers/studentsReducer';

const ListarStudentsCorte = (props) => {
  const { corteId } = props;
  const dispatch = useDispatch();
  const studentsCorte = useSelector(getStudentsCorte);
  useEffect(() => {
    if (!(studentsCorte.length > 0)) {
      dispatch(getFirestoreStudentsCorte(corteId));
    }
  }, []);
  return (
    <div>
      <h1>Listar</h1>
      <p>Cada estudiante va a ser un Link que lo redireccionara al perfil </p>
      <div>
        {studentsCorte.length > 0 && studentsCorte.map((student) => (
          <div key={student.uid}>
            <Link to={`/socialGeek/${student.uid}`}>
              {student.fullName}
              {' '}
              Link
            </Link>
          </div>

        ))}
      </div>

    </div>
  );
};

export default ListarStudentsCorte;
