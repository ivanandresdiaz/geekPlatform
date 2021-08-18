import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { listarTeachers } from '../../actions/teachersActions';
import { getTeachers } from '../../reducers/teachersReducer';
import { ContainerTeachers, TeachersContent } from './ListarTeachersSocialGeekStyles';

const ListarTeachersSocialGeek = (props) => {
  const { corteId } = props;
  const dispatch = useDispatch();
  const teachers = useSelector(getTeachers);
  useEffect(() => {
    if (!(teachers.length > 0)) {
      dispatch(listarTeachers());
    }
  }, []);
  return (
    <>
      <div style={{ background: 'white', marginTop: '20px', marginBottom: '20px', marginLeft: '20px', marginRight: '20px', borderRadius: '12px' }}>
        <ContainerTeachers>
          <div style={{ padding: '20px' }}>
            <h4 style={{ textAlign: 'start', marginBottom: '10px' }}>
              Profesores
            </h4>
            {teachers.length > 0 && teachers.map((teacher) => (
              <TeachersContent key={teacher.uid}>
                <img src={teacher.photoURL} alt="Imagen de perfil" />
                <Link style={{ alignSelf: 'center' }} to={`/socialGeek/${corteId}/${teacher.uid}`}>
                  {teacher.fullName}
                </Link>
              </TeachersContent>
            ))}
          </div>
        </ContainerTeachers>
      </div>
    </>
  );
};

export default ListarTeachersSocialGeek;
