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
    } else if (studentsCorte[0].corteId !== corteId) {
      dispatch(getFirestoreStudentsCorte(corteId));
    }
  }, []);

  return (
    <div>
      {
        studentsCorte.length > 0 && studentsCorte.map((student) => {
          if (student.corteId === corteId) {
            return (
              <div key={student.uid}>
                <Link to={`/socialGeek/${corteId}/${student.uid}`}>
                  {student.fullName}
                </Link>
              </div>
            );
          }

        })
      }
    </div>

  );
};

export default ListarStudentsSocialGeek;

