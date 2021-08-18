import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { getFirestoreStudentsCorte } from '../../actions/studentsActions';
import { getStudentsCorte } from '../../reducers/studentsReducer';
import { ContainerStudents, StudentsContent } from './ListarStudentsSocialGeekStyles';

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
    <>
      <div style={{ background: 'white', marginTop: '20px', marginBottom: '20px', marginLeft: '20px', marginRight: '20px', borderRadius: '12px' }}>
        <ContainerStudents>
          <div style={{ padding: '20px' }}>
            <h4 style={{ textAlign: 'start', marginBottom: '10px' }}>
              Estudiantes
            </h4>
            {
              studentsCorte.length > 0 && studentsCorte.map((student) => {
                if (student.corteId === corteId) {
                  return (
                    <StudentsContent key={student.uid}>
                      <img src={student.photoURL} alt="Imagen de perfil" />
                      <Link style={{ alignSelf: 'center' }} to={`/socialGeek/${corteId}/${student.uid}`}>
                        {student.fullName}
                      </Link>
                    </StudentsContent>
                  );
                }
              })
            }
          </div>
        </ContainerStudents>
      </div>
    </>

  );
};

export default ListarStudentsSocialGeek;

