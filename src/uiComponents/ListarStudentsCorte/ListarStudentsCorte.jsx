import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getFirestoreStudentsCorte } from '../../actions/studentsActions';
import { getStudentsCorte } from '../../reducers/studentsReducer';

const ListarStudentsCorte = (props) => {
  const { corteId } = props;
  const dispatch = useDispatch();
  const studentsCorte = useSelector(getStudentsCorte);
  useEffect(() => {
    if (studentsCorte.length > 0) {
    } else {
      dispatch(getFirestoreStudentsCorte(corteId));
    }
  }, []);
  console.log(studentsCorte);
  return (
    <div>
      <h1>Estudiante</h1>
      <div>
        {studentsCorte.length > 0 && studentsCorte.map((student) => <p key={student.uid}>{student.fullName}</p>)}
      </div>

    </div>
  );
};

export default ListarStudentsCorte;
