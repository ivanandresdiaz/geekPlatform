import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { getFirestoreStudentsCorte } from '../../actions/studentsActions';
import { getStudentsCorte } from '../../reducers/studentsReducer';

const ListarStudentsSocialGeek = (props) => {
  const { corteId } = props;
  const dispatch = useDispatch();
  const studentsCorte = useSelector(getStudentsCorte);
  useEffect(() => {
    if (!(studentsCorte.length > 0)) {
      dispatch(getFirestoreStudentsCorte(corteId));
    }
  }, []);
  console.log(studentsCorte);

  return (
    <div>
      {
        studentsCorte.length > 0 && studentsCorte.map((student) => {
          return (
            <div key={student.uid}>
              <Link to={`/socialGeek/${corteId}/${student.uid}`}>
                {student.fullName}
              </Link>
            </div>
          );
        })
      }
    </div>

  );
};

export default ListarStudentsSocialGeek;

