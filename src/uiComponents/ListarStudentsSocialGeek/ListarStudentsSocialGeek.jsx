import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getFirestoreStudentsCorte } from '../../actions/studentsActions';
import { getStudentsCorte } from '../../reducers/studentsReducer';

const ListarStudentsSocialGeek = (props) => {
  const { corteId } = props;
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
            <div>
              <Link to={`/socialGeek/${student.uid}`}>
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

